import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CgtConfirmationModule} from './confirmation/cgt-confirmation.module';
import {CgtInputModule} from './input/cgt-input.module';
import {CgtLabelModule} from './label/cgt-label.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CgtConfirmationModule,
    CgtInputModule,
    CgtLabelModule
  ],
  declarations: [
  ],
  exports: [
    CgtConfirmationModule,
    CgtInputModule,
    CgtLabelModule
  ]
})
export class CgtComponentsModule { }
