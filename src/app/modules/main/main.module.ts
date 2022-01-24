import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
// Material
// Common
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// Header
import { MatToolbarModule } from '@angular/material/toolbar'
// Sidenav
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
// Table
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

// Created
// Modules
import { SharedModule } from '../shared/shared.module';
// Components
import { MainComponent } from './components/main/main.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    MainComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FlexLayoutModule,

    // Material
    // Common
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    // Header
    MatToolbarModule,
    // Sidenav
    MatSidenavModule,
    MatListModule,    
    // Table
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    // Created
    SharedModule,
  ]
})
export class MainModule { }
