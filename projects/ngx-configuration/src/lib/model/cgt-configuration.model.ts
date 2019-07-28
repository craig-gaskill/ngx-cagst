import {CgtFieldAppearance} from './cgt-field-appearance.enum';
import {CgtNameFormat} from './cgt-name-format.enum';

export interface CgtConfiguration {
  fieldAppearance: CgtFieldAppearance;
  dateFormat: string;
  nameFormat: CgtNameFormat
}
