import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';

import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';

import {CgtSelectComponent} from './cgt-select.component';
import {CgtSelectDirective} from './cgt-select.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule
  ],
  declarations: [
    CgtSelectComponent,
    CgtSelectDirective
  ],
  exports: [
    CgtSelectComponent
  ]
})
export class CgtSelectModule { }
