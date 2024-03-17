import { newE2EPage } from '@stencil/core/testing';

describe('xmelisek-ambulance-order-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmelisek-ambulance-order-app></xmelisek-ambulance-order-app>');

    const element = await page.find('xmelisek-ambulance-order-app');
    expect(element).toHaveClass('hydrated');
  });
});
