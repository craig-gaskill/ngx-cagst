import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CgtConfirmationModule} from './confirmation/cgt-confirmation.module';
import {CgtInputModule} from './input/cgt-input.module';
import {CgtLabelModule} from './label/cgt-label.module';
import {CgtNotificationModule} from './notification/cgt-notification.module';
import {CgtSelectInfiniteScrollDirective} from './directives/cgt-select-infinite-scroll.directive';

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
    CgtSelectInfiniteScrollDirective
  ],
  exports: [
    CgtConfirmationModule,
    CgtInputModule,
    CgtLabelModule,
    CgtNotificationModule,
    CgtSelectInfiniteScrollDirective
  ]
})
export class CgtComponentsModule { }
