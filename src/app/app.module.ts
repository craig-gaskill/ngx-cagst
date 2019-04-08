import {BrowserModule} from '@angular/platform-browser';
import {LayoutModule} from '@angular/cdk/layout';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppMaterialModule} from './app-material.module';

import {CagstLabelModule} from '../../projects/ngx-components/src/lib/label/cagst-label.module';
import {CagstInputModule} from '../../projects/ngx-components/src/lib/input/cagst-input.module';

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

    CagstLabelModule,
    CagstInputModule
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
