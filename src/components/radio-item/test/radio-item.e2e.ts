import { newE2EPage } from '@stencil/core/testing';

describe('radio-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<radio-item></radio-item>');

    const element = await page.find('radio-item');
    expect(element).toHaveClass('hydrated');
  });
});
