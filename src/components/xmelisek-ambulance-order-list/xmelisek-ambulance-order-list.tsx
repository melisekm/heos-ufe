import { Component, Host, h } from '@stencil/core';
import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/icon/icon'

@Component({
  tag: 'xmelisek-ambulance-order-list',
  styleUrl: 'xmelisek-ambulance-order-list.css',
  shadow: true,
})
export class XmelisekAmbulanceOrderList {

  orders: any[];

  private async getOrdersAsync(){
    return await Promise.resolve(
      [{
        name: 'Nový počítač',
        orderId: '10001',
        estimatedDelivery: new Date(Date.now() + 65 * 60).toISOString(),
        equipment: 'Počítač',
        note: "Nový počítač pre doc. Novákovú v Ambulancii Ilkovicovej 4",
        price: 450.99,
        status: 'Prijatá'
    }, {
      name: 'Nový skalpel',
      orderId: '10002',
      estimatedDelivery: new Date(Date.now() + 30 * 60).toISOString(),
      equipment: 'Skalpel',
      note: "Skalpel pre doktora Ambroza v hl nemocnici",
      price: 29.99,
      status: 'V preprave'
    }, {
      name: 'Krasna Posteľ',
      orderId: '10003',
      estimatedDelivery: new Date(Date.now() + 5 * 60).toISOString(),
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
          {this.orders.map(order =>
            <md-list-item>
              <div slot="headline">{order.name}</div>
              <div slot="supporting-text">{"Dátum doručenia: " + this.isoDateToLocale(order.estimatedDelivery)}</div>
                <md-icon slot="start">shopping_cart</md-icon>
            </md-list-item>
          )}
        </md-list>
      </Host>
    );
  }
  private isoDateToLocale(iso:string) {
    if(!iso) return '';
    return new Date(Date.parse(iso)).toLocaleTimeString()
  }

}
