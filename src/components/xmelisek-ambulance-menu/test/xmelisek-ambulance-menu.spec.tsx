import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceMenu } from '../xmelisek-ambulance-menu';

describe('xmelisek-ambulance-menu', () => {
  // it should contain 4 cards
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmelisekAmbulanceMenu],
      html: `<xmelisek-ambulance-menu></xmelisek-ambulance-menu>`,
    });
    const menu = page.rootInstance as XmelisekAmbulanceMenu;
    const expectedcards = menu?.cards?.length; // -1 for the header
    const items = page.root.shadowRoot.querySelectorAll('.card');
    expect(items.length).toEqual(expectedcards);
  });
});
