import { LovelaceCardConfig } from "custom-card-helpers";

export type RowDisplayType = "text" | "bar" | "icon" | "message";

export interface SmartphoneCardRow {
  entity: string;
  name?: string;
  icon?: string;
  type?: RowDisplayType;
  unit?: string;
  min?: number;
  max?: number;
  /** Show this attribute's value instead of the entity's raw state (e.g. a
   * friendly label attribute when the state itself is a package/developer name). */
  value_attribute?: string;
}

export interface SmartphoneCardStatusBar {
  battery_entity?: string;
  charging_entity?: string;
  wifi_entity?: string;
  mobile_data_entity?: string;
}

export type SmartphoneCardMode = "list" | "phone";

export type SmartphoneCardQuickActionType = "service" | "message" | "toggle" | "app";

export interface SmartphoneCardQuickAction {
  /** "service" (default): call `service` immediately with `entity_id`/`data`.
   * "message": `service` is a notify target (a notify entity_id, or a legacy
   * notify.* service name) and tapping opens a compose sheet (title/message/
   * priority/channel) instead of calling anything right away.
   * "toggle": shows a switch instead of a tappable row. `service`/`data` are
   * called when turning on, `service_off`/`data_off` when turning off.
   * "app": `service` is a legacy notify.* service (the Android companion
   * app's command_launch_app needs the arbitrary `data` dict a notify entity
   * can't take) and `package_name` names the app to launch. */
  type?: SmartphoneCardQuickActionType;
  /** Required for "service"/"message". Optional for "toggle" when `entity_id`
   * is a toggleable domain entity and no explicit on/off services are needed. */
  service?: string;
  entity_id?: string;
  data?: Record<string, unknown>;
  /** toggle type only: service called to turn off (defaults to `service`, with `data_off` instead of `data`) */
  service_off?: string;
  data_off?: Record<string, unknown>;
  /** toggle type only: entity whose state reflects on/off. If it's a toggleable
   * domain (switch/light/...) and no `service`/`service_off` are set, tapping
   * toggles that entity directly. Otherwise the on/off state is tracked locally
   * in the card (and resets on reload) since there's no real entity to read it from. */
  state_entity?: string;
  /** "app" type only: the Android package name to launch, e.g. "com.whatsapp". */
  package_name?: string;
  name?: string;
  icon?: string;
}

export interface SmartphoneCardConfig extends LovelaceCardConfig {
  type: string;
  mode?: SmartphoneCardMode;
  title?: string;
  device_name?: string;
  status_bar?: SmartphoneCardStatusBar;
  rows: SmartphoneCardRow[];
  quick_actions?: SmartphoneCardQuickAction[];
  frame_color?: string;
  notch_color?: string;
}
