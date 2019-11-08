import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material';

import {CgtSelectComponent} from './cgt-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  declarations: [
    CgtSelectComponent
  ],
  exports: [
    CgtSelectComponent
  ]
})
export class CgtSelectModule { }
