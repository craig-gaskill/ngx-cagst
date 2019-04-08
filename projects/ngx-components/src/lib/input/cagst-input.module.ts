import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';

import {CagstInputComponent} from './cagst-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    CagstInputComponent
  ],
  exports: [
    CagstInputComponent
  ]
})
export class CagstInputModule { }
