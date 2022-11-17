import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { Reports2Component } from './reports2/reports2.component';
import { Reports3Component } from './reports3/reports3.component';
import { LayoutComponent } from './layout/layout.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReportsComponent,
    Reports2Component,
    Reports3Component,
    LayoutComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,

  ]
})
export class AdminModule { }
