import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';

@Component({
  selector: 'cgt-select',
  templateUrl: './cgt-select.component.html',
  styleUrls: ['./cgt-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CgtSelectComponent,
      multi: true
    }
  ]
})
export class CgtSelectComponent implements ControlValueAccessor {
  private _control: NgControl;
  private _disabled = false;
  private _value: any;

  @Input() public id: string;
  @Input() public name: string;
  @Input() public editing = false;
  @Input() public label: string;
  @Input() public helpText: string;
  @Input() public placeholder = 'Select one';
  @Input() public multiple = false;
  @Input() public showNoneOption = true;
  @Input() public noneValue = '(none)';
  @Input() public displayField: string;
  @Input() public valueField: string;
  @Input() public disableField: string;
  @Input() public options: any[];

  @Input() public required = false;
  @Input() public requiredErrorMessage = 'This field is required.';

  @Input() public get disabled(): boolean {
    return this._disabled;
  }

  public set disabled(isDisabled: boolean) {
    this._disabled = isDisabled;
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  public get invalid() {
    return !!(this._control && this._control.invalid && !this._disabled);
  }

  public get touched() {
    return !!(this._control && this._control.touched);
  }

  public hasError(errorCode: string) {
    return !!(this._control && this._control.hasError(errorCode));
  }

  public get value(): any {
    return this._value;
  }

  public set value(val: any) {
    this._value = val;
    if (this.valueField) {
      this.onChange(this._value ? this._value[this.valueField] : undefined);
    } else {
      this.onChange(this._value);
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
    this._value = obj;
  }
}
