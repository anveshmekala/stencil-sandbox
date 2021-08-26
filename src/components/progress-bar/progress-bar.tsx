import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'anveshmekala-progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  /**
   * type of progress bar.
   * Default value is set to Inderterminate
   */
  @Prop() type: string = 'InDeterminate';

  render() {
    return (
      <Host>
        <div
          class={{
            progressbar: true,
            indeterminate: this.type === 'InDeterminate',
            determinate: this.type === 'Determinate',
          }}
        ></div>
      </Host>
    );
  }
}
