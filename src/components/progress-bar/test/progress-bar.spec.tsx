import { newSpecPage } from "@stencil/core/testing";
import { ProgressBar } from "../progress-bar";

describe("progress-bar", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [ProgressBar],
      html: `<progress-bar></progress-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <progress-bar>
        <mock:shadow-root>
        <div class="progressbar indeterminate"
        >
        </mock:shadow-root>
      </progress-bar>
    `);
  });
});
