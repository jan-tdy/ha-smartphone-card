# ha-smartphone-card

If you found this useful, please consider giving this repo a star!

A Lovelace card for Home Assistant that displays sensors from the Companion App (battery, location, light sensor, steps, Wi-Fi, last used app...).

Installable via HACS (custom repository), fully configurable through a visual editor (no YAML required), in the official Home Assistant look and feel.

## Modes

- **list** – rows styled like the official `entities` card. Percentage/battery values can also be rendered as a progress bar.
- **phone** – the card looks like a phone (rounded frame, notch, status bar with clock, Wi-Fi/mobile data and battery), with a "screen" showing the other selected entities (location, brightness, last used app, steps...). Tapping a row or a status bar icon opens a small in-phone detail sheet (icon, name, state, a toggle button for toggleable domains, and a "More details" link to Home Assistant's own dialog) instead of leaving the phone illustration. In list mode, tapping a row opens Home Assistant's standard more-info dialog directly.

## Installation

### HACS

1. HACS → Frontend → ⋮ → Custom repositories → add this repository's URL, category "Lovelace".
2. Install "Smartphone Card".
3. Reload your browser.

### Manual

1. Copy `dist/ha-smartphone-card.js` to `config/www/`.
2. Under Settings → Dashboards → Resources, add `/local/ha-smartphone-card.js` as a JavaScript Module.

## Configuration

The recommended way is through the card's visual editor (Add Card → Smartphone Card), which uses Home Assistant's own selector dropdowns, entity/device pickers and icon picker. The editor also has an "Add entities from a device" picker: pick the phone's device and it bulk-adds a row for every one of its entities (it skips diagnostic/config entities and anything already used in the status bar). Below is an example YAML.

### List

```yaml
type: custom:ha-smartphone-card
mode: list
title: SM-A346B
rows:
  - entity: sensor.sm_a346b_battery_level
    type: bar
  - entity: binary_sensor.sm_a346b_is_charging
  - entity: sensor.sm_a346b_last_used_app
  - entity: sensor.sm_a346b_light_sensor
    type: bar
    max: 1000
  - entity: sensor.sm_a346b_next_alarm
  - entity: sensor.sm_a346b_steps_sensor
  - entity: sensor.sm_a346b_wifi_connection
```

### Phone

```yaml
type: custom:ha-smartphone-card
mode: phone
device_name: SM-A346B
frame_color: "#3a3a3c"
status_bar:
  battery_entity: sensor.sm_a346b_battery_level
  charging_entity: binary_sensor.sm_a346b_is_charging
  wifi_entity: binary_sensor.wifi_connection_state_sm_a346b
rows:
  - entity: device_tracker.sm_a346b
    icon: mdi:map-marker
    name: Location
  - entity: sensor.sm_a346b_light_sensor
    type: bar
    max: 1000
  - entity: sensor.sm_a346b_last_used_app
  - entity: sensor.sm_a346b_steps_sensor
```

## Row options (`rows`)

| Key | Description |
|---|---|
| `entity` | entity ID (required) |
| `name` | custom name, otherwise the entity's `friendly_name` |
| `icon` | custom icon, otherwise the entity's icon |
| `type` | `text` \| `bar` \| `icon` \| `message`; numeric `%` sensors automatically default to `bar` |
| `min`, `max` | range used to compute the percentage for `bar` type (default 0–100) |
| `value_attribute` | show this attribute instead of the raw state — e.g. some "last used app" sensors report the Android package name (`com.pinterest`) as their state, with a friendlier label in an attribute (check Developer Tools → States for the exact attribute name on your entity, e.g. `app_name`) |

A `type: message` row doesn't display a state at all — tapping it opens the same compose dialog described under [Quick actions](#quick-actions-phone-mode) below. Its `entity` is the notify target (a `notify.*` entity, or a legacy `notify.*` service name):

```yaml
- entity: notify.mobile_app_sm_a346b
  type: message
  name: Send message
  icon: mdi:message-text
```

Percentage/battery bars (`type: bar` on a `%` unit or `device_class: battery` entity) are colored by value: red at 20% or below, orange up to 50%, green above. Bars on other units (lux, steps...) keep the theme's accent color.

## Quick actions (phone mode)

```yaml
quick_actions:
  - icon: mdi:moon-waning-crescent
    name: Do Not Disturb
    service: notify.mobile_app_sm_a346b
    data:
      message: command_dnd
      data:
        command: total_silence   # alarms_only | off | priority_only | total_silence
  - icon: mdi:volume-mute
    name: Silent
    service: notify.mobile_app_sm_a346b
    data:
      message: command_ringer_mode
      data:
        command: silent   # normal | silent | vibrate
  - icon: mdi:flashlight
    name: Flashlight
    type: toggle
    service: notify.mobile_app_sm_a346b
    data:
      message: command_flashlight
      data:
        command: turn_on
    service_off: notify.mobile_app_sm_a346b
    data_off:
      message: command_flashlight
      data:
        command: turn_off
  - icon: mdi:refresh
    name: Refresh sensors
    service: notify.mobile_app_sm_a346b
    data:
      message: command_update_sensors
  - icon: mdi:lightbulb-outline
    name: Toggle lamp
    type: toggle
    entity_id: switch.living_room_lamp
  - icon: mdi:message-text
    name: Send message
    type: message
    service: notify.mobile_app_sm_a346b
```

Tap the camera notch or the device name in the status bar to open a sheet listing these as tappable rows.

| Key | Description |
|---|---|
| `type` | `service` (default) — call `service` immediately — `message` — open a compose dialog — `toggle` — show a switch — or `app` — launch an app on the phone |
| `service` | `domain.service` to call, or (when `type: message`) the notify target, or (when `type: toggle`) the "turn on" service, or (when `type: app`) the legacy `notify.*` service to send `command_launch_app` through |
| `entity_id` | optional, passed as the service call's `entity_id` (ignored for `type: message`/`type: app`); for `type: toggle`, also used to read the current on/off state when it's a toggleable domain |
| `data` | optional extra service data, merged with `entity_id` (ignored for `type: message`/`type: app`); for `type: toggle`, used on the "turn on" call |
| `service_off`, `data_off` | `type: toggle` only — service/data used for the "turn off" call (defaults to `service`/`data`) |
| `state_entity` | `type: toggle` only — entity whose state is read for on/off, when it's different from the entity `service`/`service_off` act on (or when there's no real entity at all) |
| `package_name` | `type: app` only — the Android package name to launch, e.g. `com.whatsapp` |

