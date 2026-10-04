import { LitElement, html, css, CSSResultGroup, TemplateResult, nothing } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor, fireEvent } from "custom-card-helpers";
import Sortable from "sortablejs";
import { EDITOR_TYPE } from "../const";
import { SmartphoneCardConfig, SmartphoneCardRow, RowDisplayType } from "../types";

const ROW_TYPES: { value: RowDisplayType; label: string }[] = [
  { value: "text", label: "Text" },
  { value: "bar", label: "Bar (percentá)" },
  { value: "icon", label: "Len ikona" },
];

@customElement(EDITOR_TYPE)
export class HaSmartphoneCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: SmartphoneCardConfig;

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

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;
    const mode = this._config.mode ?? "list";
    const sb = this._config.status_bar ?? {};

    return html`
      <div class="form">
        <div class="section">
          <ha-select
            label="Režim"
            .value=${mode}
            @selected=${(e: CustomEvent) => this._updateConfig({ mode: (e.target as any).value })}
            @closed=${(e: Event) => e.stopPropagation()}
          >
            <mwc-list-item value="list">Zoznam (list)</mwc-list-item>
            <mwc-list-item value="phone">Telefón (phone)</mwc-list-item>
          </ha-select>

          <ha-textfield
            label="Názov zariadenia"
            .value=${this._config.device_name ?? ""}
            @input=${(e: InputEvent) => this._updateConfig({ device_name: (e.target as HTMLInputElement).value })}
          ></ha-textfield>

          ${mode === "list"
            ? html`<ha-textfield
                label="Nadpis karty (voliteľné)"
                .value=${this._config.title ?? ""}
                @input=${(e: InputEvent) => this._updateConfig({ title: (e.target as HTMLInputElement).value })}
              ></ha-textfield>`
            : nothing}
        </div>

        ${mode === "phone"
          ? html`
              <div class="section">
                <div class="section-title">Status bar</div>
                <ha-entity-picker
                  label="Batéria (%)"
                  .hass=${this.hass}
                  .value=${sb.battery_entity ?? ""}
                  @value-changed=${(e: CustomEvent) =>
                    this._updateConfig({ status_bar: { ...sb, battery_entity: e.detail.value } })}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="Nabíjanie (binary_sensor)"
                  .hass=${this.hass}
                  .value=${sb.charging_entity ?? ""}
                  @value-changed=${(e: CustomEvent) =>
                    this._updateConfig({ status_bar: { ...sb, charging_entity: e.detail.value } })}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="Wi-Fi pripojenie"
                  .hass=${this.hass}
                  .value=${sb.wifi_entity ?? ""}
                  @value-changed=${(e: CustomEvent) =>
                    this._updateConfig({ status_bar: { ...sb, wifi_entity: e.detail.value } })}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="Mobilné dáta"
                  .hass=${this.hass}
                  .value=${sb.mobile_data_entity ?? ""}
                  @value-changed=${(e: CustomEvent) =>
                    this._updateConfig({ status_bar: { ...sb, mobile_data_entity: e.detail.value } })}
                ></ha-entity-picker>
              </div>
            `
          : nothing}

        <div class="section">
          <div class="section-title">
            ${mode === "phone" ? "Položky na displeji" : "Riadky"}
          </div>
          <div class="rows">
            ${this._config.rows.map((row, index) => this._renderRowEditor(row, index))}
          </div>
          <mwc-button @click=${this._addRow}>+ Pridať entitu</mwc-button>
        </div>
      </div>
    `;
  }

  private _renderRowEditor(row: SmartphoneCardRow, index: number): TemplateResult {
    return html`
      <div class="row-editor">
        <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
        <div class="row-editor-fields">
          <ha-entity-picker
            label="Entita"
            .hass=${this.hass}
            .value=${row.entity}
            @value-changed=${(e: CustomEvent) => this._updateRow(index, { entity: e.detail.value })}
          ></ha-entity-picker>
          <div class="row-editor-line">
            <ha-textfield
              label="Názov (voliteľné)"
              .value=${row.name ?? ""}
              @input=${(e: InputEvent) => this._updateRow(index, { name: (e.target as HTMLInputElement).value })}
            ></ha-textfield>
            <ha-icon-picker
              label="Ikona"
              .hass=${this.hass}
              .value=${row.icon ?? ""}
              @value-changed=${(e: CustomEvent) => this._updateRow(index, { icon: e.detail.value })}
            ></ha-icon-picker>
            <ha-select
              label="Zobrazenie"
              .value=${row.type ?? "text"}
              @selected=${(e: CustomEvent) => this._updateRow(index, { type: (e.target as any).value })}
              @closed=${(e: Event) => e.stopPropagation()}
            >
              ${ROW_TYPES.map((t) => html`<mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>`)}
            </ha-select>
          </div>
          ${row.type === "bar"
            ? html`<div class="row-editor-line">
                <ha-textfield
                  label="Min"
                  type="number"
                  .value=${String(row.min ?? 0)}
                  @input=${(e: InputEvent) => this._updateRow(index, { min: Number((e.target as HTMLInputElement).value) })}
                ></ha-textfield>
                <ha-textfield
                  label="Max"
                  type="number"
                  .value=${String(row.max ?? 100)}
                  @input=${(e: InputEvent) => this._updateRow(index, { max: Number((e.target as HTMLInputElement).value) })}
                ></ha-textfield>
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
      ha-select,
      ha-textfield,
      ha-entity-picker,
      ha-icon-picker {
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
