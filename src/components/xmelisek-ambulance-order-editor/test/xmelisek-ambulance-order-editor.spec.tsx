import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceOrderEditor } from '../xmelisek-ambulance-order-editor';

describe('xmelisek-ambulance-order-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmelisekAmbulanceOrderEditor],
      html: `<xmelisek-ambulance-order-editor></xmelisek-ambulance-order-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <xmelisek-ambulance-order-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmelisek-ambulance-order-editor>
    `);
  });
});
