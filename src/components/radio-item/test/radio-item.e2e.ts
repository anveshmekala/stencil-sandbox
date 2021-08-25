import { newE2EPage } from '@stencil/core/testing';

describe('radio-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<radio-item></radio-item>');

    const element = await page.find('radio-item');
    expect(element).toHaveClass('hydrated');
  });

  it("should emit optionSelected event", async() => {
    const page = await newE2EPage({html :'<radio-item></radio-item>'});
    await page.$eval("radio-item", (ele: any) => {
      ele.label= ["Batman"];
    });
    const spy = await page.spyOnEvent('optionSelected')
    const radioItem  = await page.find('radio-item >>> input')
    await radioItem.click();
    expect(spy).toHaveReceivedEventDetail({
      name: ["Batman"]
    })
  });
});
