import { newE2EPage } from '@stencil/core/testing';

describe('select-progressbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<select-progressbar></select-progressbar>');

    const element = await page.find('select-progressbar');
    expect(element).toHaveClass('hydrated');
  });
});
