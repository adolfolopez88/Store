import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormField, MatFormFieldModule,
   MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { EnrollComponent } from './enroll/enroll.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';


const routes: Routes =  [
  { path: 'login', component: LoginComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: 'enrollments', component: EnrollmentsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    AngularFireAuthModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    GooglePlaceModule,

    routing
  ],
  declarations: [ EnrollComponent, EnrollmentsComponent, LoginComponent],
  providers: [AuthService, AngularFireAuth]
})
export class UsersModule { }
