import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CgtConfirmationModule} from './confirmation/cgt-confirmation.module';
import {CgtInputModule} from './input/cgt-input.module';
import {CgtLabelModule} from './label/cgt-label.module';
import {CgtNotificationModule} from './notification/cgt-notification.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CgtConfirmationModule,
    CgtInputModule,
    CgtLabelModule,
    CgtNotificationModule
  ],
  declarations: [
  ],
  exports: [
    CgtConfirmationModule,
    CgtInputModule,
    CgtLabelModule,
    CgtNotificationModule
  ]
})
export class CgtComponentsModule { }
