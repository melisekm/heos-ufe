import { Component, Host, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'xmelisek-ambulance-order-editor',
  styleUrl: 'xmelisek-ambulance-order-editor.css',
  shadow: true,
})
export class XmelisekAmbulanceOrderEditor {
  @Prop() entryId: string;
  @Event({ eventName: "editor-closed" }) editorClosed: EventEmitter<string>;

  render() {
    return (
      <Host>
        <h2>{this.entryId === "@new" ? "Nová objednávka" : "Úprava objednávky"}</h2>
        <md-filled-text-field type="text" label="Názov objednávky" maxlength="255"  >
          <md-icon slot="leading-icon">shopping_cart</md-icon>
        </md-filled-text-field>

        <md-filled-text-field type="number" label="Číslo objednávky" >
          <md-icon slot="leading-icon">format_list_numbered_rtl</md-icon>
        </md-filled-text-field>

        <md-filled-text-field type="date" valueAsDate label="Predpokladané doručenie">
          <md-icon slot="leading-icon">calendar_month</md-icon>
        </md-filled-text-field>

        <md-filled-select label="Typ vybavenia">
          <md-icon slot="leading-icon">build</md-icon>
          <md-select-option value="scalpel">
            <div slot="headline">Skalpel</div>
          </md-select-option>
          <md-select-option value="bed">
            <div slot="headline">Posteľ</div>
          </md-select-option>
          <md-select-option value="computer">
            <div slot="headline">Počítač</div>
          </md-select-option>
        </md-filled-select>

        <md-filled-text-field label="Poznámka" type="textarea" rows="3" >
          <md-icon slot="leading-icon">note</md-icon>
        </md-filled-text-field>

        <md-filled-text-field label="Cena" type="number" prefix-text="€">
          <md-icon slot="leading-icon">attach_money</md-icon>
        </md-filled-text-field>


        {/* status item just a text */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* push it to the left */}
          <label style={{ marginRight: "auto" }}>Status</label>
          <md-radio id="accepted-radio" name="status" value="accepted"></md-radio>
          <label htmlFor="accepted-radio" class='status-item'>Akceptovaná</label>
          <md-radio id="inprogress-radio" name="status" value="inprogress"></md-radio>
          <label htmlFor="inprogress-radio" class='status-item'>V preprave</label>
          <md-radio id="done-radio" name="status" value="done"></md-radio>
          <label htmlFor="done-radio" class='status-item'>Doručená</label>
        </div>

        <label style={{ display: "flex", alignItems: "center" }}>
          Poistenie
          <md-switch selected style={{ marginLeft: "auto" }}></md-switch>
        </label>


        <div class="actions">
          <md-filled-button id="confirm"
            onClick={() => this.editorClosed.emit("store")}>
            <md-icon slot="icon">save</md-icon>
            Uložiť
          </md-filled-button>
          <md-filled-button id="cancel"
            onClick={() => this.editorClosed.emit("cancel")}>
            <md-icon slot="icon">cancel</md-icon>
            Zrušiť
          </md-filled-button>
        </div>
      </Host>
    );
  }

}
