import { LovelaceCardConfig } from "custom-card-helpers";

export type RowDisplayType = "text" | "bar" | "icon";

export interface SmartphoneCardRow {
  entity: string;
  name?: string;
  icon?: string;
  type?: RowDisplayType;
  unit?: string;
  min?: number;
  max?: number;
}

export interface SmartphoneCardStatusBar {
  battery_entity?: string;
  charging_entity?: string;
  wifi_entity?: string;
  mobile_data_entity?: string;
}

export type SmartphoneCardMode = "list" | "phone";

export interface SmartphoneCardConfig extends LovelaceCardConfig {
  type: string;
  mode?: SmartphoneCardMode;
  title?: string;
  device_name?: string;
  status_bar?: SmartphoneCardStatusBar;
  rows: SmartphoneCardRow[];
}
