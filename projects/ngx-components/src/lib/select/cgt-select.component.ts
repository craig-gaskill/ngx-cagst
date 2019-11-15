import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {ReplaySubject} from 'rxjs';
import {takeWhile} from 'rxjs/operators';

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
export class CgtSelectComponent implements ControlValueAccessor, OnInit, OnDestroy {
  private _control: NgControl;
  private _disabled = false;
  private _subscribed = true;
  private _values: any[] = [];
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
  @Input() public searchable = true;

  @Input() public required = false;
  @Input() public requiredErrorMessage = 'This field is required.';

  @Input() public get disabled(): boolean {
    return this._disabled;
  }

  public set disabled(isDisabled: boolean) {
    this._disabled = isDisabled;
  }

  @Input()
  public get options(): any[] {
    return this._values;
  }

  public set options(values: any[]) {
    this._values = values;
  }

  public searchControl = new FormControl();
  public searchOptions$ = new ReplaySubject<any[]>(1);

  constructor() { }

  public ngOnInit(): void {
    this.searchOptions$.next(this._values ? this._values.slice() : []);

    this.searchControl.valueChanges
      .pipe(takeWhile(() => this._subscribed))
      .subscribe(searchText => this.searchOptions(searchText));
  }

  public ngOnDestroy(): void {
    this._subscribed = false;
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

  private searchOptions(searchText: string): void {
    const values = this._values ? this._values.slice() : [];

    if (!searchText) {
      this.searchOptions$.next(values);
    } else {
      searchText = searchText.toLocaleLowerCase();
      this.searchOptions$.next(values.filter(val => val[this.displayField].toLocaleLowerCase().indexOf(searchText) > -1));
    }
  }
}
