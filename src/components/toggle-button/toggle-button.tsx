import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class ToggleButton {
  @State() isChecked: boolean = false;

  //scope issue
  handleToggle = () => {
    this.isChecked = !this.isChecked;
  };

  render() {
    return (
      <Host>
        <slot>
          <div>
            <input type="checkbox" onClick={this.handleToggle} />
            <div
              class={{
                slider: true,
                slide: this.isChecked,
              }}
            ></div>
          </div>
        </slot>
      </Host>
    );
  }
}
