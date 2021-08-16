import { Component, Host, h, Prop, Watch } from "@stencil/core";

@Component({
  tag: "radio-group",
  styleUrl: "radio-group.css",
  shadow: true,
})
export class RadioGroup {
  @Prop({ reflect: true }) list: Array<string>;
  
  handleChange =()=>{
    console.log("Selected")
  }
  render() {
    return (
      <Host>
        <slot>
          <form onInput={this.handleChange}>
          <div>
            {this.list.map((item) => {
              return (
                <div>
                  <input type="radio"  id={item} name={item} value={item} />
                  <label>{item}</label>
                </div>
              );
            })}
          </div>
          </form>
        </slot>
      </Host>
    );
  }
}
