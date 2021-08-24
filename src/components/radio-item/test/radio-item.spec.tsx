import { newSpecPage } from '@stencil/core/testing';
import { RadioItem } from '../radio-item';

describe('radio-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioItem],
      html: `<radio-item></radio-item>`,
    });
    expect(page.root).toEqualHtml(`
      <radio-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </radio-item>
    `);
  });
});
