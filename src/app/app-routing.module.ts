import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DemoLabelComponent} from './ngx-components/label/demo-label.component';
import {DemoInputComponent} from './ngx-components/input/demo-input.component';

const routes: Routes = [
  {
    path: 'components/label',
    component: DemoLabelComponent
  },
  {
    path: 'components/input',
    component: DemoInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
