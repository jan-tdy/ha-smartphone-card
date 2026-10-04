import { LitElement, html, css, CSSResultGroup, TemplateResult, nothing } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor, fireEvent } from "custom-card-helpers";
import Sortable from "sortablejs";
import { EDITOR_TYPE } from "../const";
import { SmartphoneCardConfig, SmartphoneCardQuickAction, SmartphoneCardRow } from "../types";
import { EntityRegistryEntry } from "../helpers";

const MODE_SELECTOR = {
  select: {
    mode: "dropdown",
    options: [
      { value: "list", label: "List" },
      { value: "phone", label: "Phone" },
    ],
  },
} as const;

const ROW_TYPE_SELECTOR = {
  select: {
    mode: "dropdown",
    options: [
      { value: "text", label: "Text" },
      { value: "bar", label: "Bar (percentage)" },
      { value: "icon", label: "Icon only" },
      { value: "message", label: "Send message (compose dialog)" },
    ],
  },
} as const;

const QUICK_ACTION_TYPE_SELECTOR = {
  select: {
    mode: "dropdown",
    options: [
      { value: "service", label: "Run a service" },
      { value: "message", label: "Send message (compose dialog)" },
      { value: "toggle", label: "Toggle (switch)" },
    ],
  },
} as const;

const ENTITY_SELECTOR = { entity: {} } as const;
const NOTIFY_ENTITY_SELECTOR = { entity: { domain: "notify" } } as const;
const ICON_SELECTOR = { icon: {} } as const;
const TEXT_SELECTOR = { text: {} } as const;
const NUMBER_SELECTOR = { number: { mode: "box" } } as const;
const DEVICE_SELECTOR = { device: {} } as const;
const OBJECT_SELECTOR = { object: {} } as const;

