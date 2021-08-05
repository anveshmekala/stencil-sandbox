import { Component, h, Host, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  @Prop({ reflect: true, mutable: true }) current: number;

  @Listen('click', { capture: true })
  handleClick() {
    this.current = 100
  }
  
  render() {
    return (
      <Host>
        <div>
          <h2>
            Progress Bar
          </h2>
          <progress id="file" value={this.current} max="100"> </progress>
          <button >
            animate
          </button>
        </div>
      </Host>
    );
  }

}
