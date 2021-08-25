import { newE2EPage } from "@stencil/core/testing";

describe("radio-group", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<anveshmekala-radio-group></anveshmekala-radio-group>");
    const element = await page.find("anveshmekala-radio-group");
    expect(element).toHaveClass("hydrated");
  });

  it("should emit optionChanged event", async () => {
    const page = await newE2EPage();
    await page.setContent("<anveshmekala-radio-group><anveshmekala-radio-item></anveshmekala-radio-item></anveshmekala-radio-group>");
    await page.$eval("anveshmekala-radio-item", (ele: any) => {
      ele.label= "Batman";
    });
    const element = await page.find("anveshmekala-radio-item >>> input");
    const spy = await page.spyOnEvent('optionChanged')
    await element.click()

   expect(spy).toHaveReceivedEventDetail({
    selectedRadioItem:"Batman"
   });
  });

});
