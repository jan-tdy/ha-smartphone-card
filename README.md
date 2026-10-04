# ha-smartphone-card

A Lovelace card for Home Assistant that displays sensors from the Companion App (battery, location, light sensor, steps, Wi-Fi, last used app...).

Installable via HACS (custom repository), fully configurable through a visual editor (no YAML required), in the official Home Assistant look and feel.

## Modes

- **list** – rows styled like the official `entities` card. Percentage/battery values can also be rendered as a progress bar.
- **phone** – the card looks like a phone (rounded frame, notch, status bar with clock, Wi-Fi/mobile data and battery), with a "screen" showing the other selected entities (location, brightness, last used app, steps...).

## Installation

### HACS

1. HACS → Frontend → ⋮ → Custom repositories → add this repository's URL, category "Lovelace".
2. Install "Smartphone Card".
3. Reload your browser.

### Manual

1. Copy `dist/ha-smartphone-card.js` to `config/www/`.
2. Under Settings → Dashboards → Resources, add `/local/ha-smartphone-card.js` as a JavaScript Module.

## Configuration

The recommended way is through the card's visual editor (Add Card → Smartphone Card). Below is an example YAML.

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
