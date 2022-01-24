import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children:[
      { path: 'table', component: TableComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
