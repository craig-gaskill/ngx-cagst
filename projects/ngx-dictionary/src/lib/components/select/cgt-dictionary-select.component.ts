import {AfterViewInit, Component, Injector, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {Observable, of} from 'rxjs';

import {CgtDictionaryValueService} from '../../services/cgt-dictionary-value.service';
import {CgtDictionaryValue} from '../../models/cgt-dictionary-value';

@Component({
  selector: 'cgt-dictionary-select',
  templateUrl: './cgt-dictionary-select.component.html',
  styleUrls: ['./cgt-dictionary-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CgtDictionarySelectComponent,
      multi: true
    }
  ]
})
export class CgtDictionarySelectComponent implements ControlValueAccessor, AfterViewInit {
  private _value: string|number|CgtDictionaryValue;
  private _disabled = false;
  private _control: AbstractControl;

  @Input() public id: string;
  @Input() public name: string;
  @Input() public editing = false;
  @Input() public label: string;
  @Input() public helpText: string;
  @Input() public placeholder = 'Select one';
  @Input() public multiple = false;

  @Input() public dictionaryMeaning: string;
  @Input() public dictionaryValues: CgtDictionaryValue[];
  @Input() public noValue = '(none)';

  @Input() public required = false;
  @Input() public requiredErrorMessage = 'This field is required.';

  @Input() public get disabled(): boolean {
    return this._disabled;
  }

  public set disabled(isDisabled: boolean) {
    this._disabled = isDisabled;
  }

  constructor(private _dictionaryValueService: CgtDictionaryValueService,
              private _injector: Injector
  ) { }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  public ngAfterViewInit(): void {
    this._control = this._injector.get(NgControl).control;
  }

  public get invalid() {
    return !!(this._control && this._control.invalid && !this._disabled);
  }

  public get touched() {
    return !!(this._control && this._control.touched);
  }

  public hasError(errorCode: string) {
    return !!(this._control && this._control.hasError(errorCode));
  }

  public get value(): string|number|CgtDictionaryValue {
    return this._value;
  }

  public set value(val: string|number|CgtDictionaryValue) {
    this._value = val;
  }

  public get options$(): Observable<CgtDictionaryValue[]> {
    if (this.dictionaryValues) {
      return of(this.dictionaryValues);
    } else if (this.dictionaryMeaning) {
      return this._dictionaryValueService.getDictionaryValues(this.dictionaryMeaning);
    } else {
      return undefined;
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  public writeValue(obj: any): void {
  }
}
