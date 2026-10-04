# ha-smartphone-card

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
| `type` | `text` \| `bar` \| `icon`; numeric `%` sensors automatically default to `bar` |
| `min`, `max` | range used to compute the percentage for `bar` type (default 0–100) |
| `value_attribute` | show this attribute instead of the raw state — e.g. some "last used app" sensors report the Android package name (`com.pinterest`) as their state, with a friendlier label in an attribute (check Developer Tools → States for the exact attribute name on your entity, e.g. `app_name`) |

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
    service: notify.mobile_app_sm_a346b
    data:
      message: command_flashlight
      data:
        command: turn_on   # turn_on | turn_off
  - icon: mdi:refresh
    name: Refresh sensors
    service: notify.mobile_app_sm_a346b
    data:
      message: command_update_sensors
  - icon: mdi:lightbulb-outline
    name: Toggle lamp
    service: switch.toggle
    entity_id: switch.living_room_lamp
```

Tap the camera notch or the device name in the status bar to open a sheet listing these as tappable rows.

| Key | Description |
|---|---|
| `service` | `domain.service` to call |
| `entity_id` | optional, passed as the service call's `entity_id` |
| `data` | optional extra service data (merged with `entity_id`) |

The `notify.mobile_app_<device>` examples above use the [Android companion app's special notification commands](https://companion.home-assistant.io/docs/notifications/notification-commands/) — replace `notify.mobile_app_sm_a346b` with your own device's notify service. There's no "find phone / ring loudly" command built into the app; `command_dnd`/`command_ringer_mode`/`command_flashlight`/`command_update_sensors` above are real, documented ones. The companion app docs list several more (volume, screen brightness, Bluetooth, launching an app, opening a dashboard, etc.) that work the same way.

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
