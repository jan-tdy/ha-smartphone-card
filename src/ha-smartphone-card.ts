import { LitElement, html, svg, css, CSSResultGroup, SVGTemplateResult, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor, computeDomain, toggleEntity } from "custom-card-helpers";
import { CARD_TYPE, EDITOR_TYPE } from "./const";
import { SmartphoneCardConfig, SmartphoneCardQuickAction, SmartphoneCardRow } from "./types";
import {
  COMMON_ANDROID_APPS,
  formatLocationState,
  getBarColor,
  getCellularIcon,
  getRowDisplayType,
  getRowDisplayValue,
  getRowIcon,
  getEntityDisplayName,
  getRowName,
  getRowPercent,
  getRowState,
  getWifiIcon,
  HistoryPoint,
  isConnected,
  isLocationEntity,
  isMostlyNumeric,
  isOn,
  isToggleableDomain,
  latLonToPixel,
  LocationHistoryPoint,
  stateOf,
} from "./helpers";
import "./editor/ha-smartphone-card-editor";

interface LayoutOptions {
  grid_columns?: number;
  grid_rows?: number;
  grid_min_columns?: number;
  grid_min_rows?: number;
}

const COMPOSE_TEXT_SELECTOR = { text: {} } as const;
const COMPOSE_MESSAGE_SELECTOR = { text: { multiline: true } } as const;
const COMPOSE_PRIORITY_SELECTOR = {
  select: {
    mode: "dropdown",
    options: [
      { value: "normal", label: "Normal" },
      { value: "high", label: "High" },
    ],
  },
} as const;

const APP_PICKER_SELECTOR = {
  select: {
    mode: "dropdown",
    custom_value: true,
    options: COMMON_ANDROID_APPS,
  },
} as const;

