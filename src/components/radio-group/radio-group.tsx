import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'radio-group',
  styleUrl: 'radio-group.css',
  shadow: true,
})
export class RadioGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
