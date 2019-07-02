import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CgtSanitizePipe} from './pipe/cgt-sanitize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CgtSanitizePipe
  ],
  exports: [
    CgtSanitizePipe
  ],
  providers: [
    CgtSanitizePipe
  ]
})
export class CgtUtilitiesModule { }
