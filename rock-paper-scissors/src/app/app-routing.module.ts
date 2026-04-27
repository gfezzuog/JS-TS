import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutingTestComponent} from './routing-test/routing-test.component'

const routes: Routes = [
  {
    path: 'pefforza/:val',
    component: RoutingTestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
