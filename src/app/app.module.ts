import {BrowserModule} from '@angular/platform-browser';
import {LayoutModule} from '@angular/cdk/layout';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CgtConfigurationModule} from '@cagst/ngx-configuration';
import {CgtConfirmationModule, CgtInputModule, CgtLabelModule} from '@cagst/ngx-components';
import {CgtDictionaryModule} from '@cagst/ngx-dictionary';
import {CgtSelectModule} from '@cagst/ngx-components';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppMaterialModule} from './app-material.module';

import {DemoConfirmationComponent} from './ngx-components/confirmation/demo-confirmation.component';
import {DemoDictionarySelectComponent} from './ngx-dictionary/select/demo-dictionary-select.component';
import {DemoInputComponent} from './ngx-components/input/demo-input.component';
import {DemoLabelComponent} from './ngx-components/label/demo-label.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockBackendService} from './api/mock-backend.service';
import {DictionaryServiceConfig} from './config/dictionary-service.config';
import {DemoSelectComponent} from './ngx-components/select/demo-select.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockBackendService, {delay: 150, apiBase: '/'}),

    AppRoutingModule,
    AppMaterialModule,

    CgtConfigurationModule,
    CgtConfirmationModule,
    CgtDictionaryModule,
    CgtInputModule,
    CgtLabelModule,
    CgtSelectModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,

    DemoConfirmationComponent,
    DemoDictionarySelectComponent,
    DemoInputComponent,
    DemoLabelComponent,
    DemoSelectComponent
  ],
  providers: [
    {
      provide: 'CgtDictionaryServiceConfig',
      useClass: DictionaryServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
