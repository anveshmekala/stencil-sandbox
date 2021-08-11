import { Component, h, Host,Prop } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  @Prop() type: string = 'InDeterminate'

  render() {
    return (
      <Host>
        
            <div class={ {
              progressbar: true,
              indeterminate: this.type === 'InDeterminate',
              determinate : this.type=== 'Determinate'
            }} 
            >
            </div>
      </Host>
    );
  }

}
