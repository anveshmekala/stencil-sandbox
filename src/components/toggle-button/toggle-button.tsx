import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'anveshmekala-toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class ToggleButton {
  /**
   * checked value 
   */
  @State() isChecked: boolean = false;


  private handleToggle = () => {
    this.isChecked = !this.isChecked;
  };

  render() {
    return (
      <Host>
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
      </Host>
    );
  }
}
