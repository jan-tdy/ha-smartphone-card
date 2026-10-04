import { LitElement, html, css, CSSResultGroup, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor, computeDomain, toggleEntity } from "custom-card-helpers";
import { CARD_TYPE, EDITOR_TYPE } from "./const";
import { SmartphoneCardConfig, SmartphoneCardQuickAction, SmartphoneCardRow } from "./types";
import {
  getBarColor,
  getCellularIcon,
  getRowDisplayType,
  getRowDisplayValue,
  getRowIcon,
  getRowName,
  getRowPercent,
  getRowState,
  getWifiIcon,
  isOn,
  isToggleableDomain,
  stateOf,
} from "./helpers";
import "./editor/ha-smartphone-card-editor";

interface LayoutOptions {
  grid_columns?: number;
  grid_rows?: number;
  grid_min_columns?: number;
  grid_min_rows?: number;
}

@customElement(CARD_TYPE)
export class HaSmartphoneCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: SmartphoneCardConfig;

  @state() private _sheetEntityId?: string;

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
  }

  private _closeSheet() {
    this._sheetEntityId = undefined;
  }

  private _toggleSheetEntity() {
    if (!this._sheetEntityId) return;
    toggleEntity(this.hass, this._sheetEntityId);
  }

  private _runQuickAction(action: SmartphoneCardQuickAction) {
    const [domain, service] = action.service.split(".");
    if (!domain || !service) return;
    const data: Record<string, unknown> = {};
    if (action.entity_id) data.entity_id = action.entity_id;
    this.hass.callService(domain, service, data);
  }

  private _renderRow(row: SmartphoneCardRow, onTap: (entityId: string) => void): TemplateResult {
    const hass = this.hass;
    const stateObj = getRowState(hass, row);
    const name = getRowName(hass, row);
    const icon = getRowIcon(hass, row);
    const type = getRowDisplayType(hass, row);
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
      <ha-card .header=${title ?? nothing}>
        <div class="card-content list-mode">
          ${this._config.rows.length
            ? this._config.rows.map((row) => this._renderRow(row, (id) => this._showMoreInfo(id)))
            : html`<div class="empty">Add entities in the card settings.</div>`}
        </div>
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
    const wifiConnected = isOn(hass, sb.wifi_entity);
    const mobileDataOn = isOn(hass, sb.mobile_data_entity);
    const now = new Date();
    const time = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

    const tapIcon = (entityId?: string) => (entityId ? this._openSheet(entityId) : undefined);

    return html`
      <ha-card>
        <div class="phone">
          <div class="phone-frame">
            <div class="phone-screen">
              <div class="notch"></div>
              <div class="status-bar">
                <div class="status-left">
                  <span class="clock">${time}</span>
                </div>
                <div class="status-center">${deviceName}</div>
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
                ${this._config.quick_actions?.length
                  ? html`<div class="quick-actions">
                      ${this._config.quick_actions.map(
                        (qa) => html`
                          <button
                            class="quick-action"
                            title=${qa.name ?? qa.service}
                            @click=${() => this._runQuickAction(qa)}
                          >
                            <ha-icon icon=${qa.icon ?? "mdi:flash"}></ha-icon>
                            ${qa.name ? html`<span>${qa.name}</span>` : nothing}
                          </button>
                        `
                      )}
                    </div>`
                  : nothing}
                ${this._config.rows.length
                  ? this._config.rows.map((row) => this._renderRow(row, (id) => this._openSheet(id)))
                  : html`<div class="empty">Add entities in the card settings.</div>`}
              </div>
              <div class="home-indicator"></div>
              ${this._sheetEntityId ? this._renderSheet(this._sheetEntityId) : nothing}
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderSheet(entityId: string): TemplateResult {
    const hass = this.hass;
    const stateObj = hass.states[entityId];
    const domain = computeDomain(entityId);
    const toggleable = isToggleableDomain(domain);
    const name = stateObj?.attributes?.friendly_name ?? entityId;
    const icon = stateObj?.attributes?.icon ?? "mdi:help-circle-outline";
    const unit = stateObj?.attributes?.unit_of_measurement ?? "";
    const value = stateObj ? `${stateObj.state}${unit ? ` ${unit}` : ""}` : "Unavailable";

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
          <div class="sheet-actions">
            ${toggleable
              ? html`<mwc-button @click=${() => this._toggleSheetEntity()}>Toggle</mwc-button>`
              : nothing}
            <mwc-button
              @click=${() => {
                this._showMoreInfo(entityId);
                this._closeSheet();
              }}
            >
              More details
            </mwc-button>
          </div>
        </div>
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
      .quick-actions {
        display: flex;
        gap: 8px;
        padding: 10px 0;
        overflow-x: auto;
      }
      .quick-action {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        flex-shrink: 0;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border: none;
        border-radius: 14px;
        padding: 10px 14px;
        min-width: 56px;
        color: var(--primary-text-color);
        font-size: 11px;
        font-family: inherit;
        cursor: pointer;
      }
      .quick-action:hover {
        filter: brightness(0.97);
      }
      .quick-action ha-icon {
        color: var(--primary-color);
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
        gap: 4px;
        margin-top: 14px;
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
