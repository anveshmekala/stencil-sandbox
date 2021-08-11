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
        <div>
        <form>
          <label>Select Type of progress bar :</label>
          <select>
            <option value="InDeterminate" >InDeterminate</option>
            <option value="Determinate" >Determinate</option>
          </select>
        </form>
        <br>
        <progress-bar> </progress-bar>
      </div>
        </mock:shadow-root>
      </select-progressbar>
    `);
  });

  it('should update the state value ', () =>{
    const selectComponent = new SelectProgressbar();
     selectComponent.handleSelect(new Event('InDeterminate'));
    expect(selectComponent.selectValue).toBe('InDeterminate')
  })

  it('should update the state value ', () =>{
    const selectComponent = new SelectProgressbar();
     selectComponent.handleSelect(new Event('Determinate'));
    expect(selectComponent.selectValue).toBe('Determinate')
  })
});
