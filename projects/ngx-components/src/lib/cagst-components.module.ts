import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CagstLabelModule} from './label/cagst-label.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CagstLabelModule
  ],
  declarations: [
  ],
  exports: [
    CagstLabelModule
  ]
})
export class CagstComponentsModule { }
