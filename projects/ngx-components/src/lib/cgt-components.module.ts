import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CgtLabelModule} from './label/cgt-label.module';
import {CgtInputModule} from './input/cgt-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CgtLabelModule,
    CgtInputModule
  ],
  declarations: [
  ],
  exports: [
    CgtLabelModule,
    CgtInputModule
  ]
})
export class CgtComponentsModule { }
