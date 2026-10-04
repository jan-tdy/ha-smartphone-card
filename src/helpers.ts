import { HomeAssistant } from "custom-card-helpers";
import { SmartphoneCardRow } from "./types";

export function getRowState(hass: HomeAssistant, row: SmartphoneCardRow) {
  return hass.states[row.entity];
}

export interface EntityRegistryEntry {
  entity_id: string;
  device_id?: string | null;
  name?: string | null;
  original_name?: string | null;
  hidden_by?: string | null;
  disabled_by?: string | null;
  entity_category?: string | null;
}

interface DeviceRegistryEntry {
  name?: string | null;
  name_by_user?: string | null;
}

/** Display name for an entity with the device name HA prepends to
 * `friendly_name` stripped off (e.g. "SM-A346B Battery level" -> "Battery level"). */
export function getEntityDisplayName(hass: HomeAssistant, entityId: string): string {
  const stateObj = hass.states[entityId];
  const friendlyName = stateObj?.attributes?.friendly_name ?? entityId;

  const entityEntry = ((hass as any).entities as Record<string, EntityRegistryEntry> | undefined)?.[entityId];
  if (entityEntry?.name) return entityEntry.name;
  if (entityEntry?.original_name) return entityEntry.original_name;

  // Entity has no per-entity name in the registry: fall back to stripping the
  // device name HA prepends to friendly_name.
  const deviceId = entityEntry?.device_id;
  const device = deviceId
    ? ((hass as any).devices as Record<string, DeviceRegistryEntry> | undefined)?.[deviceId]
    : undefined;
  const deviceName = device?.name_by_user ?? device?.name;
  if (deviceName && friendlyName.startsWith(deviceName)) {
    const stripped = friendlyName.slice(deviceName.length).trim();
    if (stripped) return stripped;
  }

  return friendlyName;
}

