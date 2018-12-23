import { CompaniesModule } from './../companies/companies.module';
import { GadgetsModule } from './../gadgets/gadgets.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormField, MatFormFieldModule,
   MatInputModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, MatTableModule, MatListModule, MatIconModule, MatTabsModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { EnrollComponent } from './enroll/enroll.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes =  [
  /* { path: 'login', component: LoginComponent }, */
  { path: 'profile', component: ProfileComponent},
  { path: 'enroll', component: EnrollComponent },
  { path: 'enrollments', component: EnrollmentsComponent },
  { path: 'signin', component: SigninComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    CompaniesModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
    GadgetsModule,
    GooglePlaceModule,
    routing
  ],
  declarations: [ EnrollComponent, EnrollmentsComponent,
 /*    LoginComponent,  */
    SigninComponent, ProfileComponent],
  providers: [AngularFireAuth]
})
export class UsersModule { }
