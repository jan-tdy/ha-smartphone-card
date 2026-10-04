# ha-smartphone-card

Lovelace karta pre Home Assistant na zobrazenie senzorov z Companion App (batéria, poloha, jas, kroky, Wi-Fi, posledná appka...).

Nainštalovateľná cez HACS (custom repository), plne nastaviteľná cez vizuálny editor (bez nutnosti písať YAML), v oficiálnom vzhľade Home Assistant.

## Režimy

- **list** – zoznam riadkov v štýle oficiálnej `entities` karty. Percentuálne/battery hodnoty je možné zobraziť aj ako progress bar.
- **phone** – karta vyzerá ako telefón (zaoblený rám, notch, status bar s hodinami, Wi-Fi/dátami a batériou), s "displejom" obsahujúcim ostatné zvolené entity (poloha, jas, posledná appka, kroky...).

## Inštalácia

### HACS

1. HACS → Frontend → ⋮ → Custom repositories → pridaj URL tohto repozitára, kategória „Lovelace".
2. Nainštaluj „Smartphone Card".
3. Reload prehliadača.

### Manuálne

1. Skopíruj `dist/ha-smartphone-card.js` do `config/www/`.
2. V Nastavenia → Dashboardy → Resources pridaj `/local/ha-smartphone-card.js` ako JavaScript Module.

## Konfigurácia

Odporúčaný spôsob je cez vizuálny editor karty (Pridať kartu → Smartphone Card). Nižšie je príklad YAML.

### Zoznam (list)

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

### Telefón (phone)

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
    name: Poloha
  - entity: sensor.sm_a346b_light_sensor
    type: bar
    max: 1000
  - entity: sensor.sm_a346b_last_used_app
  - entity: sensor.sm_a346b_steps_sensor
```

## Možnosti riadku (`rows`)

| Kľúč | Popis |
|---|---|
| `entity` | entity ID (povinné) |
| `name` | vlastný názov, inak `friendly_name` |
| `icon` | vlastná ikona, inak ikona entity |
| `type` | `text` \| `bar` \| `icon`; pri číselných % senzoroch sa `bar` zvolí automaticky |
| `min`, `max` | rozsah pre výpočet percenta v `bar` type (default 0–100) |
