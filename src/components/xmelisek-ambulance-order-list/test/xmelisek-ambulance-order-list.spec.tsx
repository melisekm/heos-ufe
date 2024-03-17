import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceOrderList } from '../xmelisek-ambulance-order-list';

describe('xmelisek-ambulance-order-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmelisekAmbulanceOrderList],
      html: `<xmelisek-ambulance-order-list></xmelisek-ambulance-order-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xmelisek-ambulance-order-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmelisek-ambulance-order-list>
    `);
  });
});
