import { newE2EPage } from '@stencil/core/testing';

describe('radio-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<anveshmekala-radio-item></anveshmekala-radio-item>');

    const element = await page.find('anveshmekala-radio-item');
    expect(element).toHaveClass('hydrated');
  });

  it("should emit optionSelected event", async() => {
    const page = await newE2EPage({html :'<anveshmekala-radio-item></anveshmekala-radio-item>'});
    await page.$eval("anveshmekala-radio-item", (ele: any) => {
      ele.label= "Batman";
    });
    const spy = await page.spyOnEvent('optionSelected')
    const radioItem  = await page.find('anveshmekala-radio-item >>> input')
    await radioItem.click();
    expect(spy).toHaveReceivedEventDetail({
      name: "Batman"
    })
  });
});
