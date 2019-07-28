import {CgtDictionaryValue} from './cgt-dictionary-value';

export interface CgtDictionary {
  dictionaryId?: number;
  display: string;
  meaning?: string;
  active: boolean;
  updateCount: number;
  values?: CgtDictionaryValue[];
}
