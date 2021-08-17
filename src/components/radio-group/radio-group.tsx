import { Component, Host, h, Prop, Watch, State } from "@stencil/core";

@Component({
  tag: "radio-group",
  styleUrl: "radio-group.css",
  shadow: true,
})
export class RadioGroup {
  @Prop({ reflect: true }) list: Array<string>;
  @State() selectedIndex: number;
  @State() selectedItem: string;

  handleChange = (e: any) => {
    this.selectedIndex = parseInt(e.target.value);
    this.selectedItem = e.target.name;
  };

  render() {
    return (
      <Host>
        <slot>
          <form>
            <div>
              {this.list.map((item, i) => {
                return (
                  <div>
                    <input
                      type="radio"
                      name={item}
                      value={i}
                      checked={this.selectedIndex === i}
                      onChange={this.handleChange}
                    />
                    <label>{item}</label>
                  </div>
                );
              })}
            </div>
          </form>
          <div>SelectedItem : {this.selectedItem && this.selectedItem}</div>
        </slot>
      </Host>
    );
  }
}
