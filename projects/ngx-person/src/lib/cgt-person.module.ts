import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {CgtPersonFormatterPipe} from './pipes/cgt-person-formatter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CgtPersonFormatterPipe
  ],
  exports: [
    CgtPersonFormatterPipe
  ],
  providers: [
    CgtPersonFormatterPipe
  ]
})
export class CgtPersonModule { }
