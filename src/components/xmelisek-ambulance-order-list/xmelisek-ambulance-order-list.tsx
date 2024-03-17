import { Component, Host, h } from '@stencil/core';


@Component({
  tag: 'xmelisek-ambulance-order-list',
  styleUrl: 'xmelisek-ambulance-order-list.css',
  shadow: true,
})
export class XmelisekAmbulanceOrderList {

  orders: any[];

  private async getOrdersAsync() {
    return await Promise.resolve(
      [{
        name: 'Nový počítač',
        orderId: '10001',
        estimatedDelivery: new Date(Date.now() + 7 * 1000 * 60 * 60 * 24).toISOString(),
        equipment: 'Počítač',
        note: "Nový počítač pre doc. Novákovú v Ambulancii Ilkovicovej 4",
        price: 450.99,
        status: 'Prijatá'
      }, {
        name: 'Nový skalpel',
        orderId: '10002',
        estimatedDelivery: new Date(Date.now() + 5 * 1000 * 60 * 60 * 24).toISOString(),
        equipment: 'Skalpel',
        note: "Skalpel pre doktora Ambroza v hl nemocnici",
        price: 29.99,
        status: 'V preprave'
      }, {
        name: 'Krasna Posteľ',
        orderId: '10003',
        estimatedDelivery: new Date(Date.now() - (2 * 1000 * 60 * 60 * 24)).toISOString(),
        equipment: 'Posteľ',
        note: "Potreba upgrade postele pre pacienta v nemocnici",
        price: 1000,
        status: 'Doručená'
      }]
    );
  }
  async componentWillLoad() {
    this.orders = await this.getOrdersAsync();
  }

  render() {
    return (
      <Host>
        <md-list>
          <md-list-item>
          <div slot="headline"><h1>{"Objednávky"}</h1></div>
          </md-list-item>
          <md-divider></md-divider>
          {this.orders.map(order =>
            <md-list-item interactive>
              <div slot="headline"><b>{"Názov: "}</b>{order.name}</div>
              <div slot="supporting-text">{"Dátum doručenia: " + this.isoDateToLocale(order.estimatedDelivery)}</div>
              <div slot="supporting-text">{"Status: " + order.status}</div>
              <md-icon slot="start">shopping_cart</md-icon>
              <md-icon slot="end">edit</md-icon>
              <md-icon slot="end">delete</md-icon>
            </md-list-item>
          )}
        </md-list>
      </Host>
    );
  }
  private isoDateToLocale(iso: string) {
    if (!iso) return '';
    return new Date(Date.parse(iso)).toLocaleDateString()
  }

}
