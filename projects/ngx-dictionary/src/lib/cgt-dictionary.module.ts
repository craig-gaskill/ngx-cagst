import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatSelectModule} from '@angular/material';

import {CgtDictionaryPipe} from './pipes/cgt-dictionary.pipe';
import {CgtDictionarySelectComponent} from './components/select/cgt-dictionary-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    CgtDictionaryPipe,
    CgtDictionarySelectComponent
  ],
  exports: [
    CgtDictionaryPipe,
    CgtDictionarySelectComponent
  ],
  providers: [
    CgtDictionaryPipe
  ]
})
export class CgtDictionaryModule { }
