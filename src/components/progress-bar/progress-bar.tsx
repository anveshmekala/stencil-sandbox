import { Component, h, Host, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  @Prop({ reflect: true, mutable: true }) current: number =0;
  @Prop() type: string

  render() {
    const progressbarstyle = { width: `${this.current}%` }
    return (
      <Host>
        <div>
          <h2>
            Progress Bar
          </h2>
          <div class="infinite" style={progressbarstyle}>
          </div>
        </div>
      </Host>
    );
  }

}
