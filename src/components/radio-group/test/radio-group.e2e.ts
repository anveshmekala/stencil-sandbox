import { newE2EPage } from '@stencil/core/testing';
import { RadioGroup } from '../radio-group';

describe('radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<radio-group></radio-group>');

    const element = await page.find('radio-group');
    expect(element).toHaveClass('hydrated');
  });

  it('should set isChecked value to 1', ()=>{
    const radioGroup =  new RadioGroup();
    radioGroup.handleChange( {target: {value : 2 ,name:"SpiderMan"} })
    expect(radioGroup.selectedIndex).toBe(2)
    expect(radioGroup.selectedItem).toBe("SpiderMan")
  })
});
