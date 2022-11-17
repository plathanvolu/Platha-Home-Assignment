import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { LoginComponent } from './authentication/login/login.component';
import { ADMIN_ROUTES } from './Routing/admin-routing';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: LayoutComponent, children: ADMIN_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
