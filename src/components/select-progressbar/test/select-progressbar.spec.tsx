import { newSpecPage } from '@stencil/core/testing';
import { SelectProgressbar } from '../select-progressbar';

describe('select-progressbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectProgressbar],
      html: `<select-progressbar></select-progressbar>`,
    });
    expect(page.root).toEqualHtml(`
      <select-progressbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </select-progressbar>
    `);
  });
});
