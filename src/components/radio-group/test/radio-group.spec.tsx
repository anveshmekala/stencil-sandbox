import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { RadioGroup } from "../radio-group";

describe("radio-group", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [RadioGroup],
      template: () => <radio-group list={["DC", "MARVEL"]}></radio-group>,
    });
    expect(page.root).toEqualHtml(`
    <radio-group>
   <mock:shadow-root>
      <slot>
         <form>
            <div>
               <div>
                  <input name="DC" type="radio" value="0">
                  <label>
                  DC
                  </label>
               </div>
               <div>
                  <input name="MARVEL" type="radio" value="1">
                  <label>
                  MARVEL
                  </label>
               </div>
            </div>
         </form>
         <div>SelectedItem : </div>
      </slot>
   </mock:shadow-root>
</radio-group>
    `);
  });



});
