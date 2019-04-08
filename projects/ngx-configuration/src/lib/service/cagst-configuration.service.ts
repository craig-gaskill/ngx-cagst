import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {CagstConfiguration} from '../model/cagst-configuration.model';
import {CagstFieldAppearance} from '../model/cagst-field-appearance.enum';

@Injectable({
  providedIn: 'root'
})
export class CagstConfigurationService implements OnDestroy {
  private readonly DEFAULT_FIELD_APPEARANCE = CagstFieldAppearance.OUTLINE;
  private readonly DEFAULT_DATE_FORMAT      = 'mediumDate';

  private readonly _config: CagstConfiguration;
  private readonly _subject: BehaviorSubject<CagstConfiguration>;

  constructor() {
    this._config = {
      fieldAppearance: this.DEFAULT_FIELD_APPEARANCE,
      dateFormat: this.DEFAULT_DATE_FORMAT
    };

    this._subject = new BehaviorSubject(this._config);
  }

  public ngOnDestroy(): void {
    this._subject.complete();
  }

  /**
   * Retrieves the current configuration for the application.
   */
  public getConfiguration$(): Observable<CagstConfiguration> {
    return this._subject.asObservable();
  }

  /**
   * Changes the field appearance to the specified appearance. If 'undefined' or 'null' then it
   * will reset it back to the default of 'outline'.
   *
   * @param fieldAppearance
   *    The new appearance to use for fields.
   */
  public changeFieldAppearance(fieldAppearance: CagstFieldAppearance) {
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
  public changeDateFormat(dateFormat: string) {
    this._config.dateFormat = (dateFormat ? dateFormat : this.DEFAULT_DATE_FORMAT);
    this._subject.next(this._config);
  }
}
