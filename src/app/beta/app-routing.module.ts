import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './../components/demo/demo.component';

const routes: Routes = [{
  path: '',
  component: DemoComponent,
  data: {
    breadcrumb: "A",
    data: { breadcrumbItem: { key: 'a', labelName: 'a' } }
  }
}, {
  path: 'b',
  component: DemoComponent,
  data: {
    breadcrumb: "B",
    data: { breadcrumbItem: { key: 'b', labelName: 'b' } }
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }