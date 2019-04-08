import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTooltipModule} from '@angular/material';

import {CagstLabelComponent} from './cagst-label.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  declarations: [
    CagstLabelComponent
  ],
  exports: [
    CagstLabelComponent
  ]
})
export class CagstLabelModule { }
