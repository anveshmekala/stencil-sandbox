import { newSpecPage } from '@stencil/core/testing';
import { ToggleButton } from '../toggle-button';

describe('toggle-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ToggleButton],
      html: `<toggle-button></toggle-button>`,
    });
    expect(page.root).toEqualHtml(`
      <toggle-button>
        <mock:shadow-root>
          <slot>
          <div>
            <div class="container">
            <input  type="checkbox" />
              <div
                class="slider"
              ></div>
            </div>
          </div>
          <h4> OFF</h4>
          </slot>
        </mock:shadow-root>
      </toggle-button>
    `);
  });
});
