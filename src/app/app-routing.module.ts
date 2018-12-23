import { LoginComponent } from './core/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ShellComponent } from './core/shell/shell.component';

const routes: Routes =  [
  { path: 'login', component: LoginComponent },
  { path: '', component: ShellComponent, children: [
    { path: '', redirectTo: '/companies/joblist', pathMatch: 'full'},
    { path: 'companies',  loadChildren: './companies/companies.module#CompaniesModule'},
    { path: 'users',  loadChildren: './users/users.module#UsersModule'},
    { path: 'gadgets', loadChildren: './gadgets/gadgets.module#GadgetsModule' },
    { path: 'timesheet', loadChildren: './timesheet/timesheet.module#TimesheetModule' }
  ], canActivate: [AuthGuardService]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    routing
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
