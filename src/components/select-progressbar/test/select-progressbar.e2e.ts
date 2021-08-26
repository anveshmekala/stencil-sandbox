import { newE2EPage } from '@stencil/core/testing';

describe('select-progressbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<anveshmekala-select-progressbar></anveshmekala-select-progressbar>');
    const element = await page.find('anveshmekala-select-progressbar');
    expect(element).toHaveClass('hydrated');
  });

  it.skip('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<anveshmekala-select-progressbar></anveshmekala-select-progressbar>');
    const element = await page.find('anveshmekala-progress-bar');
    await page.select('select','Determinate')
    expect(element).toHaveClass('determinate')
  });
});
