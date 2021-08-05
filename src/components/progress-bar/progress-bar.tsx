import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  @Prop() maxValue: string;
  @Prop() currentValue: string;


  render() {
    return (
      <div>
        <h2>
          Progress Bar
        </h2>
        <progress id="file" value="20" max="100"> 70% </progress>
      </div>

    );
  }

}
