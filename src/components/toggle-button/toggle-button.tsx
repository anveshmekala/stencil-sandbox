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
            <div class="container">  
            <div
              class={{
                slider: true,
                slide: this.isChecked,
              }}
            ></div>
              </div>
            <input class="checkmark" type="checkbox" onClick={this.handleToggle} />
          </div>
          <h4>{this.isChecked}</h4>
        </slot>
      </Host>
    );
  }
}
