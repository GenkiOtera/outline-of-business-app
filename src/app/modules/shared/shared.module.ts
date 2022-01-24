import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
// Common
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
// Header
import { MatToolbarModule } from '@angular/material/toolbar'
// Sidenav
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'

// Components
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,

    // Material
    // Common
    MatIconModule,
    MatButtonModule,
    // Header
    MatToolbarModule,
    // Sidenav
    MatSidenavModule,
    MatListModule,    
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
