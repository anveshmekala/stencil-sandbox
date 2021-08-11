import { newE2EPage } from '@stencil/core/testing';

describe('select-progressbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<select-progressbar></select-progressbar>');

    const element = await page.find('select-progressbar');
    expect(element).toHaveClass('hydrated');
  });

  it('should select determinate from options and update the state', async () =>{
    const page = await newE2EPage();
    await page.setContent('<select-progressbar></select-progressbar>')
    const childComponent = await page.find('progress-bar')
    // expect(childComponent).not.toBeNull()
  })


});
