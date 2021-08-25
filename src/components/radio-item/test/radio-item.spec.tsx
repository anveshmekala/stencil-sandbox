import { RadioItem } from "../radio-item";

describe("radio-item", () => {
  it("should set the checked value to true", () => {
    const page = new RadioItem();
    expect(page.checked).toBe(false);
  });
});
