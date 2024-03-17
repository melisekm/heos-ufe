import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceOrderList } from '../xmelisek-ambulance-order-list';

describe('xmelisek-ambulance-order-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmelisekAmbulanceOrderList],
      html: `<xmelisek-ambulance-order-list></xmelisek-ambulance-order-list>`,
    });
    const orderList = page.rootInstance as XmelisekAmbulanceOrderList;
    const expectedOrders = orderList?.orders?.length + 1; // -1 for the header
    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedOrders);
  });
});
