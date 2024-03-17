import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceMenu } from '../xmelisek-ambulance-menu';

describe('xmelisek-ambulance-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmelisekAmbulanceMenu],
      html: `<xmelisek-ambulance-menu></xmelisek-ambulance-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <xmelisek-ambulance-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmelisek-ambulance-menu>
    `);
  });
});
