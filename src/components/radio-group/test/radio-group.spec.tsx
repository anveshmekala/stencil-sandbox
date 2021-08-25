import { newSpecPage } from "@stencil/core/testing";
import { RadioGroup } from "../radio-group";

describe("radio-group", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [RadioGroup],
      html: `<anveshmekala-radio-group>
      <anveshmekala-radio-item></anveshmekala-radio-item>
      </anveshmekala-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
          <anveshmekala-radio-group role="radiogroup">
          <mock:shadow-root>
          <slot></slot>
          </mock:shadow-root>
          <anveshmekala-radio-item></anveshmekala-radio-item>
          </anveshmekala-radio-group>
        `);
  });
});