### Launch app quick actions

```yaml
quick_actions:
  - icon: mdi:whatsapp
    name: Open WhatsApp
    type: app
    service: notify.mobile_app_sm_a346b
    package_name: com.whatsapp
```

The editor's app picker is a searchable dropdown pre-filled with common apps (WhatsApp, Chrome, Gmail, Maps, Spotify, Instagram...) but also takes any custom package name you type — there's no API for Home Assistant to list what's actually installed on the phone, so pick from the list or type the package name yourself (it's the id shown on the app's Play Store URL, e.g. `play.google.com/store/apps/details?id=com.whatsapp`). This uses the same `command_launch_app` companion-app command as a `type: service` quick action would, just with a dedicated picker instead of hand-writing the `data` object. **Requires the "Display over other apps" permission**, which the app will prompt for the first time you use it.

Leave `package_name` empty to pick the app at tap time instead of fixing one in the config — tapping the action then opens the same searchable picker right in the card, so one "Launch app" quick action can launch anything instead of needing one action per app:

```yaml
quick_actions:
  - icon: mdi:apps
    name: Launch app…
    type: app
    service: notify.mobile_app_sm_a346b
```

### Toggle quick actions

Some commands are naturally on/off rather than one-shot — a flashlight, Do Not Disturb, a switch — and showing them as a switch instead of a tap-to-fire button is clearer:

```yaml
quick_actions:
  # A real toggleable entity: leave `service` empty and it's toggled directly,
  # and the switch always reflects its live state.
  - type: toggle
    icon: mdi:lightbulb-outline
    name: Toggle lamp
    entity_id: switch.living_room_lamp

  # A companion-app command with no backing entity: give separate "on"/"off"
  # service calls. There's no state to read back, so the switch tracks its own
  # on/off locally in the card (it resets to off on reload).
  - type: toggle
    icon: mdi:flashlight
    name: Flashlight
    service: notify.mobile_app_sm_a346b
    data:
      message: command_flashlight
      data:
        command: turn_on
    service_off: notify.mobile_app_sm_a346b
    data_off:
      message: command_flashlight
      data:
        command: turn_off
```

If a real sensor exists for the on/off state (e.g. a flashlight `binary_sensor`), set `state_entity` to it and the switch will reflect that instead of the local guess.

### Send message

`type: message` (on a quick action or a row) opens a small compose dialog right in the card — Title, Message, and (legacy targets only, see below) Priority/Channel — with Cancel/Send buttons, instead of calling a fixed service. `service` names the notify target:

- A modern **notify entity** (e.g. `notify.sm_a346b`, from the `notify` domain as a real entity, introduced in HA 2024.10) — sent via the generic `notify.send_message` action targeting that entity. This action's schema only accepts `message` and `title`, nothing else — so the compose dialog only shows those two fields for an entity target.
- A **legacy notify service** (e.g. `notify.mobile_app_sm_a346b`, from before the notify-entity migration) — called directly, since it isn't a real entity. These accept an arbitrary `data` dict, so the compose dialog also shows Priority (sent as `data.push.priority: high`) and Channel (`data.channel`) — both specific to the Android companion app's notification integration; other legacy notify services (email, Telegram, etc.) will ignore them.

The card tells the two apart automatically by checking whether `service` resolves to an actual entity state.

### Other Android companion app notification commands

The `notify.mobile_app_<device>` quick-action examples above use the Android companion app's special notification commands (sent as `data: {message: "command_...", data: {...}}` on an otherwise normal notify call). The full set, from the [companion app docs](https://companion.home-assistant.io/docs/notifications/notification-commands/):

