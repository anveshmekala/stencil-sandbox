import { Component, Host, h, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: "anveshmekala-radio-item",
  styleUrl: "radio-item.css",
  shadow: true,
})
export class RadioItem {
  /**
   * label of the radio item.
   */
  @Prop() label: string;

  /**
   * The checked value of the radio item.
   */
  @Prop({ mutable: true }) checked: boolean = false;
  
  /**
   * Event is emitted when the radio is checked.
   * It is not recommended to listen to this event when radio-item is grouped with radio-group
   */
  @Event() optionSelected: EventEmitter<{ name: string }>;

  /**
   * private method to handle onClick event on radio input
   */
  private handleClick = () => {
    this.checked = true;
    this.optionSelected.emit({ name: this.label });
  };
  render() {
    return (
      <Host>
        <label>
          <input
            type="radio"
            value={this.label}
            id={this.label}
            onClick={this.handleClick}
            checked={this.checked}
          ></input>
          {this.label}
        </label>
      </Host>
    );
  }
}
