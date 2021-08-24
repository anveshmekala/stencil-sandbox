import { Component, Host, h, Prop, EventEmitter,Event } from "@stencil/core";

@Component({
  tag: "radio-item",
  styleUrl: "radio-item.css",
  shadow: true,
})
export class RadioItem {
  @Prop() label: string;
  @Event() optionSelected : EventEmitter<{name: string }>
  @Prop({mutable: true}) checked : boolean = false;

  handleClick=()=>{
    this.checked = true
    this.optionSelected.emit({name : this.label})
  }
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