| `message` | `data` fields | What it does |
|---|---|---|
| `command_activity` | `intent_action`, `intent_uri`, `intent_package_name` | Launch an activity via an intent URI |
| `command_app_lock` | `app_lock_enabled`, `app_lock_timeout`, `home_bypass_enabled` | Change the companion app's biometric lock/timeout settings |
| `command_auto_screen_brightness` | `command`: `turn_on`\|`turn_off` | Toggle automatic screen brightness |
| `command_beacon_monitor` | `command`: `turn_on`\|`turn_off` | Toggle beacon monitoring |
| `command_ble_transmitter` | `command`: `turn_on`\|`turn_off`\|`ble_set_*` | Control the iBeacon transmitter |
| `command_bluetooth` | `command`: `turn_on`\|`turn_off` | Turn Bluetooth on/off |
| `command_broadcast_intent` | `intent_action`, `intent_package_name`, `intent_extras` | Send a broadcast intent to another app |
| `command_dnd` | `command`: `alarms_only`\|`off`\|`priority_only`\|`total_silence` | Set Do Not Disturb mode |
| `command_flashlight` | `command`: `turn_on`\|`turn_off` | Control the flashlight |
| `command_high_accuracy_mode` | `command`: `turn_on`\|`turn_off`\|`force_on`\|`force_off`\|`high_accuracy_set_update_interval`, `high_accuracy_update_interval` | Manage high-accuracy location tracking |
| `command_launch_app` | `package_name` | Launch an app by package name |
| `command_media` | `media_command`, `media_package_name` | Control active media playback |
| `command_persistent_connection` | `persistent`: `always`\|`home_wifi`\|`screen_on`\|`never` | Set the persistent-connection mode |
| `command_ringer_mode` | `command`: `normal`\|`silent`\|`vibrate` | Set the ringer mode |
| `command_screen_brightness_level` | `command`: 0–255 | Set screen brightness |
| `command_screen_off_timeout` | `command`: milliseconds | Set the screen auto-off timeout |
| `command_screen_on` | `command` (optional): `keep_screen_on` | Turn the screen on |
| `command_stop_tts` | — | Stop text-to-speech playback |
| `command_update_sensors` | — | Force-refresh all enabled sensors |
| `command_volume_level` | `command`: 0+, `media_stream` | Set volume on a given audio stream |
| `command_wake_word_detection` | `command`: `turn_on`\|`turn_off` | Toggle voice-assistant wake word detection |
| `command_webview` | `command` (optional): a dashboard path or entity id | Open the app to the homepage or a specific dashboard/view |

There is no "find phone / ring loudly" command built into the app. Replace `notify.mobile_app_sm_a346b` with your own device's notify target in all of the above.

#### These commands need Android permissions enabled first

The service call always succeeds (it's just a notification sent to the phone), but the phone silently ignores the command unless the required permission is granted — this is the most common reason a command "does nothing":

| Command(s) | Required permission |
|---|---|
| `command_flashlight` | **Camera** permission, plus **Display over other apps** |
| `command_launch_app` | **Display over other apps** (the app prompts for this the first time you send the command) |
| `command_dnd`, `command_ringer_mode` | **Do Not Disturb access** (Notification policy access) — the app can't prompt for this one; grant it manually under Android Settings → Apps → Special app access → Do Not Disturb access → Home Assistant. On Android 15+, the app can only turn DND back off if it was the one that turned it on |
| `command_high_accuracy_mode` | **Location** permission, with location services turned on |
| `command_bluetooth` | On Android 12+, also **Nearby devices** permission |

Also make sure the Home Assistant app itself is excluded from battery optimization (Android Settings → Apps → Home Assistant → Battery) and has notification access enabled (Android Settings → Apps → Special app access → Notification access → Home Assistant) — otherwise Android can suspend the app in the background before it processes the command at all.

## Phone frame color

`frame_color` (phone mode only) sets the bezel color around the screen — otherwise it falls back to the theme's `--secondary-background-color`, which can look off in some themes. Any CSS color works, e.g. `"#3a3a3c"` (space gray), `"#f5f5f0"` (off-white), or a theme variable like `"var(--divider-color)"`.

`notch_color` sets the camera-notch color separately; it defaults to `frame_color` so the notch blends into the bezel.

## Sensor-reading Wi-Fi/mobile icons

If `status_bar.wifi_entity` or `status_bar.mobile_data_entity` happens to hold a numeric signal reading (a `%` or dBm-style sensor) instead of a plain on/off sensor, the status bar icon shows a signal-strength tier instead of a flat connected/disconnected icon.

## Development

```sh
npm install
npm run build   # produces dist/ha-smartphone-card.js
npm run watch   # rebuilds on change
```

`dist/ha-smartphone-card.js` is committed to the repository — HACS and manual installs load it directly, there's no build step on install. Always run `npm run build` and commit the result together with any `src/` change; CI fails the build if `dist/` is out of date.
