import {Pipe, PipeTransform} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {CgtDictionaryValueService} from '../services/cgt-dictionary-value.service';
import {CgtDictionaryValue} from '../models/cgt-dictionary-value';

@Pipe({name: 'cgtDictionary'})
export class CgtDictionaryPipe implements PipeTransform {
  constructor(private _dictionaryValueService: CgtDictionaryValueService) { }

  public transform(value: number | string | CgtDictionaryValue, dictionaryMeaning: string): Observable<string> {
    if (!value) {
      return undefined;
    } else if ((typeof value === 'number') || (typeof value === 'string')) {
      return this._dictionaryValueService.getDictionaryValue(dictionaryMeaning, value)
        .pipe(
          map(result => result ? result.display : undefined)
        );
    } else {
      return of(value.display);
    }
  }
}
