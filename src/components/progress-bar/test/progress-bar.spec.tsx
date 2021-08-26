import { newSpecPage } from "@stencil/core/testing";
import { ProgressBar } from "../progress-bar";

describe("progress-bar", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [ProgressBar],
      html: `<anveshmekala-progress-bar></anveshmekala-progress-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <anveshmekala-progress-bar>
        <mock:shadow-root>
        <div class="progressbar indeterminate"
        >
        </mock:shadow-root>
      </anveshmekala-progress-bar>
    `);
  });
});
