import {BrowserModule} from '@angular/platform-browser';
import {LayoutModule} from '@angular/cdk/layout';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppMaterialModule} from './app-material.module';

import {CgtLabelModule} from '../../projects/ngx-components/src/lib/label/cgt-label.module';
import {CgtInputModule} from '../../projects/ngx-components/src/lib/input/cgt-input.module';

import {DemoLabelComponent} from './ngx-components/label/demo-label.component';
import {DemoInputComponent} from './ngx-components/input/demo-input.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,

    AppRoutingModule,
    AppMaterialModule,

    CgtLabelModule,
    CgtInputModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,

    DemoLabelComponent,
    DemoInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
