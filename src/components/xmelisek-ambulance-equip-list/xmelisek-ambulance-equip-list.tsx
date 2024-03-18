import { Component, Host, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'xmelisek-ambulance-equip-list',
  styleUrl: 'xmelisek-ambulance-equip-list.css',
  shadow: true,
})
export class XmelisekAmbulanceEquipList {
  @Event({ eventName: "back"}) back: EventEmitter<string>;

  equipment: any[];

  private async getEquipAsync() {
    return await Promise.resolve(
      [
        {
          name: 'Počítač',
          price: 450.99,
          deliveryDate: new Date(Date.now() + 7 * 1000 * 60 * 60 * 24).toISOString(),
        },
        {
          name: 'Skalpel',
          price: 29.99,
          deliveryDate: new Date(Date.now() + 5 * 1000 * 60 * 60 * 24).toISOString(),
        },
        {
          name: 'Posteľ',
          price: 1000,
          deliveryDate: new Date(Date.now() - (2 * 1000 * 60 * 60 * 24)).toISOString(),
        }
      ]
    )
  }
  async componentWillLoad() {
    this.equipment = await this.getEquipAsync();
  }

  render() {
    return (
      <Host>
        <md-list>
          <md-list-item>
            <div slot="headline"><h1>{"Zoznam vybavenia"}</h1></div>
          </md-list-item>
          <md-divider></md-divider>
          {this.equipment.map((equip) =>
            <md-list-item>
              <div slot="headline"><h2>{equip.name}</h2></div>
              <div slot="supporting-text">
                <div>Cena: {equip.price}€</div>
                <div>Dodanie: {new Date(equip.deliveryDate).toLocaleDateString()}</div>
              </div>
            </md-list-item>
          )}
        </md-list>
        <md-filled-button onClick={() => this.back.emit()}>Späť</md-filled-button>

      </Host>
    );
  }

}
