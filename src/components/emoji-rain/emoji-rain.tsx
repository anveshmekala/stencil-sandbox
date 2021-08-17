import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'emoji-rain',
  styleUrl: 'emoji-rain.css',
  shadow: true,
})
export class EmojiRain {

  render() {
    return (
      <Host>
        <slot>EMOJI RAIN component https://github.com/notwaldorf/emoji-rain </slot>
      </Host>
    );
  }

}
