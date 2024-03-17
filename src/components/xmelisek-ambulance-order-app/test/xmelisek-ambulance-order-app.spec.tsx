import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceOrderApp } from '../xmelisek-ambulance-order-app';

describe('xmelisek-ambulance-order-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmelisekAmbulanceOrderApp],
      html: `<xmelisek-ambulance-order-app></xmelisek-ambulance-order-app>`,
    });
    expect(page.root).toEqualHtml(`
      <xmelisek-ambulance-order-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmelisek-ambulance-order-app>
    `);
  });
});
