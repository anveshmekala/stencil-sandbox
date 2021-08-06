import { Component, h, Host, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  @Prop({ reflect: true, mutable: true }) current: number;
  @Prop() type: string
  @Listen('click', { capture: true })
  handleClick() {
    this.current = 100
  }

  render() {
    const progressbarstyle = { width: `${this.current}%` }
    return (
      <Host>
        <div>
          <h2>
            Progress Bar
          </h2>
          {/* <progress class="infinite" id="file" value={this.current} max="100" style=> </progress> */}
          <div class="pot">


          {/* <div class="infinite" style={progressbarstyle
          }></div> */}
          <div class="infinite">

          </div>
                    </div>
          {/* <button >
            animate
          </button> */}
        </div>
      </Host>
    );
  }

}
