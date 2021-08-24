import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Element,
  Listen,
} from "@stencil/core";

@Component({
  tag: "anveshmekala-radio-group",
  styleUrl: "radio-group.css",
  shadow: true,
})
export class RadioGroup {
  @Event() optionChanged: EventEmitter<{ selectedItem: string }>;
  @Element() el: HTMLElement;

  @Listen('optionSelected')
  handleSelection(event : CustomEvent<{name : string}>){
  const otherRadioButton = Array.from(this.el.querySelectorAll('radio-item')).filter((item)=> item.label != event.detail.name)
  otherRadioButton.forEach((item)=>{
    console.log(item.label, item.checked)
    if(item.checked ){
      item.checked = false;
    }
  })
  }

  render() {
    return (
      <Host role="radiogroup">
        <slot/>
      </Host>
    );
  }
}
