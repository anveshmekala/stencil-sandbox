import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'select-progressbar',
  styleUrl: 'select-progressbar.css',
  shadow: true,
})
export class SelectProgressbar {

  @State() selectValue: string;

  handleSelect(event: any) {
    this.selectValue = event.target.value;
  }

  render() {
    return (
      <div>
        <form>

          <label>Select Type of progress bar :</label>
          <select onInput={(event) => this.handleSelect(event)}>
            <option value="InDeterminate" selected={this.selectValue === 'InDeterminate'}>InDeterminate</option>
            <option value="Determinate" selected={this.selectValue === 'Determinate'}>Determinate</option>
          </select>
        </form>
        <br></br>
        <progress-bar type={this.selectValue}> </progress-bar>
      </div>
    );
  }

}
