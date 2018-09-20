import { MatButtonModule, MatFormField, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';


const routes: Routes =  [
  { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    AngularFireAuthModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    routing
  ],
  declarations: [ LoginComponent],
  providers: [AuthService, AngularFireAuth]
})
export class UsersModule { }
