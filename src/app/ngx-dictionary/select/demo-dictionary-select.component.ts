import {Component, Input} from '@angular/core';
import {CgtDictionaryValue} from '@cagst/ngx-dictionary';

@Component({
  selector: 'demo-dictionary-select',
  templateUrl: './demo-dictionary-select.component.html'
})
export class DemoDictionarySelectComponent {
  @Input() public editing   = true;
  @Input() public label     = 'Gender';
  @Input() public required  = true;
  @Input() public disabled  = false;

  public options: CgtDictionaryValue[];
  public value: CgtDictionaryValue;

  constructor() {
    // this.options.push({
    //   dictionaryValueId: 1,
    //   display: 'Male',
    //   meaning: 'MALE',
    //   active: true,
    //   updateCount: 0
    // });
    //
    // this.options.push({
    //   dictionaryValueId: 2,
    //   display: 'Female',
    //   meaning: 'FEMALE',
    //   active: true,
    //   updateCount: 0
    // });
    //
    // this.options.push({
    //   dictionaryValueId: 2,
    //   display: 'Unknown',
    //   meaning: 'UNKNOWN',
    //   active: false,
    //   updateCount: 0
    // });
  }

}
