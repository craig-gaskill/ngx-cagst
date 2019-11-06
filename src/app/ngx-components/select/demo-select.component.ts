import {Component, Input} from '@angular/core';

interface State {
  code: string;
  name: string;
  active: boolean;
}

@Component({
  selector: 'demo-select',
  templateUrl: './demo-select.component.html'
})
export class DemoSelectComponent {
  @Input() public editing   = true;
  @Input() public label     = 'State';
  @Input() public required  = true;
  @Input() public disabled  = false;

  public states: State[] = [];

  constructor() {
    this.states.push({
      code: 'CO',
      name: 'Colorado',
      active: true
    });
    this.states.push({
      code: 'KS',
      name: 'Kansas',
      active: true
    });
    this.states.push({
      code: 'MO',
      name: 'Missouri',
      active: true
    });
    this.states.push({
      code: 'NE',
      name: 'Nebraska',
      active: true
    });
    this.states.push({
      code: 'OK',
      name: 'Oklahoma',
      active: false
    });
  }

  public value: any;
}
