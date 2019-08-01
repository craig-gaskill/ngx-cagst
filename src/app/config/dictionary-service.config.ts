import {Injectable} from '@angular/core';

import {CgtDictionaryServiceConfig} from '@cagst/ngx-dictionary';

@Injectable()
export class DictionaryServiceConfig implements CgtDictionaryServiceConfig {
  baseUrl = 'http://localhost/dictionaries';
}
