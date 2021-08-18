import { newE2EPage } from '@stencil/core/testing';

describe('radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<radio-group></radio-group>');

    const element = await page.find('radio-group');
    expect(element).toHaveClass('hydrated');
  });

  it('should set isChecked value to 1', async()=>{
    const page = await newE2EPage();
    await page.setContent('<radio-group></radio-group>');
    await page.$eval('radio-group' , (ele : any) =>{
      ele.list = ['Batman','Thor','Loki']
    })
    const element = await page.find('#Thor')
    element.click()
    const isChecked = await element.getProperty('checked')
    expect(isChecked).toBe(true)
  })
});
