import {AfterViewInit, Component, forwardRef, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {ThemePalette} from '@angular/material';
import {Observable} from 'rxjs';

import {CgtConfiguration, CgtConfigurationService} from '@cagst/ngx-configuration';

@Component({
  selector: 'cgt-input',
  templateUrl: './cgt-input.component.html',
  styleUrls: ['./cgt-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CgtInputComponent),
      multi: true
    }
  ]
})
export class CgtInputComponent implements OnInit, OnDestroy, ControlValueAccessor, AfterViewInit {
  private _value: string;
  private _control: AbstractControl;

  private _subscribed = false;

  @Input() public id: string;
  @Input() public name: string;
  @Input() public label: string;
  @Input() public type = 'text';
  @Input() public disabled = false;
  @Input() public editing = false;
  @Input() public maxlength: number;
  @Input() public autocomplete = true;
  @Input() public autofocus = false;
  @Input() public color: ThemePalette;
  @Input() public hintLabelLeft: string;
  @Input() public hintLabelRight: string;

  @Input() public minlength: number;
  @Input() public minlengthErrorMessage: string;

  @Input() public required = false;
  @Input() public requiredErrorMessage = 'This field is required.';

  public configuration$: Observable<CgtConfiguration>;

  constructor(private _injector: Injector, private _configService: CgtConfigurationService) { }

  public onChange = (val: any) => {};
  public onTouched = () => {};

  public get invalid() {
    return !!(this._control && this._control.invalid && !this.disabled);
  }

  public get touched() {
    return !!(this._control && this._control.touched);
  }

  public get value(): string {
    return this._value;
  }

  public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  public ngOnInit(): void {
    this.configuration$ = this._configService.getConfiguration$();
  }

  public ngOnDestroy(): void {
    this._subscribed = false;
  }

  public ngAfterViewInit(): void {
    this._control = this._injector.get(NgControl).control;
  }

  public hasError(errorCode: string) {
    return !!(this._control && this._control.hasError(errorCode));
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(val: string): void {
    this._value = val;
  }
}
