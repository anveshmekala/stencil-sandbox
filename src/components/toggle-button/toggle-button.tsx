import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class ToggleButton {
  @State() isChecked: boolean = false;

  handleToggle = () => {
    this.isChecked = !this.isChecked;
  };

  render() {
    return (
      <Host>
        <slot>
          <div>
            <div class="container">
            <input  type="checkbox" onClick={this.handleToggle} />
              <div
                class={{
                  slider: true,
                  slide: this.isChecked,
                }}
              ></div>
            </div>
           
          </div>
          <h4> {this.isChecked ? "ON" : "OFF"}</h4>
        </slot>
      </Host>
    );
  }
}