@customElement(CARD_TYPE)
export class HaSmartphoneCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: SmartphoneCardConfig;

  @state() private _sheetEntityId?: string;

  @state() private _quickActionsOpen = false;

  @state() private _localToggleStates: Record<number, boolean> = {};

  @state() private _historyPoints?: HistoryPoint[];

  @state() private _locationHistory?: LocationHistoryPoint[];

  @state() private _composeTarget?: { service: string; name?: string };

  @state() private _composeTitle = "";

  @state() private _composeMessage = "";

  @state() private _composePriority = "normal";

  @state() private _composeChannel = "";

  @state() private _appPickerTarget?: { service: string; name?: string };

  @state() private _appPickerValue = "";

  private _clockInterval?: ReturnType<typeof setInterval>;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement(EDITOR_TYPE) as LovelaceCardEditor;
  }

  public static getStubConfig(): Partial<SmartphoneCardConfig> {
    return {
      mode: "list",
      rows: [],
    };
  }

  public setConfig(config: SmartphoneCardConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }
    this._config = {
      mode: "list",
      ...config,
      rows: config.rows ?? [],
    };
  }

  public getCardSize(): number {
    if (this._config?.mode === "phone") return 10;
    return 1 + (this._config?.rows?.length ?? 0);
  }

  public getLayoutOptions(): LayoutOptions {
    if (this._config?.mode === "phone") {
      return { grid_columns: 2, grid_rows: 8, grid_min_columns: 2, grid_min_rows: 6 };
    }
    const rowCount = this._config?.rows?.length ?? 0;
    return {
      grid_columns: 4,
      grid_rows: Math.max(2, Math.ceil((rowCount + 1) / 2) + 1),
      grid_min_columns: 3,
      grid_min_rows: 2,
    };
  }

  public connectedCallback(): void {
    super.connectedCallback();
    this._clockInterval = setInterval(() => this.requestUpdate(), 15000);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._clockInterval) clearInterval(this._clockInterval);
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    return this._config.mode === "phone" ? this._renderPhone() : this._renderList();
  }

  private _showMoreInfo(entityId: string) {
    const event = new CustomEvent("hass-more-info", {
      bubbles: true,
      composed: true,
      detail: { entityId },
    });
    this.dispatchEvent(event);
  }

  private _openSheet(entityId: string) {
    if (!entityId) return;
    this._sheetEntityId = entityId;
    this._historyPoints = undefined;
    this._locationHistory = undefined;
    if (isLocationEntity(this.hass, entityId)) {
      this._loadLocationHistory(entityId);
    } else {
      this._loadHistory(entityId);
    }
  }

  private _closeSheet() {
    this._sheetEntityId = undefined;
    this._historyPoints = undefined;
    this._locationHistory = undefined;
  }

  private _toggleSheetEntity() {
    if (!this._sheetEntityId) return;
    toggleEntity(this.hass, this._sheetEntityId);
  }

  private async _loadHistory(entityId: string) {
    try {
      const start = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const result = await this.hass.callApi<HistoryPoint[][]>(
        "GET",
        `history/period/${start}?filter_entity_id=${entityId}&minimal_response`
      );
      if (this._sheetEntityId !== entityId) return; // sheet closed/changed while fetching
      this._historyPoints = result?.[0] ?? [];
    } catch {
      if (this._sheetEntityId === entityId) this._historyPoints = [];
    }
  }

  private async _loadLocationHistory(entityId: string) {
    try {
      const start = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      // No minimal_response here: that flag strips attributes (lat/lon) from
      // every point but the first and last, which a location trail needs on all of them.
      const result = await this.hass.callApi<
        { state: string; last_changed: string; attributes?: { latitude?: number; longitude?: number } }[][]
      >("GET", `history/period/${start}?filter_entity_id=${entityId}`);
      if (this._sheetEntityId !== entityId) return;
      const points: LocationHistoryPoint[] = (result?.[0] ?? [])
        .filter((p) => typeof p.attributes?.latitude === "number" && typeof p.attributes?.longitude === "number")
        .map((p) => ({
          lat: p.attributes!.latitude as number,
          lon: p.attributes!.longitude as number,
          state: p.state,
          last_changed: p.last_changed,
        }));
      this._locationHistory = points;
    } catch {
      if (this._sheetEntityId === entityId) this._locationHistory = [];
    }
  }

  private _openQuickActions() {
    if (!this._config.quick_actions?.length) return;
    this._quickActionsOpen = true;
  }

  private _closeQuickActions() {
    this._quickActionsOpen = false;
  }

  private _runQuickAction(action: SmartphoneCardQuickAction, index: number) {
    if (action.type === "message") {
      this._openCompose(action);
      return;
    }
    if (action.type === "toggle") {
      this._toggleQuickAction(action, index);
      return;
    }
    if (action.type === "app") {
      if (action.package_name) {
        this._launchApp(action.service, action.package_name);
        this._closeQuickActions();
      } else {
        this._openAppPicker(action);
      }
      return;
    }
    const [domain, service] = (action.service ?? "").split(".");
    if (!domain || !service) return;
    const data: Record<string, unknown> = { ...action.data };
    if (action.entity_id) data.entity_id = action.entity_id;
    this.hass.callService(domain, service, data);
    this._closeQuickActions();
  }

  private _isQuickActionOn(action: SmartphoneCardQuickAction, index: number): boolean {
    if (action.state_entity) return isOn(this.hass, action.state_entity);
    if (action.entity_id && !action.service && isToggleableDomain(computeDomain(action.entity_id))) {
      return isOn(this.hass, action.entity_id);
    }
    return this._localToggleStates[index] ?? false;
  }

  private _toggleQuickAction(action: SmartphoneCardQuickAction, index: number) {
    const entityDomain = action.entity_id ? computeDomain(action.entity_id) : undefined;
    if (action.entity_id && entityDomain && isToggleableDomain(entityDomain) && !action.service) {
      toggleEntity(this.hass, action.entity_id);
      return;
    }

    const turningOn = !this._isQuickActionOn(action, index);
    const service = turningOn ? action.service : action.service_off || action.service;
    const [domain, serviceName] = (service ?? "").split(".");
    if (domain && serviceName) {
      const data: Record<string, unknown> = { ...(turningOn ? action.data : action.data_off ?? action.data) };
      if (action.entity_id) data.entity_id = action.entity_id;
      this.hass.callService(domain, serviceName, data);
    }
    if (!action.state_entity) {
      this._localToggleStates = { ...this._localToggleStates, [index]: turningOn };
    }
  }

  private _openCompose(action: SmartphoneCardQuickAction) {
    if (!action.service) return;
    this._composeTarget = { service: action.service, name: action.name };
    this._composeTitle = "";
    this._composeMessage = "";
    this._composePriority = "normal";
    this._composeChannel = "";
    this._quickActionsOpen = false;
  }

  private _closeCompose() {
    this._composeTarget = undefined;
  }

  private _isNotifyEntity(service: string): boolean {
    return computeDomain(service) === "notify" && !!this.hass.states[service];
  }

  private _submitCompose() {
    const target = this._composeTarget;
    if (!target || !this._composeMessage.trim()) return;

    const serviceData: Record<string, unknown> = { message: this._composeMessage };
    if (this._composeTitle.trim()) serviceData.title = this._composeTitle.trim();

    if (this._isNotifyEntity(target.service)) {
      // The generic notify.send_message action only accepts message/title —
      // no extra "data" key — so priority/channel are legacy-service only.
      this.hass.callService("notify", "send_message", serviceData, { entity_id: target.service });
    } else {
      const data: Record<string, unknown> = {};
      if (this._composeChannel.trim()) data.channel = this._composeChannel.trim();
      if (this._composePriority === "high") data.push = { priority: "high" };
      if (Object.keys(data).length) serviceData.data = data;

      const [domain, service] = target.service.split(".");
      if (domain && service) this.hass.callService(domain, service, serviceData);
    }

    this._closeCompose();
  }

  private _launchApp(service: string | undefined, packageName: string) {
    const [domain, serviceName] = (service ?? "").split(".");
    if (!domain || !serviceName || !packageName) return;
    this.hass.callService(domain, serviceName, {
      message: "command_launch_app",
      data: { package_name: packageName },
    });
  }

  private _openAppPicker(action: SmartphoneCardQuickAction) {
    if (!action.service) return;
    this._appPickerTarget = { service: action.service, name: action.name };
    this._appPickerValue = "";
    this._quickActionsOpen = false;
  }

  private _closeAppPicker() {
    this._appPickerTarget = undefined;
  }

  private _submitAppPicker() {
    const target = this._appPickerTarget;
    if (!target || !this._appPickerValue.trim()) return;
    this._launchApp(target.service, this._appPickerValue.trim());
    this._closeAppPicker();
  }

  private _renderRow(row: SmartphoneCardRow, onTap: (entityId: string) => void): TemplateResult {
    const hass = this.hass;
    const type = getRowDisplayType(hass, row);

    if (type === "message") {
      return this._renderMessageRow(row);
    }

    const stateObj = getRowState(hass, row);
    const name = getRowName(hass, row);
    const icon = getRowIcon(hass, row);
    const unavailable = !stateObj;

    return html`
      <div
        class="row ${unavailable ? "unavailable" : ""}"
        role="button"
        tabindex="0"
        @click=${() => onTap(row.entity)}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onTap(row.entity);
          }
        }}
      >
        <span class="row-icon-wrap">
          <ha-icon class="row-icon" .icon=${icon ?? "mdi:help-circle-outline"}></ha-icon>
        </span>
        <div class="row-main">
          <div class="row-name">${name}</div>
          ${type === "bar"
            ? this._renderBar(row)
            : html`<div class="row-value">${getRowDisplayValue(hass, row)}</div>`}
        </div>
      </div>
    `;
  }

  private _renderMessageRow(row: SmartphoneCardRow): TemplateResult {
    const name = row.name ?? "Send message";
    const icon = row.icon ?? "mdi:message-text";
    const openCompose = () => this._openCompose({ service: row.entity, name: row.name, icon: row.icon });

    return html`
      <div
        class="row"
        role="button"
        tabindex="0"
        @click=${openCompose}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openCompose();
          }
        }}
      >
        <span class="row-icon-wrap">
          <ha-icon class="row-icon" .icon=${icon}></ha-icon>
        </span>
        <div class="row-main">
          <div class="row-name">${name}</div>
          <div class="row-value">Tap to send</div>
        </div>
      </div>
    `;
  }

  private _renderBar(row: SmartphoneCardRow): TemplateResult {
    const percent = getRowPercent(this.hass, row);
    const value = getRowDisplayValue(this.hass, row);
    const color = getBarColor(this.hass, row);
    return html`
      <div class="bar-wrap">
        <div class="bar-track">
          <div
            class="bar-fill"
            style=${`width:${percent ?? 0}%;${color ? ` background-color:${color};` : ""}`}
          ></div>
        </div>
        <div class="bar-value">${value}</div>
      </div>
    `;
  }

  private _renderList(): TemplateResult {
    const title = this._config.title ?? this._config.device_name;
    return html`
      <ha-card .header=${title ?? nothing} class="sheet-anchor">
        <div class="card-content list-mode">
          ${this._config.rows.length
            ? this._config.rows.map((row) => this._renderRow(row, (id) => this._showMoreInfo(id)))
            : html`<div class="empty">Add entities in the card settings.</div>`}
        </div>
        ${this._composeTarget ? this._renderComposeSheet() : nothing}
      </ha-card>
    `;
  }

  private _renderPhone(): TemplateResult {
    const hass = this.hass;
    const sb = this._config.status_bar ?? {};
    const deviceName = this._config.device_name ?? this._config.title ?? "Smartphone";
    const batteryState = stateOf(hass, sb.battery_entity);
    const batteryValue = Number(batteryState);
    const batteryLow = !Number.isNaN(batteryValue) && batteryValue <= 20;
    const charging = isOn(hass, sb.charging_entity);
    const wifiConnected = isConnected(hass, sb.wifi_entity);
    const mobileDataOn = isConnected(hass, sb.mobile_data_entity);
    const now = new Date();
    const time = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

    const tapIcon = (entityId?: string) => (entityId ? this._openSheet(entityId) : undefined);
    const hasQuickActions = !!this._config.quick_actions?.length;
    const frameStyle = this._config.frame_color ? `background:${this._config.frame_color};` : "";
    const notchColor = this._config.notch_color ?? this._config.frame_color;
    const notchStyle = notchColor ? `background:${notchColor};` : "";

    return html`
      <ha-card>
        <div class="phone">
          <div class="phone-frame" style=${frameStyle}>
            <div class="phone-screen">
              <div
                class="notch ${hasQuickActions ? "tappable" : ""}"
                style=${notchStyle}
                role=${hasQuickActions ? "button" : nothing}
                tabindex=${hasQuickActions ? "0" : nothing}
                @click=${() => this._openQuickActions()}
                @keydown=${(e: KeyboardEvent) => (e.key === "Enter" || e.key === " ") && this._openQuickActions()}
              ></div>
              <div class="status-bar">
                <div class="status-left">
                  <span class="clock">${time}</span>
                </div>
                <div
                  class="status-center ${hasQuickActions ? "tappable" : ""}"
                  role=${hasQuickActions ? "button" : nothing}
                  tabindex=${hasQuickActions ? "0" : nothing}
                  @click=${() => this._openQuickActions()}
                  @keydown=${(e: KeyboardEvent) => (e.key === "Enter" || e.key === " ") && this._openQuickActions()}
                >
                  ${deviceName}
                </div>
                <div class="status-right">
                  ${sb.mobile_data_entity
                    ? html`<ha-icon
                        class="status-icon ${mobileDataOn ? "on" : "off"}"
                        icon=${getCellularIcon(hass, sb.mobile_data_entity)}
                        role="button"
                        tabindex="0"
                        @click=${() => tapIcon(sb.mobile_data_entity)}
                        @keydown=${(e: KeyboardEvent) =>
                          (e.key === "Enter" || e.key === " ") && tapIcon(sb.mobile_data_entity)}
                      ></ha-icon>`
                    : nothing}
                  ${sb.wifi_entity
                    ? html`<ha-icon
                        class="status-icon ${wifiConnected ? "on" : "off"}"
                        icon=${getWifiIcon(hass, sb.wifi_entity, wifiConnected)}
                        role="button"
                        tabindex="0"
                        @click=${() => tapIcon(sb.wifi_entity)}
                        @keydown=${(e: KeyboardEvent) =>
                          (e.key === "Enter" || e.key === " ") && tapIcon(sb.wifi_entity)}
                      ></ha-icon>`
                    : nothing}
                  ${sb.battery_entity
                    ? html`<span
                        class="battery-pill ${charging ? "charging" : ""} ${batteryLow && !charging ? "low" : ""}"
                        role="button"
                        tabindex="0"
                        @click=${() => tapIcon(sb.battery_entity)}
                        @keydown=${(e: KeyboardEvent) =>
                          (e.key === "Enter" || e.key === " ") && tapIcon(sb.battery_entity)}
                      >
                        ${charging
                          ? html`<ha-icon class="status-icon" icon="mdi:lightning-bolt"></ha-icon>`
                          : nothing}
                        <ha-icon class="status-icon" icon=${this._batteryIcon(batteryState, charging)}></ha-icon>
                        <span>${batteryState ?? "—"}%</span>
                      </span>`
                    : nothing}
                </div>
              </div>
              <div class="screen-content">
                ${this._config.rows.length
                  ? this._config.rows.map((row) => this._renderRow(row, (id) => this._openSheet(id)))
                  : html`<div class="empty">Add entities in the card settings.</div>`}
              </div>
              <div class="home-indicator"></div>
              ${this._sheetEntityId ? this._renderSheet(this._sheetEntityId) : nothing}
              ${this._quickActionsOpen ? this._renderQuickActionsSheet() : nothing}
              ${this._composeTarget ? this._renderComposeSheet() : nothing}
              ${this._appPickerTarget ? this._renderAppPickerSheet() : nothing}
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderQuickActionsSheet(): TemplateResult {
    const actions = this._config.quick_actions ?? [];
    return html`
      <div class="sheet-backdrop" @click=${() => this._closeQuickActions()}>
        <div class="sheet" @click=${(e: Event) => e.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-title">Quick actions</div>
          <div class="quick-actions-list">
            ${actions.map((qa, index) => {
              const isToggle = qa.type === "toggle";
              const on = isToggle && this._isQuickActionOn(qa, index);
              return html`
                <button class="quick-action-row" @click=${() => this._runQuickAction(qa, index)}>
                  <ha-icon icon=${qa.icon ?? "mdi:flash"}></ha-icon>
                  <span>${qa.name ?? qa.package_name ?? qa.service ?? qa.entity_id ?? "Quick action"}</span>
                  ${isToggle ? html`<ha-switch .checked=${on} tabindex="-1"></ha-switch>` : nothing}
                </button>
              `;
            })}
          </div>
        </div>
      </div>
    `;
  }

  private _renderComposeSheet(): TemplateResult {
    const target = this._composeTarget;
    if (!target) return html``;
    const isEntity = this._isNotifyEntity(target.service);
    return html`
      <div class="sheet-backdrop" @click=${() => this._closeCompose()}>
        <div class="sheet" @click=${(e: Event) => e.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-title">${target.name ?? "Send message"}</div>
          <div class="compose-form">
            <ha-selector
              .hass=${this.hass}
              .selector=${COMPOSE_TEXT_SELECTOR}
              label="Title (optional)"
              .value=${this._composeTitle}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._composeTitle = e.detail.value;
              }}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${COMPOSE_MESSAGE_SELECTOR}
              label="Message"
              .value=${this._composeMessage}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._composeMessage = e.detail.value;
              }}
            ></ha-selector>
            ${isEntity
              ? nothing
              : html`
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${COMPOSE_PRIORITY_SELECTOR}
                    label="Priority"
                    .value=${this._composePriority}
                    @value-changed=${(e: CustomEvent) => {
                      e.stopPropagation();
                      this._composePriority = e.detail.value;
                    }}
                  ></ha-selector>
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${COMPOSE_TEXT_SELECTOR}
                    label="Channel (optional)"
                    .value=${this._composeChannel}
                    @value-changed=${(e: CustomEvent) => {
                      e.stopPropagation();
                      this._composeChannel = e.detail.value;
                    }}
                  ></ha-selector>
                `}
          </div>
          <div class="sheet-actions">
            <button class="sheet-btn" @click=${() => this._closeCompose()}>Cancel</button>
            <button
              class="sheet-btn primary"
              ?disabled=${!this._composeMessage.trim()}
              @click=${() => this._submitCompose()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private _renderAppPickerSheet(): TemplateResult {
    const target = this._appPickerTarget;
    if (!target) return html``;
    return html`
      <div class="sheet-backdrop" @click=${() => this._closeAppPicker()}>
        <div class="sheet" @click=${(e: Event) => e.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-title">${target.name ?? "Launch app"}</div>
          <div class="compose-form">
            <ha-selector
              .hass=${this.hass}
              .selector=${APP_PICKER_SELECTOR}
              label="App to launch"
              .value=${this._appPickerValue}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._appPickerValue = e.detail.value;
              }}
            ></ha-selector>
          </div>
          <div class="sheet-actions">
            <button class="sheet-btn" @click=${() => this._closeAppPicker()}>Cancel</button>
            <button
              class="sheet-btn primary"
              ?disabled=${!this._appPickerValue.trim()}
              @click=${() => this._submitAppPicker()}
            >
              Launch
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private _renderSheet(entityId: string): TemplateResult {
    const hass = this.hass;
    const stateObj = hass.states[entityId];
    const domain = computeDomain(entityId);
    const toggleable = isToggleableDomain(domain);
    const name = getEntityDisplayName(hass, entityId);
    const icon = stateObj?.attributes?.icon ?? "mdi:help-circle-outline";
    const unit = stateObj?.attributes?.unit_of_measurement ?? "";
    const isLocation = isLocationEntity(hass, entityId);
    const value = !stateObj
      ? "Unavailable"
      : isLocation
        ? formatLocationState(stateObj.state)
        : `${stateObj.state}${unit ? ` ${unit}` : ""}`;

    return html`
      <div class="sheet-backdrop" @click=${() => this._closeSheet()}>
        <div class="sheet" @click=${(e: Event) => e.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-header">
            <ha-icon class="sheet-icon" .icon=${icon}></ha-icon>
            <div>
              <div class="sheet-name">${name}</div>
              <div class="sheet-value">${value}</div>
            </div>
          </div>
          ${isLocation ? this._renderLocationMap(entityId) : this._renderHistory(unit)}
          <div class="sheet-actions">
            ${toggleable
              ? html`<button class="sheet-btn primary" @click=${() => this._toggleSheetEntity()}>Toggle</button>`
              : nothing}
            <button
              class="sheet-btn"
              @click=${() => {
                this._showMoreInfo(entityId);
                this._closeSheet();
              }}
            >
              More details
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private _renderHistory(unit: string) {
    const points = this._historyPoints;
    if (points === undefined) {
      return html`<div class="sheet-history-loading">Loading 24h history…</div>`;
    }
    if (points.length < 2) {
      return nothing;
    }
    return isMostlyNumeric(points) ? this._renderSparkline(points, unit) : this._renderHistoryList(points);
  }

  private _renderSparkline(points: HistoryPoint[], unit: string) {
    const values = points.map((p) => Number(p.state)).filter((v) => !Number.isNaN(v));
    if (values.length < 2) return nothing;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const mid = (min + max) / 2;
    const range = max - min || 1;
    const w = 230;
    const h = 44;
    const stepX = w / (values.length - 1);
    const coords = values
      .map((v, i) => `${(i * stepX).toFixed(1)},${(h - ((v - min) / range) * h).toFixed(1)}`)
      .join(" ");
    const fmt = (v: number) => `${Math.round(v * 10) / 10}${unit ? ` ${unit}` : ""}`;

    const startTime = this._formatHistoryTime(points[0].last_changed);
    const endTime = this._formatHistoryTime(points[points.length - 1].last_changed);
    const midTime = this._formatHistoryTime(points[Math.floor(points.length / 2)].last_changed);

    return html`
      <div class="sheet-history">
        <div class="sheet-chart">
          <div class="sheet-chart-yaxis">
            <span>${fmt(max)}</span>
            <span>${fmt(mid)}</span>
            <span>${fmt(min)}</span>
          </div>
          <svg class="sheet-sparkline" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
            <line class="sheet-chart-gridline" x1="0" y1="1" x2=${w} y2="1" vector-effect="non-scaling-stroke" />
            <line
              class="sheet-chart-gridline"
              x1="0"
              y1=${h / 2}
              x2=${w}
              y2=${h / 2}
              vector-effect="non-scaling-stroke"
            />
            <line
              class="sheet-chart-gridline"
              x1="0"
              y1=${h - 1}
              x2=${w}
              y2=${h - 1}
              vector-effect="non-scaling-stroke"
            />
            <polyline
              points=${coords}
              fill="none"
              stroke="var(--primary-color)"
              stroke-width="2"
              vector-effect="non-scaling-stroke"
            />
          </svg>
        </div>
        <div class="sheet-history-time-axis">
          <span>${startTime}</span>
          <span>${midTime}</span>
          <span>${endTime}</span>
        </div>
      </div>
    `;
  }

  private _formatHistoryTime(iso: string): string {
    return new Date(iso).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  }

  private _renderHistoryList(points: HistoryPoint[]) {
    const recent = points.slice(-5).reverse();
    return html`
      <div class="sheet-history-list">
        ${recent.map(
          (p) => html`
            <div class="sheet-history-row">
              <span>${p.state}</span>
              <span>${this._formatHistoryTime(p.last_changed)}</span>
            </div>
          `
        )}
      </div>
    `;
  }

  private _renderLocationMap(entityId: string): TemplateResult {
    const stateObj = this.hass.states[entityId];
    const lat = Number(stateObj?.attributes?.latitude);
    const lon = Number(stateObj?.attributes?.longitude);
    if (Number.isNaN(lat) || Number.isNaN(lon)) {
      return html`<div class="sheet-history-loading">No location data.</div>`;
    }

    const zoom = 15;
    const W = 280;
    const H = 160;
    const tileSize = 256;
    const center = latLonToPixel(lat, lon, zoom);
    const originX = center.x - W / 2;
    const originY = center.y - H / 2;
    const tileCount = Math.pow(2, zoom);

    const startTileX = Math.floor(originX / tileSize);
    const startTileY = Math.floor(originY / tileSize);
    const endTileX = Math.floor((originX + W) / tileSize);
    const endTileY = Math.floor((originY + H) / tileSize);

    // tile.openstreetmap.org's usage policy explicitly disallows embedding
    // it in distributed apps/software (only ad-hoc/low-volume browser use is
    // allowed there) and blocks requests from cards like this with a 403.
    // CARTO's basemap CDN is free and meant for exactly this kind of use.
    const CARTO_SUBDOMAINS = ["a", "b", "c", "d"];
    const tiles: SVGTemplateResult[] = [];
    for (let ty = startTileY; ty <= endTileY; ty++) {
      for (let tx = startTileX; tx <= endTileX; tx++) {
        const wrappedX = ((tx % tileCount) + tileCount) % tileCount;
        const subdomain = CARTO_SUBDOMAINS[(wrappedX + ty) % CARTO_SUBDOMAINS.length];
        tiles.push(svg`
          <image
            href="https://${subdomain}.basemaps.cartocdn.com/light_all/${zoom}/${wrappedX}/${ty}.png"
            x=${tx * tileSize - originX}
            y=${ty * tileSize - originY}
            width=${tileSize}
            height=${tileSize}
            @error=${(e: Event) => {
              (e.target as SVGImageElement).style.display = "none";
            }}
          />
        `);
      }
    }

    const points = this._locationHistory ?? [];
    const toLocal = (plat: number, plon: number) => {
      const p = latLonToPixel(plat, plon, zoom);
      return { x: p.x - originX, y: p.y - originY };
    };
    const trail = points.map((p) => toLocal(p.lat, p.lon));
    const trailCoords = trail.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

    const recent = [...points].reverse().slice(0, 6);

    return html`
      <div class="location-map">
        <svg class="location-map-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
          <clipPath id="map-clip-${entityId.replace(/[^a-zA-Z0-9]/g, "")}">
            <rect x="0" y="0" width=${W} height=${H} rx="12" />
          </clipPath>
          <g clip-path="url(#map-clip-${entityId.replace(/[^a-zA-Z0-9]/g, "")})">
            ${tiles}
            ${trail.length > 1
              ? svg`<polyline
                    points=${trailCoords}
                    fill="none"
                    stroke="var(--primary-color)"
                    stroke-width="2"
                    stroke-opacity="0.8"
                    vector-effect="non-scaling-stroke"
                  />`
              : nothing}
            ${trail.slice(0, -1).map(
              (p) => svg`<circle cx=${p.x} cy=${p.y} r="2.5" fill="var(--primary-color)" fill-opacity="0.7" />`
            )}
            <circle cx=${W / 2} cy=${H / 2} r="7" fill="var(--primary-color)" stroke="white" stroke-width="2" />
          </g>
        </svg>
        <div class="location-map-attribution">© OpenStreetMap contributors © CARTO</div>
        ${recent.length
          ? html`
              <div class="location-timeline">
                ${recent.map(
                  (p) => html`
                    <div class="location-timeline-row">
                      <span>${formatLocationState(p.state)}</span>
                      <span>${this._formatHistoryTime(p.last_changed)}</span>
                    </div>
                  `
                )}
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _batteryIcon(level: string | undefined, charging: boolean): string {
    const value = Number(level);
    if (Number.isNaN(value)) return "mdi:battery-unknown";
    const rounded = Math.round(value / 10) * 10;
    const suffix = rounded <= 0 ? "-outline" : rounded >= 100 ? "" : `-${rounded}`;
    return charging ? `mdi:battery-charging${rounded >= 100 ? "" : suffix}` : `mdi:battery${suffix}`;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
      }
      .card-content {
        padding: 8px 16px 16px;
      }
      .empty {
        padding: 16px;
        color: var(--secondary-text-color);
        text-align: center;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 10px 0;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        cursor: pointer;
        border-radius: 8px;
      }
      .row:last-child {
        border-bottom: none;
      }
      .row:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      }
      .row:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: -2px;
      }
      .row.unavailable {
        opacity: 0.5;
      }
      .row-icon-wrap {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .row-icon {
        color: var(--state-icon-color, var(--paper-item-icon-color, #44739e));
        flex-shrink: 0;
      }
      .row-main {
        flex: 1;
        min-width: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .row-name {
        color: var(--primary-text-color);
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .row-value {
        color: var(--secondary-text-color);
        font-size: 14px;
        flex-shrink: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 50%;
      }
      .bar-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        justify-content: flex-end;
      }
      .bar-track {
        flex: 1;
        max-width: 140px;
        height: 6px;
        border-radius: 3px;
        background: var(--divider-color, rgba(0, 0, 0, 0.12));
        overflow: hidden;
      }
      .bar-fill {
        height: 100%;
        border-radius: 3px;
        background: var(--primary-color);
        transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
      }
      .bar-value {
        color: var(--secondary-text-color);
        font-size: 13px;
        min-width: 36px;
        text-align: right;
        flex-shrink: 0;
      }

      /* Phone mode */
      .phone {
        display: flex;
        justify-content: center;
        padding: 20px 16px;
      }
      .phone-frame {
        width: 100%;
        max-width: 280px;
        padding: 12px 10px;
        border-radius: 44px;
        background: var(--secondary-background-color, #e2e2e2);
        box-shadow: var(--ha-card-box-shadow, 0 2px 8px rgba(0, 0, 0, 0.2));
      }
      .phone-screen {
        position: relative;
        aspect-ratio: 9 / 19.5;
        border-radius: 32px;
        background: var(--card-background-color, var(--ha-card-background));
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .notch {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 70px;
        height: 14px;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.2));
        z-index: 2;
      }
      .notch.tappable,
      .status-center.tappable {
        cursor: pointer;
      }
      .status-bar {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 28px 14px 10px;
        font-size: 11px;
        font-weight: 500;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
      }
      .status-left,
      .status-right {
        display: flex;
        align-items: center;
        gap: 6px;
        flex: 1;
      }
      .status-right {
        justify-content: flex-end;
      }
      .status-center {
        flex: 2;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .status-icon {
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color);
      }
      .status-icon.on {
        color: var(--primary-text-color);
      }
      .status-icon.off {
        color: var(--disabled-text-color);
      }
      .battery-pill {
        display: flex;
        align-items: center;
        gap: 2px;
        color: var(--primary-text-color);
      }
      .battery-pill.charging {
        color: var(--success-color, #4caf50);
      }
      .battery-pill.low {
        color: var(--error-color, #db4437);
      }
      .screen-content {
        flex: 1 1 auto;
        min-height: 0;
        overflow-y: auto;
        padding: 0 14px;
      }
      .home-indicator {
        flex: 0 0 auto;
        margin: 8px auto 10px;
        width: 100px;
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color, rgba(0, 0, 0, 0.2));
      }

      /* In-phone entity sheet */
      .sheet-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.32);
        display: flex;
        align-items: flex-end;
        z-index: 10;
      }
      .sheet {
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        background: var(--card-background-color, var(--ha-card-background));
        border-radius: 20px 20px 0 0;
        padding: 14px 16px 18px;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
      }
      .sheet-handle {
        width: 36px;
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color, rgba(0, 0, 0, 0.2));
        margin: 0 auto 14px;
      }
      .sheet-header {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .sheet-icon {
        color: var(--state-icon-color, var(--paper-item-icon-color, #44739e));
        --mdc-icon-size: 28px;
      }
      .sheet-name {
        color: var(--primary-text-color);
        font-size: 15px;
        font-weight: 500;
      }
      .sheet-value {
        color: var(--secondary-text-color);
        font-size: 13px;
      }
      .sheet-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 14px;
      }
      .sheet-btn {
        border: none;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
        color: var(--primary-color);
        font: inherit;
        font-weight: 500;
        font-size: 13px;
        padding: 8px 16px;
        border-radius: 10px;
        cursor: pointer;
      }
      .sheet-btn:hover {
        filter: brightness(0.96);
      }
      .sheet-btn.primary {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .sheet-btn:disabled {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
        color: var(--disabled-text-color, #9e9e9e);
        cursor: default;
      }
      .sheet-title {
        color: var(--primary-text-color);
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      .sheet-anchor {
        position: relative;
        overflow: hidden;
      }
      .compose-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 100%;
      }
      .compose-form ha-selector {
        display: block;
        max-width: 100%;
      }
      .quick-actions-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 50vh;
        overflow-y: auto;
      }
      .quick-action-row {
        display: flex;
        align-items: center;
        gap: 14px;
        width: 100%;
        background: none;
        border: none;
        border-radius: 10px;
        padding: 10px 6px;
        color: var(--primary-text-color);
        font-size: 14px;
        font-family: inherit;
        text-align: left;
        cursor: pointer;
      }
      .quick-action-row:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      }
      .quick-action-row ha-icon {
        color: var(--primary-color);
      }
      .quick-action-row span {
        flex: 1;
        min-width: 0;
      }
      .quick-action-row ha-switch {
        pointer-events: none;
      }
      .sheet-history {
        margin-top: 12px;
      }
      .sheet-chart {
        display: flex;
        align-items: stretch;
        gap: 6px;
      }
      .sheet-chart-yaxis {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--secondary-text-color);
        font-size: 10px;
        text-align: right;
        white-space: nowrap;
      }
      .sheet-sparkline {
        flex: 1;
        min-width: 0;
        height: 44px;
        display: block;
      }
      .sheet-chart-gridline {
        stroke: var(--divider-color, rgba(0, 0, 0, 0.12));
        stroke-width: 1;
      }
      .sheet-history-time-axis {
        display: flex;
        justify-content: space-between;
        color: var(--secondary-text-color);
        font-size: 10px;
        margin-top: 4px;
        padding-left: 34px;
      }
      .sheet-history-list {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .sheet-history-row {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .sheet-history-loading {
        margin-top: 12px;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .location-map {
        margin-top: 12px;
      }
      .location-map-svg {
        width: 100%;
        height: 160px;
        display: block;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
      }
      .location-map-attribution {
        margin-top: 4px;
        font-size: 9px;
        color: var(--secondary-text-color);
        text-align: right;
      }
      .location-timeline {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .location-timeline-row {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TYPE]: HaSmartphoneCard;
  }
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: CARD_TYPE,
  name: "Smartphone Card",
  description: "Display Home Assistant companion app sensors as a list or a phone-like preview.",
  preview: true,
});
