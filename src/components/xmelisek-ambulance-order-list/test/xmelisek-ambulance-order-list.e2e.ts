import { newE2EPage } from '@stencil/core/testing';

describe('xmelisek-ambulance-order-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmelisek-ambulance-order-list></xmelisek-ambulance-order-list>');

    const element = await page.find('xmelisek-ambulance-order-list');
    expect(element).toHaveClass('hydrated');
  });
});
