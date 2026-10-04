import { LitElement, html, css, CSSResultGroup, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor } from "custom-card-helpers";
import { CARD_TYPE, EDITOR_TYPE } from "./const";
import { SmartphoneCardConfig, SmartphoneCardRow } from "./types";
import {
  getRowDisplayType,
  getRowDisplayValue,
  getRowIcon,
  getRowName,
  getRowPercent,
  getRowState,
  isOn,
  stateOf,
} from "./helpers";
import "./editor/ha-smartphone-card-editor";

@customElement(CARD_TYPE)
export class HaSmartphoneCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: SmartphoneCardConfig;

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

  private _renderRow(row: SmartphoneCardRow): TemplateResult {
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
        @click=${() => this._showMoreInfo(row.entity)}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this._showMoreInfo(row.entity);
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
    return html`
      <div class="bar-wrap">
        <div class="bar-track">
          <div
            class="bar-fill"
            style="width:${percent ?? 0}%"
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
            ? this._config.rows.map((row) => this._renderRow(row))
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
    const charging = isOn(hass, sb.charging_entity);
    const wifiConnected = isOn(hass, sb.wifi_entity);
    const mobileDataOn = isOn(hass, sb.mobile_data_entity);
    const now = new Date();
    const time = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

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
                        icon="mdi:signal-cellular-3"
                      ></ha-icon>`
                    : nothing}
                  ${sb.wifi_entity
                    ? html`<ha-icon
                        class="status-icon ${wifiConnected ? "on" : "off"}"
                        icon=${wifiConnected ? "mdi:wifi" : "mdi:wifi-off"}
                      ></ha-icon>`
                    : nothing}
                  ${sb.battery_entity
                    ? html`<span class="battery-pill ${charging ? "charging" : ""}">
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
                  ? this._config.rows.map((row) => this._renderRow(row))
                  : html`<div class="empty">Add entities in the card settings.</div>`}
              </div>
              <div class="home-indicator"></div>
            </div>
          </div>
        </div>
      </ha-card>
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
        transition: width 0.3s ease-in-out;
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
