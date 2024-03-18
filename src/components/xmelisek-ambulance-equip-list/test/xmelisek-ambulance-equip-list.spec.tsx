import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceEquipList } from '../xmelisek-ambulance-equip-list';

describe('xmelisek-ambulance-equip-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmelisekAmbulanceEquipList],
      html: `<xmelisek-ambulance-equip-list></xmelisek-ambulance-equip-list>`,
    });
    const equipList = page.rootInstance as XmelisekAmbulanceEquipList;
    const expectedEquipment = equipList?.equipment?.length + 1; // -1 for the header
    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedEquipment);
  });
});
