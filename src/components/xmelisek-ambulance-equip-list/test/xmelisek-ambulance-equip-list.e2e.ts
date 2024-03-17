import { newE2EPage } from '@stencil/core/testing';

describe('xmelisek-ambulance-equip-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmelisek-ambulance-equip-list></xmelisek-ambulance-equip-list>');

    const element = await page.find('xmelisek-ambulance-equip-list');
    expect(element).toHaveClass('hydrated');
  });
});
