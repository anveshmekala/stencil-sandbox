import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "anveshmekala-radio-group",
  styleUrl: "radio-group.css",
  shadow: true,
})
export class RadioGroup {
  @Prop() list: Array<string>;
  @State() selectedIndex: number;
  @State() selectedItem: string;
  @Event() optionChanged: EventEmitter<{ selectedItem: string }>;

   handleChange = (e:any) => {
    this.selectedIndex = parseInt(e.target.value);
    this.selectedItem = e.target.name;
    this.optionChanged.emit(e.target.name);
  };

  render() {
    return (
      <Host>
        {this.list?.map((item, i) => {
          return (
            <list>
              <label>
                <input
                  type="radio"
                  name={item}
                  value={i}
                  checked={this.selectedIndex === i}
                  onChange={this.handleChange}
                  id={item}
                />
                {item}
              </label>
            </list>
          );
        })}
        <div>SelectedItem : {this.selectedItem || null}</div>
      </Host>
    );
  }
}