export function getRowName(hass: HomeAssistant, row: SmartphoneCardRow): string {
  if (row.name) return row.name;
  return getEntityDisplayName(hass, row.entity);
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

export function getRowDisplayType(hass: HomeAssistant, row: SmartphoneCardRow): "text" | "bar" | "icon" | "message" {
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

  if (row.value_attribute) {
    const attrValue = stateObj.attributes?.[row.value_attribute];
    if (attrValue !== undefined && attrValue !== null && attrValue !== "") {
      return String(attrValue);
    }
  }

  if (isLocationEntity(hass, row.entity)) {
    return formatLocationState(stateObj.state);
  }

  const unit = getRowUnit(hass, row);
  return unit ? `${stateObj.state} ${unit}` : stateObj.state;
}

export function getBarColor(hass: HomeAssistant, row: SmartphoneCardRow): string | undefined {
  const stateObj = getRowState(hass, row);
  if (!stateObj) return undefined;
  const unit = getRowUnit(hass, row);
  const deviceClass = stateObj.attributes?.device_class;
  const isPercentLike = unit === "%" || deviceClass === "battery";
  if (!isPercentLike) return undefined;

  const percent = getRowPercent(hass, row);
  if (percent === undefined) return undefined;
  if (percent <= 20) return "var(--error-color, #db4437)";
  if (percent <= 50) return "var(--warning-color, #ff9800)";
  return "var(--success-color, #4caf50)";
}

/** Rough 1-4 signal tier from a numeric reading, accepting either a 0-100
 * percentage or a dBm-style negative value (-100 = 0%, 0 = 100%). */
function signalTier(value: number, unit: string): 1 | 2 | 3 | 4 {
  let percent: number;
  if (unit === "%") {
    percent = value;
  } else if (value <= 0 && value >= -100) {
    percent = value + 100;
  } else {
    percent = value;
  }
  percent = Math.max(0, Math.min(100, percent));
  if (percent >= 75) return 4;
  if (percent >= 50) return 3;
  if (percent >= 25) return 2;
  return 1;
}

export function getWifiIcon(hass: HomeAssistant, entityId: string | undefined, connected: boolean): string {
  const stateObj = entityId ? hass.states[entityId] : undefined;
  const value = stateObj ? Number(stateObj.state) : NaN;
  if (stateObj && !Number.isNaN(value)) {
    const unit = stateObj.attributes?.unit_of_measurement ?? "";
    return `mdi:wifi-strength-${signalTier(value, unit)}`;
  }
  return connected ? "mdi:wifi" : "mdi:wifi-off";
}

export function getCellularIcon(hass: HomeAssistant, entityId: string | undefined): string {
  const stateObj = entityId ? hass.states[entityId] : undefined;
  const value = stateObj ? Number(stateObj.state) : NaN;
  if (stateObj && !Number.isNaN(value)) {
    const unit = stateObj.attributes?.unit_of_measurement ?? "";
    return `mdi:signal-cellular-${Math.min(3, signalTier(value, unit))}`;
  }
  return "mdi:signal-cellular-3";
}

const TOGGLE_DOMAINS = new Set([
  "switch",
  "light",
  "fan",
  "input_boolean",
  "siren",
  "lock",
  "cover",
  "humidifier",
]);

export function isToggleableDomain(domain: string): boolean {
  return TOGGLE_DOMAINS.has(domain);
}

export function isOn(hass: HomeAssistant, entityId?: string): boolean {
  if (!entityId) return false;
  const stateObj = hass.states[entityId];
  if (!stateObj) return false;
  return stateObj.state === "on" || stateObj.state === "home" || stateObj.state === "connected";
}

const DISCONNECTED_STATES = new Set([
  "off",
  "unavailable",
  "unknown",
  "not_connected",
  "not connected",
  "disconnected",
  "none",
  "",
]);

/**
 * Some companion-app sensors (e.g. "Wi-Fi Connection") report the SSID or
 * carrier name as their state instead of a plain on/off, so "connected"
 * means "anything other than one of the known not-connected states".
 */
export function isConnected(hass: HomeAssistant, entityId?: string): boolean {
  if (!entityId) return false;
  const stateObj = hass.states[entityId];
  if (!stateObj) return false;
  return !DISCONNECTED_STATES.has(stateObj.state.toLowerCase());
}

export function stateOf(hass: HomeAssistant, entityId?: string): string | undefined {
  if (!entityId) return undefined;
  return hass.states[entityId]?.state;
}

export interface HistoryPoint {
  state: string;
  last_changed: string;
}

const LOCATION_DOMAINS = new Set(["device_tracker", "person"]);

/** True for device_tracker/person entities, or any entity whose state carries
 * latitude/longitude attributes (e.g. some companion-app "Location" sensors). */
export function isLocationEntity(hass: HomeAssistant, entityId: string): boolean {
  const domain = entityId.split(".")[0];
  if (LOCATION_DOMAINS.has(domain)) return true;
  const attrs = hass.states[entityId]?.attributes;
  return typeof attrs?.latitude === "number" && typeof attrs?.longitude === "number";
}

export interface LocationHistoryPoint {
  lat: number;
  lon: number;
  state: string;
  last_changed: string;
}

/** Slippy-map global pixel coordinates (256px tiles) for a lat/lon at a zoom level. */
export function latLonToPixel(lat: number, lon: number, zoom: number): { x: number; y: number } {
  const scale = 256 * Math.pow(2, zoom);
  const x = ((lon + 180) / 360) * scale;
  const sinLat = Math.max(-0.9999, Math.min(0.9999, Math.sin((lat * Math.PI) / 180)));
  const y = (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * scale;
  return { x, y };
}

/** A readable label for a device_tracker/person state ("not_home" -> "Not home"). */
export function formatLocationState(state: string): string {
  const spaced = state.replace(/_/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

// A curated shortlist of common Android package names, searchable in a
// dropdown; shared between the editor's quick-action config and the card's
// own runtime app picker (opened when a "Launch app" quick action has no
// package_name preconfigured).
export const COMMON_ANDROID_APPS: { value: string; label: string }[] = [
  { value: "com.whatsapp", label: "WhatsApp" },
  { value: "com.android.chrome", label: "Chrome" },
  { value: "com.google.android.gm", label: "Gmail" },
  { value: "com.google.android.apps.maps", label: "Google Maps" },
  { value: "com.google.android.youtube", label: "YouTube" },
  { value: "com.spotify.music", label: "Spotify" },
  { value: "com.instagram.android", label: "Instagram" },
  { value: "com.facebook.katana", label: "Facebook" },
  { value: "com.facebook.orca", label: "Messenger" },
  { value: "org.telegram.messenger", label: "Telegram" },
  { value: "org.thoughtcrime.securesms", label: "Signal" },
  { value: "com.twitter.android", label: "X (Twitter)" },
  { value: "com.android.camera2", label: "Camera" },
  { value: "com.android.dialer", label: "Phone" },
  { value: "com.android.vending", label: "Play Store" },
  { value: "io.homeassistant.companion.android", label: "Home Assistant" },
  { value: "com.netflix.mediaclient", label: "Netflix" },
  { value: "com.google.android.apps.photos", label: "Google Photos" },
  { value: "com.google.android.calendar", label: "Google Calendar" },
  { value: "com.google.android.deskclock", label: "Clock" },
];

export function isMostlyNumeric(points: HistoryPoint[]): boolean {
  if (!points.length) return false;
  const numeric = points.filter((p) => p.state !== "" && !Number.isNaN(Number(p.state)));
  return numeric.length / points.length > 0.8;
}
