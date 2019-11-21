import {Component, Input} from '@angular/core';
import {CgtDictionaryValue} from '@cagst/ngx-dictionary';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'demo-select',
  templateUrl: './demo-select.component.html'
})
export class DemoSelectComponent {
  @Input() public editing   = true;
  @Input() public label     = 'State';
  @Input() public required  = true;
  @Input() public disabled  = false;

  public states: CgtDictionaryValue[] = [];

  constructor() {
    this.states = [
      { dictionaryValueId:  1, display: 'Alabama', meaning: 'AL', active: true, updateCount: 0 },
      { dictionaryValueId:  2, display: 'Alaska', meaning: 'AK', active: true, updateCount: 0 },
      { dictionaryValueId:  3, display: 'American Samoa', meaning: 'AS', active: false, updateCount: 0 },
      { dictionaryValueId:  4, display: 'Arizona', meaning: 'AZ', active: true, updateCount: 0 },
      { dictionaryValueId:  5, display: 'Arkansas', meaning: 'AR', active: true, updateCount: 0 },
      { dictionaryValueId:  6, display: 'California', meaning: 'CA', active: true, updateCount: 0 },
      { dictionaryValueId:  7, display: 'Colorado', meaning: 'CO', active: true, updateCount: 0 },
      { dictionaryValueId:  8, display: 'Connecticut', meaning: 'CT', active: true, updateCount: 0 },
      { dictionaryValueId:  9, display: 'Delaware', meaning: 'DE', active: true, updateCount: 0 },
      { dictionaryValueId: 10, display: 'District of Columbia', meaning: 'DC', active: true, updateCount: 0 },
      { dictionaryValueId: 11, display: 'Federated States Of Micronesia', meaning: 'FM', active: false, updateCount: 0 },
      { dictionaryValueId: 12, display: 'Florida', meaning: 'FL', active: true, updateCount: 0 },
      { dictionaryValueId: 13, display: 'Georgia', meaning: 'GA', active: true, updateCount: 0 },
      { dictionaryValueId: 14, display: 'Guam', meaning: 'GU', active: false, updateCount: 0 },
      { dictionaryValueId: 15, display: 'Hawaii', meaning: 'HI', active: true, updateCount: 0 },
      { dictionaryValueId: 16, display: 'Idaho', meaning: 'ID', active: true, updateCount: 0 },
      { dictionaryValueId: 17, display: 'Illinois', meaning: 'IL', active: true, updateCount: 0 },
      { dictionaryValueId: 18, display: 'Indiana', meaning: 'IN', active: true, updateCount: 0 },
      { dictionaryValueId: 19, display: 'Iowa', meaning: 'IA', active: true, updateCount: 0 },
      { dictionaryValueId: 20, display: 'Kansas', meaning: 'KS', active: true, updateCount: 0 },
      { dictionaryValueId: 21, display: 'Kentucky', meaning: 'KY', active: true, updateCount: 0 },
      { dictionaryValueId: 22, display: 'Louisiana', meaning: 'LA', active: true, updateCount: 0 },
      { dictionaryValueId: 23, display: 'Maine', meaning: 'ME', active: true, updateCount: 0 },
      { dictionaryValueId: 24, display: 'Marshall Islands', meaning: 'MH', active: false, updateCount: 0 },
      { dictionaryValueId: 25, display: 'Maryland', meaning: 'MD', active: true, updateCount: 0 },
      { dictionaryValueId: 26, display: 'Massachusetts', meaning: 'MA', active: true, updateCount: 0 },
      { dictionaryValueId: 27, display: 'Michigan', meaning: 'MI', active: true, updateCount: 0 },
      { dictionaryValueId: 28, display: 'Minnesota', meaning: 'MN', active: true, updateCount: 0 },
      { dictionaryValueId: 29, display: 'Mississippi', meaning: 'MS', active: true, updateCount: 0 },
      { dictionaryValueId: 30, display: 'Missouri', meaning: 'MO', active: true, updateCount: 0 },
      { dictionaryValueId: 31, display: 'Montana', meaning: 'MT', active: true, updateCount: 0 },
      { dictionaryValueId: 32, display: 'Nebraska', meaning: 'NE', active: true, updateCount: 0 },
      { dictionaryValueId: 33, display: 'Nevada', meaning: 'NV', active: true, updateCount: 0 },
      { dictionaryValueId: 34, display: 'New Hampshire', meaning: 'NH', active: true, updateCount: 0 },
      { dictionaryValueId: 35, display: 'New Jersey', meaning: 'NJ', active: true, updateCount: 0 },
      { dictionaryValueId: 36, display: 'New Mexico', meaning: 'NM', active: true, updateCount: 0 },
      { dictionaryValueId: 37, display: 'New York', meaning: 'NY', active: true, updateCount: 0 },
      { dictionaryValueId: 38, display: 'North Carolina', meaning: 'NC', active: true, updateCount: 0 },
      { dictionaryValueId: 39, display: 'North Dakota', meaning: 'ND', active: true, updateCount: 0 },
      { dictionaryValueId: 40, display: 'Northern Mariana Islands', meaning: 'MP', active: false, updateCount: 0 },
      { dictionaryValueId: 41, display: 'Ohio', meaning: 'OH', active: true, updateCount: 0 },
      { dictionaryValueId: 42, display: 'Oklahoma', meaning: 'OK', active: true, updateCount: 0 },
      { dictionaryValueId: 43, display: 'Oregon', meaning: 'OR', active: true, updateCount: 0 },
      { dictionaryValueId: 44, display: 'Palau', meaning: 'PW', active: true, updateCount: 0 },
      { dictionaryValueId: 45, display: 'Pennsylvania', meaning: 'PA', active: true, updateCount: 0 },
      { dictionaryValueId: 46, display: 'Puerto Rico', meaning: 'PR', active: true, updateCount: 0 },
      { dictionaryValueId: 47, display: 'Rhode Island', meaning: 'RI', active: true, updateCount: 0 },
      { dictionaryValueId: 48, display: 'South Carolina', meaning: 'SC', active: true, updateCount: 0 },
      { dictionaryValueId: 49, display: 'South Dakota', meaning: 'SD', active: true, updateCount: 0 },
      { dictionaryValueId: 50, display: 'Tennessee', meaning: 'TN', active: true, updateCount: 0 },
      { dictionaryValueId: 51, display: 'Texas', meaning: 'TX', active: true, updateCount: 0 },
      { dictionaryValueId: 52, display: 'Utah', meaning: 'UT', active: true, updateCount: 0 },
      { dictionaryValueId: 53, display: 'Vermont', meaning: 'VT', active: true, updateCount: 0 },
      { dictionaryValueId: 54, display: 'Virgin Islands', meaning: 'VI', active: true, updateCount: 0 },
      { dictionaryValueId: 55, display: 'Virginia', meaning: 'VA', active: true, updateCount: 0 },
      { dictionaryValueId: 56, display: 'Washington', meaning: 'WA', active: true, updateCount: 0 },
      { dictionaryValueId: 57, display: 'West Virginia', meaning: 'WV', active: true, updateCount: 0 },
      { dictionaryValueId: 58, display: 'Wisconsin', meaning: 'WI', active: true, updateCount: 0 },
      { dictionaryValueId: 59, display: 'Wyoming', meaning: 'WY', active: true, updateCount: 0 }
    ];

  }

  public value: any;

  public lookupFunction(query?: string): Observable<CgtDictionaryValue[]> {
    let filteredOptions;

    if (query) {
      filteredOptions = this.states.filter(val => val.display.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1);
    } else {
      filteredOptions = this.states.slice(0, 20);
    }

    return of(filteredOptions);
  }
}
