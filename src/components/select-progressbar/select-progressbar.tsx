import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'anveshmekala-select-progressbar',
  styleUrl: 'select-progressbar.css',
  shadow: true,
})
export class SelectProgressbar {
  /**
   * stores the type of progressbar
   */
  @State() type: string;

  private handleSelect(e) {
    this.type = e.target.value;
  }

  render() {
    return (
      <div>
        <form>
          <label>Select Type of progress bar :</label>
          <select
            onChange={(e)=> {
              this.handleSelect((e));
            }}
          >
            <option value="InDeterminate"  selected={this.type === 'InDeterminate'}>
              InDeterminate
            </option>
            <option value="Determinate" selected={this.type === 'Determinate'}>
              Determinate
            </option>
          </select>
        </form>
        <br></br>
        <anveshmekala-progress-bar type={this.type}> </anveshmekala-progress-bar>
      </div>
    );
  }
}
