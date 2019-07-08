import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule} from '@angular/material';

import {CgtUtilitiesModule} from '@cagst/ngx-utilities';

import {CgtConfirmationComponent} from './cgt-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,

    CgtUtilitiesModule
  ],
  declarations: [
    CgtConfirmationComponent
  ],
  entryComponents: [
    CgtConfirmationComponent
  ]
})
export class CgtConfirmationModule { }
