import { newE2EPage } from '@stencil/core/testing';

describe('progress-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<progress-bar></progress-bar>');

    const element = await page.find('progress-bar');
    expect(element).toHaveClass('hydrated');
  });

  it('should have class set to Determinate', async () =>{
    const page = await newE2EPage();
    await page.setContent('<progress-bar></progress-bar>');
    await page.$eval('progress-bar',(elem :any)=>{
      elem.type = 'Determinate'
    })

    await page.waitForChanges()
    const divEle = await page.find('progress-bar >>> div')
    expect(divEle).toHaveClass("determinate")
  })
});
