import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { AlternateComponent } from './alternate/alternate.component';
import { AddCategory } from '../Admin/Category/AddCategory/AddCategory.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Default'
        }
      },
      {
        path: 'alternate',
        component: AlternateComponent,
        data: {
          title: 'Alternate'
        }
      },
      ,
      {
        path: 'AddCategory',
        component: AddCategory,
        data: {
          title: 'AddCategory'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
