import {Pipe, PipeTransform} from '@angular/core';

import {CgtNameFormat} from '@cagst/ngx-configuration';

import {CgtPerson} from '../models/cgt-person';

@Pipe({name: 'cgtPersonFormatter'})
export class CgtPersonFormatterPipe implements PipeTransform {
  private static formatShortLastFirst(value: CgtPerson): string {
    return (value ? `${value.lastName}, ${value.firstName}` : undefined);
  }

  private static formatShortFirstLast(value: CgtPerson): string {
    return `${value.firstName} ${value.lastName}`;
  }

  private static formatMediumLastFirst(value: CgtPerson): string {
    if (value.middleName) {
      return `${CgtPersonFormatterPipe.formatShortLastFirst(value)} ${value.middleName}`;
    } else {
      return CgtPersonFormatterPipe.formatShortLastFirst(value);
    }
  }

  private static formatMediumFirstLast(value: CgtPerson): string {
    if (value.middleName) {
      return `${value.firstName} ${value.middleName} ${value.lastName}`;
    } else {
      return this.formatShortFirstLast(value);
    }
  }

  private static formatLongLastFirst(value: CgtPerson): string {
    let str = value.lastName;
    str += ', ';
    str += value.firstName;

    if (value.middleName) {
      str += ' ' + value.middleName;
    }

    return str;
  }

  private static formatLongFirstLast(value: CgtPerson): string {
    let str = '';
    str += value.firstName + ' ';

    if (value.middleName) {
      str += value.middleName + ' ';
    }
    str += value.lastName;

    return str;
  }

  public transform(value: any, format?: CgtNameFormat): string {
    if (!value) {
      return undefined;
    }

    switch (format) {
      case CgtNameFormat.ShortLastFirst:
        return CgtPersonFormatterPipe.formatShortLastFirst(value);

      case CgtNameFormat.ShortFirstLast:
        return CgtPersonFormatterPipe.formatShortFirstLast(value);

      case CgtNameFormat.MediumLastFirst:
        return CgtPersonFormatterPipe.formatMediumLastFirst(value);

      case CgtNameFormat.MediumFirstLast:
        return CgtPersonFormatterPipe.formatMediumFirstLast(value);

      case CgtNameFormat.LongLastFirst:
        return CgtPersonFormatterPipe.formatLongLastFirst(value);

      case CgtNameFormat.LongFirstLast:
        return CgtPersonFormatterPipe.formatLongFirstLast(value);

      default:
        return CgtPersonFormatterPipe.formatMediumLastFirst(value);
    }
  }
}
