import { newSpecPage } from '@stencil/core/testing';
import { SelectProgressbar } from '../select-progressbar';

describe('select-progressbar', () => {

  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectProgressbar],
      html: `<anveshmekala-select-progressbar></anveshmekala-select-progressbar>`,
    });

    expect(page.root).toEqualHtml(`
      <anveshmekala-select-progressbar>
        <mock:shadow-root>
        <div>
        <form>
          <label>Select Type of progress bar :</label>
          <select>
            <option value="InDeterminate" >InDeterminate</option>
            <option value="Determinate" >Determinate</option>
          </select>
        </form>
        <br>
        <anveshmekala-progress-bar> </anveshmekala-progress-bar>
      </div>
        </mock:shadow-root>
      </anveshmekala-select-progressbar>
    `);
  });

});
