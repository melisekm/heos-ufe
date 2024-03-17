import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceEquipList } from '../xmelisek-ambulance-equip-list';

describe('xmelisek-ambulance-equip-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmelisekAmbulanceEquipList],
      html: `<xmelisek-ambulance-equip-list></xmelisek-ambulance-equip-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xmelisek-ambulance-equip-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmelisek-ambulance-equip-list>
    `);
  });
});
