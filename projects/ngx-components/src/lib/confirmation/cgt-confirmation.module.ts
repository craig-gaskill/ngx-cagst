import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule} from '@angular/material';

import {CgtConfirmationComponent} from './cgt-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    CgtConfirmationComponent
  ],
  entryComponents: [
    CgtConfirmationComponent
  ]
})
export class CgtConfirmationModule { }
