import {
  Component,
  Host,
  h,
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
  /**
   * Fires in when there is a change in selection of radioitem.
   * It is recommended to attach the listener directly to radio-group component.
   */
  @Event() optionChanged: EventEmitter<{ selectedRadioItem: string }>;

  @Element() el: HTMLElement;
 
  /**
   * 
   * Event Listener
   */
  @Listen("optionSelected")
  handleSelection(event: CustomEvent<{ name: string }>) {
    console.log(event.detail)
    const otherRadioButtons = Array.from(
      this.el.querySelectorAll("anveshmekala-radio-item")
    ).filter(
      (radioItem: HTMLAnveshmekalaRadioItemElement) => radioItem.label != event.detail.name
    );
    otherRadioButtons.forEach((radioItem: HTMLAnveshmekalaRadioItemElement) => {
      if (radioItem.checked) {
        radioItem.checked = false;
      }
    });
    this.optionChanged.emit({ selectedRadioItem: event.detail.name });
  }


  render() {
    return (
      <Host role="radiogroup">
        <slot />
      </Host>
    );
  }
}
