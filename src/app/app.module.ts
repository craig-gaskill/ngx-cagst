import {BrowserModule} from '@angular/platform-browser';
import {LayoutModule} from '@angular/cdk/layout';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CgtConfigurationModule} from '@cagst/ngx-configuration';
import {CgtConfirmationModule, CgtInputModule, CgtLabelModule} from '@cagst/ngx-components';
import {CgtDictionaryModule} from '@cagst/ngx-dictionary';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppMaterialModule} from './app-material.module';

import {DemoConfirmationComponent} from './ngx-components/confirmation/demo-confirmation.component';
import {DemoDictionarySelectComponent} from './ngx-dictionary/select/demo-dictionary-select.component';
import {DemoInputComponent} from './ngx-components/input/demo-input.component';
import {DemoLabelComponent} from './ngx-components/label/demo-label.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,

    AppRoutingModule,
    AppMaterialModule,

    CgtConfigurationModule,
    CgtConfirmationModule,
    CgtDictionaryModule,
    CgtInputModule,
    CgtLabelModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,

    DemoConfirmationComponent,
    DemoDictionarySelectComponent,
    DemoInputComponent,
    DemoLabelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
