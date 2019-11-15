import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material';

import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';

import {CgtSelectComponent} from './cgt-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMatSelectSearchModule
  ],
  declarations: [
    CgtSelectComponent
  ],
  exports: [
    CgtSelectComponent
  ]
})
export class CgtSelectModule { }
