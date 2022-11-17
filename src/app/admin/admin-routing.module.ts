import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';
import { LayoutComponent } from './layout/layout.component';
import { ReportsComponent } from './reports/reports.component';
import { Reports2Component } from './reports2/reports2.component';
import { Reports3Component } from './reports3/reports3.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'reports2', component: Reports2Component },
  { path: 'reports3', component: Reports3Component },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
