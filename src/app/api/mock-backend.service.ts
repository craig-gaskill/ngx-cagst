import {InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities} from 'angular-in-memory-web-api';

import {CgtDictionary, CgtDictionaryValue} from '@cagst/ngx-dictionary';

export class MockBackendService implements InMemoryDbService {
  public createDb() {
    const dictionaries: CgtDictionary[] = [
      { dictionaryId: 1, display: 'Address Types', meaning: 'ADDRESS_TYPES', active: true, updateCount: 0 },
      { dictionaryId: 2, display: 'Gender', meaning: 'GENDER', active: true, updateCount: 0 },
      { dictionaryId: 3, display: 'Phone Types', meaning: 'PHONE_TYPES', active: true, updateCount: 0 },
      { dictionaryId: 4, display: 'Email Types', meaning: 'EMAIL_TYPES', active: true, updateCount: 0 }
    ];

    const genders: CgtDictionaryValue[] = [
      { dictionaryValueId: 1, display: 'Female', meaning: 'FEMALE', active: true, updateCount: 0 },
      { dictionaryValueId: 2, display: 'Male', meaning: 'MALE', active: true, updateCount: 0 },
      { dictionaryValueId: 3, display: 'Unknown', meaning: 'UNKNOWN', active: true, updateCount: 0 }
    ];

    return {
      dictionaries: [
        { dictionaryId: 1, display: 'Address Types', meaning: 'ADDRESS_TYPES', active: true, updateCount: 0 },
        { dictionaryId: 2, display: 'Gender', meaning: 'GENDER', active: true, updateCount: 0 },
        { dictionaryId: 3, display: 'Phone Types', meaning: 'PHONE_TYPES', active: true, updateCount: 0 },
        { dictionaryId: 4, display: 'Email Types', meaning: 'EMAIL_TYPES', active: true, updateCount: 0 }
      ],
      'dictionaries/GENDER/values': [
        { dictionaryValueId: 1, display: 'Female', meaning: 'FEMALE', active: true, updateCount: 0 },
        { dictionaryValueId: 2, display: 'Male', meaning: 'MALE', active: true, updateCount: 0 },
        { dictionaryValueId: 3, display: 'Unknown', meaning: 'UNKNOWN', active: false, updateCount: 0 }
      ]
    };
  }

  public parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    if (!url.includes('dictionaries/ADDRESS_TYPES/values') &&
        !url.includes('dictionaries/GENDER/values') &&
        !url.includes('dictionaries/PHONE_TYPES/values') &&
        !url.includes('dictionaries/EMAIL_TYPES/values')
    ) {
      return undefined;
    }

    if (url.includes('dictionaries/GENDER/values')) {
      return utils.parseRequestUrl('/dictionaries/GENDER/values');
    }

    return undefined;
  }
}
