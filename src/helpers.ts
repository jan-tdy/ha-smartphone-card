import { HomeAssistant } from "custom-card-helpers";
import { SmartphoneCardRow } from "./types";

export function getRowState(hass: HomeAssistant, row: SmartphoneCardRow) {
  return hass.states[row.entity];
}

export function getRowName(hass: HomeAssistant, row: SmartphoneCardRow): string {
  if (row.name) return row.name;
  const stateObj = getRowState(hass, row);
  return stateObj?.attributes?.friendly_name ?? row.entity;
}

export function getRowIcon(hass: HomeAssistant, row: SmartphoneCardRow): string | undefined {
  if (row.icon) return row.icon;
  const stateObj = getRowState(hass, row);
  return stateObj?.attributes?.icon;
}

export function getRowUnit(hass: HomeAssistant, row: SmartphoneCardRow): string {
  if (row.unit !== undefined) return row.unit;
  const stateObj = getRowState(hass, row);
  return stateObj?.attributes?.unit_of_measurement ?? "";
}

export function getRowDisplayType(hass: HomeAssistant, row: SmartphoneCardRow): "text" | "bar" | "icon" {
  if (row.type) return row.type;
  const stateObj = getRowState(hass, row);
  if (!stateObj) return "text";
  const isNumeric = !Number.isNaN(Number(stateObj.state));
  const deviceClass = stateObj.attributes?.device_class;
  if (isNumeric && (deviceClass === "battery" || stateObj.attributes?.unit_of_measurement === "%")) {
    return "bar";
  }
  return "text";
}

export function getRowPercent(hass: HomeAssistant, row: SmartphoneCardRow): number | undefined {
  const stateObj = getRowState(hass, row);
  if (!stateObj) return undefined;
  const value = Number(stateObj.state);
  if (Number.isNaN(value)) return undefined;
  const min = row.min ?? 0;
  const max = row.max ?? 100;
  if (max === min) return undefined;
  const percent = ((value - min) / (max - min)) * 100;
  return Math.max(0, Math.min(100, percent));
}

export function getRowDisplayValue(hass: HomeAssistant, row: SmartphoneCardRow): string {
  const stateObj = getRowState(hass, row);
  if (!stateObj) return "—";
  const unit = getRowUnit(hass, row);
  return unit ? `${stateObj.state} ${unit}` : stateObj.state;
}

export function isOn(hass: HomeAssistant, entityId?: string): boolean {
  if (!entityId) return false;
  const stateObj = hass.states[entityId];
  if (!stateObj) return false;
  return stateObj.state === "on" || stateObj.state === "home" || stateObj.state === "connected";
}

export function stateOf(hass: HomeAssistant, entityId?: string): string | undefined {
  if (!entityId) return undefined;
  return hass.states[entityId]?.state;
}