@customElement(EDITOR_TYPE)
export class HaSmartphoneCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: SmartphoneCardConfig;

  @state() private _deviceToAdd?: string;

  @query(".rows") private _rowsEl?: HTMLElement;

  private _sortable?: Sortable;

  public setConfig(config: SmartphoneCardConfig): void {
    this._config = {
      mode: "list",
      ...config,
      rows: config.rows ?? [],
    };
  }

  protected firstUpdated(): void {
    this._setupSortable();
  }

  protected updated(): void {
    this._setupSortable();
  }

  private _setupSortable() {
    if (!this._rowsEl || this._sortable) return;
    this._sortable = Sortable.create(this._rowsEl, {
      handle: ".drag-handle",
      animation: 150,
      onEnd: (evt) => {
        if (evt.oldIndex === undefined || evt.newIndex === undefined || evt.oldIndex === evt.newIndex) return;
        const rows = [...this._config.rows];
        const [moved] = rows.splice(evt.oldIndex, 1);
        rows.splice(evt.newIndex, 0, moved);
        this._updateConfig({ rows });
      },
    });
  }

  private _updateConfig(partial: Partial<SmartphoneCardConfig>) {
    this._config = { ...this._config, ...partial };
    fireEvent(this, "config-changed", { config: this._config });
  }

  private _updateRow(index: number, partial: Partial<SmartphoneCardRow>) {
    const rows = this._config.rows.map((row, i) => (i === index ? { ...row, ...partial } : row));
    this._updateConfig({ rows });
  }

  private _addRow() {
    const rows = [...this._config.rows, { entity: "" }];
    this._updateConfig({ rows });
  }

  private _removeRow(index: number) {
    const rows = this._config.rows.filter((_, i) => i !== index);
    this._updateConfig({ rows });
  }

  private _addRowsFromDevice() {
    const deviceId = this._deviceToAdd;
    if (!deviceId) return;
    const registry = ((this.hass as any).entities ?? {}) as Record<string, EntityRegistryEntry>;
    const sb = this._config.status_bar ?? {};
    const alreadyUsed = new Set(
      [...this._config.rows.map((row) => row.entity), sb.battery_entity, sb.charging_entity, sb.wifi_entity, sb.mobile_data_entity].filter(
        (id): id is string => !!id
      )
    );
    const newRows: SmartphoneCardRow[] = Object.values(registry)
      .filter(
        (entry) =>
          entry.device_id === deviceId &&
          !entry.hidden_by &&
          !entry.disabled_by &&
          !entry.entity_category &&
          !alreadyUsed.has(entry.entity_id)
      )
      .map((entry) => ({ entity: entry.entity_id }));

    if (newRows.length) {
      this._updateConfig({ rows: [...this._config.rows, ...newRows] });
    }
    this._deviceToAdd = undefined;
  }

  private _updateQuickAction(index: number, partial: Partial<SmartphoneCardQuickAction>) {
    const quick_actions = (this._config.quick_actions ?? []).map((qa, i) =>
      i === index ? { ...qa, ...partial } : qa
    );
    this._updateConfig({ quick_actions });
  }

  private _addQuickAction() {
    const quick_actions = [...(this._config.quick_actions ?? []), { service: "" }];
    this._updateConfig({ quick_actions });
  }

  private _removeQuickAction(index: number) {
    const quick_actions = (this._config.quick_actions ?? []).filter((_, i) => i !== index);
    this._updateConfig({ quick_actions });
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;
    const mode = this._config.mode ?? "list";
    const sb = this._config.status_bar ?? {};

    return html`
      <div class="form">
        <div class="section">
          <ha-selector
            .hass=${this.hass}
            .selector=${MODE_SELECTOR}
            label="Mode"
            .value=${mode}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateConfig({ mode: e.detail.value });
            }}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${TEXT_SELECTOR}
            label="Device name"
            .value=${this._config.device_name ?? ""}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateConfig({ device_name: e.detail.value });
            }}
          ></ha-selector>

          ${mode === "list"
            ? html`<ha-selector
                .hass=${this.hass}
                .selector=${TEXT_SELECTOR}
                label="Card title (optional)"
                .value=${this._config.title ?? ""}
                @value-changed=${(e: CustomEvent) => {
                  e.stopPropagation();
                  this._updateConfig({ title: e.detail.value });
                }}
              ></ha-selector>`
            : nothing}
        </div>

        ${mode === "phone"
          ? html`
              <div class="section">
                <div class="section-title">Status bar</div>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${ENTITY_SELECTOR}
                  label="Battery (%)"
                  .value=${sb.battery_entity ?? ""}
                  @value-changed=${(e: CustomEvent) => {
                    e.stopPropagation();
                    this._updateConfig({ status_bar: { ...sb, battery_entity: e.detail.value } });
                  }}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${ENTITY_SELECTOR}
                  label="Charging (binary_sensor)"
                  .value=${sb.charging_entity ?? ""}
                  @value-changed=${(e: CustomEvent) => {
                    e.stopPropagation();
                    this._updateConfig({ status_bar: { ...sb, charging_entity: e.detail.value } });
                  }}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${ENTITY_SELECTOR}
                  label="Wi-Fi connection"
                  .value=${sb.wifi_entity ?? ""}
                  @value-changed=${(e: CustomEvent) => {
                    e.stopPropagation();
                    this._updateConfig({ status_bar: { ...sb, wifi_entity: e.detail.value } });
                  }}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${ENTITY_SELECTOR}
                  label="Mobile data"
                  .value=${sb.mobile_data_entity ?? ""}
                  @value-changed=${(e: CustomEvent) => {
                    e.stopPropagation();
                    this._updateConfig({ status_bar: { ...sb, mobile_data_entity: e.detail.value } });
                  }}
                ></ha-selector>
              </div>
            `
          : nothing}

        <div class="section">
          <div class="section-title">Add entities from a device</div>
          <div class="device-add">
            <ha-selector
              .hass=${this.hass}
              .selector=${DEVICE_SELECTOR}
              label="Device"
              .value=${this._deviceToAdd ?? ""}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._deviceToAdd = e.detail.value;
              }}
            ></ha-selector>
            <mwc-button .disabled=${!this._deviceToAdd} @click=${this._addRowsFromDevice}>
              + Add all entities
            </mwc-button>
          </div>
        </div>

        <div class="section">
          <div class="section-title">
            ${mode === "phone" ? "Screen items" : "Rows"}
          </div>
          <div class="rows">
            ${this._config.rows.map((row, index) => this._renderRowEditor(row, index))}
          </div>
          <mwc-button @click=${this._addRow}>+ Add entity</mwc-button>
        </div>

        ${mode === "phone"
          ? html`
              <div class="section">
                <div class="section-title">Quick actions</div>
                <div class="rows">
                  ${(this._config.quick_actions ?? []).map((qa, index) => this._renderQuickActionEditor(qa, index))}
                </div>
                <mwc-button @click=${this._addQuickAction}>+ Add quick action</mwc-button>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _renderQuickActionEditor(action: SmartphoneCardQuickAction, index: number): TemplateResult {
    const qaType = action.type ?? "service";
    return html`
      <div class="row-editor">
        <div class="row-editor-fields">
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${ICON_SELECTOR}
              label="Icon"
              .value=${action.icon ?? ""}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._updateQuickAction(index, { icon: e.detail.value });
              }}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${TEXT_SELECTOR}
              label="Name"
              .value=${action.name ?? ""}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._updateQuickAction(index, { name: e.detail.value });
              }}
            ></ha-selector>
          </div>
          <ha-selector
            .hass=${this.hass}
            .selector=${QUICK_ACTION_TYPE_SELECTOR}
            label="Action type"
            .value=${qaType}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateQuickAction(index, { type: e.detail.value });
            }}
          ></ha-selector>
          ${qaType === "message"
            ? html`<ha-selector
                .hass=${this.hass}
                .selector=${NOTIFY_ENTITY_SELECTOR}
                label="Notify entity"
                .value=${action.service ?? ""}
                @value-changed=${(e: CustomEvent) => {
                  e.stopPropagation();
                  this._updateQuickAction(index, { service: e.detail.value });
                }}
              ></ha-selector>`
            : qaType === "toggle"
              ? this._renderToggleQuickActionFields(action, index)
              : html`
                  <div class="row-editor-line">
                    <ha-service-picker
                      .hass=${this.hass}
                      label="Service"
                      .value=${action.service ?? ""}
                      @value-changed=${(e: CustomEvent) => {
                        e.stopPropagation();
                        this._updateQuickAction(index, { service: e.detail.value });
                      }}
                    ></ha-service-picker>
                    <ha-selector
                      .hass=${this.hass}
                      .selector=${ENTITY_SELECTOR}
                      label="Target entity (optional)"
                      .value=${action.entity_id ?? ""}
                      @value-changed=${(e: CustomEvent) => {
                        e.stopPropagation();
                        this._updateQuickAction(index, { entity_id: e.detail.value });
                      }}
                    ></ha-selector>
                  </div>
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${OBJECT_SELECTOR}
                    label="Service data (optional)"
                    .value=${action.data ?? {}}
                    @value-changed=${(e: CustomEvent) => {
                      e.stopPropagation();
                      this._updateQuickAction(index, { data: e.detail.value });
                    }}
                  ></ha-selector>
                `}
        </div>
        <ha-icon-button class="remove" @click=${() => this._removeQuickAction(index)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }

  private _renderToggleQuickActionFields(action: SmartphoneCardQuickAction, index: number): TemplateResult {
    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${ENTITY_SELECTOR}
        label="Entity (optional – a toggleable entity reflects its own state; any other entity is just passed as entity_id)"
        .value=${action.entity_id ?? ""}
        @value-changed=${(e: CustomEvent) => {
          e.stopPropagation();
          this._updateQuickAction(index, { entity_id: e.detail.value });
        }}
      ></ha-selector>
      <ha-selector
        .hass=${this.hass}
        .selector=${ENTITY_SELECTOR}
        label="State entity (optional – read on/off from here instead of tracking it locally)"
        .value=${action.state_entity ?? ""}
        @value-changed=${(e: CustomEvent) => {
          e.stopPropagation();
          this._updateQuickAction(index, { state_entity: e.detail.value });
        }}
      ></ha-selector>
      <div class="section-title">Turn on</div>
      <div class="row-editor-line">
        <ha-service-picker
          .hass=${this.hass}
          label="Service (leave empty to just toggle the entity above)"
          .value=${action.service ?? ""}
          @value-changed=${(e: CustomEvent) => {
            e.stopPropagation();
            this._updateQuickAction(index, { service: e.detail.value });
          }}
        ></ha-service-picker>
      </div>
      <ha-selector
        .hass=${this.hass}
        .selector=${OBJECT_SELECTOR}
        label="Service data for 'on' (optional)"
        .value=${action.data ?? {}}
        @value-changed=${(e: CustomEvent) => {
          e.stopPropagation();
          this._updateQuickAction(index, { data: e.detail.value });
        }}
      ></ha-selector>
      <div class="section-title">Turn off</div>
      <div class="row-editor-line">
        <ha-service-picker
          .hass=${this.hass}
          label="Service (optional, defaults to the 'on' service above)"
          .value=${action.service_off ?? ""}
          @value-changed=${(e: CustomEvent) => {
            e.stopPropagation();
            this._updateQuickAction(index, { service_off: e.detail.value });
          }}
        ></ha-service-picker>
      </div>
      <ha-selector
        .hass=${this.hass}
        .selector=${OBJECT_SELECTOR}
        label="Service data for 'off' (optional)"
        .value=${action.data_off ?? {}}
        @value-changed=${(e: CustomEvent) => {
          e.stopPropagation();
          this._updateQuickAction(index, { data_off: e.detail.value });
        }}
      ></ha-selector>
    `;
  }

  private _renderRowEditor(row: SmartphoneCardRow, index: number): TemplateResult {
    const isMessage = row.type === "message";
    return html`
      <div class="row-editor">
        <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
        <div class="row-editor-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${isMessage ? NOTIFY_ENTITY_SELECTOR : ENTITY_SELECTOR}
            label=${isMessage ? "Notify entity" : "Entity"}
            .value=${row.entity}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateRow(index, { entity: e.detail.value });
            }}
          ></ha-selector>
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${TEXT_SELECTOR}
              label="Name (optional)"
              .value=${row.name ?? ""}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._updateRow(index, { name: e.detail.value });
              }}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${ICON_SELECTOR}
              label="Icon"
              .value=${row.icon ?? ""}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._updateRow(index, { icon: e.detail.value });
              }}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${ROW_TYPE_SELECTOR}
              label="Display"
              .value=${row.type ?? "text"}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._updateRow(index, { type: e.detail.value });
              }}
            ></ha-selector>
          </div>
          ${isMessage
            ? nothing
            : html`<ha-selector
                .hass=${this.hass}
                .selector=${TEXT_SELECTOR}
                label="Value attribute (optional, e.g. app_name)"
                .value=${row.value_attribute ?? ""}
                @value-changed=${(e: CustomEvent) => {
                  e.stopPropagation();
                  this._updateRow(index, { value_attribute: e.detail.value || undefined });
                }}
              ></ha-selector>`}
          ${row.type === "bar"
            ? html`<div class="row-editor-line">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${NUMBER_SELECTOR}
                  label="Min"
                  .value=${row.min ?? 0}
                  @value-changed=${(e: CustomEvent) => {
                    e.stopPropagation();
                    this._updateRow(index, { min: Number(e.detail.value) });
                  }}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${NUMBER_SELECTOR}
                  label="Max"
                  .value=${row.max ?? 100}
                  @value-changed=${(e: CustomEvent) => {
                    e.stopPropagation();
                    this._updateRow(index, { max: Number(e.detail.value) });
                  }}
                ></ha-selector>
              </div>`
            : nothing}
        </div>
        <ha-icon-button class="remove" @click=${() => this._removeRow(index)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      .form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 8px 0;
      }
      .section {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .section-title {
        font-weight: 500;
        color: var(--primary-text-color);
      }
      .device-add {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .device-add ha-selector {
        flex: 1;
      }
      .rows {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .row-editor {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        padding: 8px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 8px;
        background: var(--card-background-color);
      }
      .drag-handle {
        cursor: grab;
        color: var(--secondary-text-color);
        margin-top: 10px;
      }
      .row-editor-fields {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 0;
      }
      .row-editor-line {
        display: flex;
        gap: 8px;
      }
      .row-editor-line > * {
        flex: 1;
        min-width: 0;
      }
      .remove {
        color: var(--secondary-text-color);
      }
      ha-selector,
      ha-service-picker {
        display: block;
        width: 100%;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TYPE]: HaSmartphoneCardEditor;
  }
}
