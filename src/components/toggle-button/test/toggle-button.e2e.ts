import { newE2EPage } from '@stencil/core/testing';

describe('toggle-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<anveshmekala-toggle-button></anveshmekala-toggle-button>');

    const element = await page.find('anveshmekala-toggle-button');
    expect(element).toHaveClass('hydrated');
  });
  
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<anveshmekala-toggle-button></anveshmekala-toggle-button>');

    const element = await page.find('anveshmekala-toggle-button >>> input');
    await  element.click()
    const text = await page.find('anveshmekala-toggle-button >>> h4')
    expect(text).toEqualText('ON')
  });

});
