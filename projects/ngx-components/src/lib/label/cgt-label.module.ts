import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTooltipModule} from '@angular/material';

import {CgtLabelComponent} from './cgt-label.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  declarations: [
    CgtLabelComponent
  ],
  exports: [
    CgtLabelComponent
  ]
})
export class CgtLabelModule { }
