import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';

import {CgtInputComponent} from './cgt-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    CgtInputComponent
  ],
  exports: [
    CgtInputComponent
  ]
})
export class CgtInputModule { }
