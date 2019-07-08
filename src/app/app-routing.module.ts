import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DemoConfirmationComponent} from './ngx-components/confirmation/demo-confirmation.component';
import {DemoInputComponent} from './ngx-components/input/demo-input.component';
import {DemoLabelComponent} from './ngx-components/label/demo-label.component';

const routes: Routes = [
  {
    path: 'components/confirmation',
    component: DemoConfirmationComponent
  },
  {
    path: 'components/input',
    component: DemoInputComponent
  },
  {
    path: 'components/label',
    component: DemoLabelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
