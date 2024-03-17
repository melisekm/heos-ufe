import { newE2EPage } from '@stencil/core/testing';

describe('xmelisek-ambulance-order-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmelisek-ambulance-order-editor></xmelisek-ambulance-order-editor>');

    const element = await page.find('xmelisek-ambulance-order-editor');
    expect(element).toHaveClass('hydrated');
  });
});
