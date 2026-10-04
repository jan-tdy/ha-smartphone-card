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

export type SmartphoneCardQuickActionType = "service" | "message";

export interface SmartphoneCardQuickAction {
  /** "service" (default): call `service` immediately with `entity_id`/`data`.
   * "message": `service` is a notify target (a notify entity_id, or a legacy
   * notify.* service name) and tapping opens a compose sheet (title/message/
   * priority/channel) instead of calling anything right away. */
  type?: SmartphoneCardQuickActionType;
  service: string;
  entity_id?: string;
  data?: Record<string, unknown>;
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
