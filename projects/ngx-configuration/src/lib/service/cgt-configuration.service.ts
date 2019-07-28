import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {CgtConfiguration} from '../model/cgt-configuration.model';
import {CgtFieldAppearance} from '../model/cgt-field-appearance.enum';
import {CgtNameFormat} from '../model/cgt-name-format.enum';

@Injectable({
  providedIn: 'root'
})
export class CgtConfigurationService implements OnDestroy {
  private readonly DEFAULT_FIELD_APPEARANCE = CgtFieldAppearance.OUTLINE;
  private readonly DEFAULT_DATE_FORMAT      = 'mediumDate';
  private readonly DEFAULT_NAME_FORMAT      = CgtNameFormat.ShortLastFirst;

  private readonly _config: CgtConfiguration;
  private readonly _subject: BehaviorSubject<CgtConfiguration>;

  constructor() {
    this._config = {
      fieldAppearance: this.DEFAULT_FIELD_APPEARANCE,
      dateFormat: this.DEFAULT_DATE_FORMAT,
      nameFormat: this.DEFAULT_NAME_FORMAT
    };

    this._subject = new BehaviorSubject(this._config);
  }

  public ngOnDestroy(): void {
    this._subject.complete();
  }

  /**
   * Retrieves the current configuration for the application.
   */
  public getConfiguration$(): Observable<CgtConfiguration> {
    return this._subject.asObservable();
  }

  /**
   * Changes the field appearance to the specified appearance. If 'undefined' or 'null' then it
   * will reset it back to the default of 'outline'.
   *
   * @param fieldAppearance
   *    The new appearance to use for fields.
   */
  public changeFieldAppearance(fieldAppearance: CgtFieldAppearance): void {
    this._config.fieldAppearance = (fieldAppearance ? fieldAppearance : this.DEFAULT_FIELD_APPEARANCE);
    this._subject.next(this._config);
  }

  /**
   * Changes the date format to the specified format. If 'undefined' or 'null' then it
   * will reset it back to the default of 'mediumDate'.
   *
   * @param dateFormat
   *    The new format to use for dates.
   */
  public changeDateFormat(dateFormat: string): void {
    this._config.dateFormat = (dateFormat ? dateFormat : this.DEFAULT_DATE_FORMAT);
    this._subject.next(this._config);
  }

  /**
   * Changes the name format to the specified format. If 'undefined' or 'null' then it
   * will reset it back to the default 'ShortLastFirst'.
   *
   * @param nameFormat
   *    The new format to use for names.
   */
  public changeNameFormat(nameFormat: CgtNameFormat) {
    this._config.nameFormat = (nameFormat ? nameFormat : this.DEFAULT_NAME_FORMAT);
    this._subject.next(this._config);
  }
}
