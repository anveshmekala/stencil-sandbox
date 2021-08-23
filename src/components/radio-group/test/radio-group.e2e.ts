import { newE2EPage } from "@stencil/core/testing";

describe("radio-group", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<radio-group></radio-group>");
    const element = await page.find("radio-group");
    expect(element).toHaveClass("hydrated");
  });

  it("should have the list of radio buttons", async () => {
    const page = await newE2EPage({ html: "<radio-group></radio-group>" });
    await page.$eval("radio-group", (ele: any) => {
      ele.list = ["Batman", "Thor", "Loki"];
    });
    await page.waitForChanges();
    const option = await page.find("radio-group >>> #Thor");
    expect(option).not.toBeNull();
  });

  it("should display selected item", async () => {
    const page = await newE2EPage({ html: "<radio-group></radio-group>" });
    await page.$eval("radio-group", (ele: any) => {
      ele.list = ["Batman", "Thor", "Loki"];
    });
    await page.waitForChanges();
    const selectedOption = "Thor";
    const option = await page.find(`radio-group >>> #${selectedOption}`);
    const element = await page.find("radio-group >>> div");
    await option.click();
    expect(element).toEqualText(`SelectedItem : ${selectedOption}`);
  });
});
