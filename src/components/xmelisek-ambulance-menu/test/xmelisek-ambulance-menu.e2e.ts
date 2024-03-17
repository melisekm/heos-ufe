import { newE2EPage } from '@stencil/core/testing';

describe('xmelisek-ambulance-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmelisek-ambulance-menu></xmelisek-ambulance-menu>');

    const element = await page.find('xmelisek-ambulance-menu');
    expect(element).toHaveClass('hydrated');
  });
});
