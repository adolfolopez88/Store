import { GadgetsModule } from './../gadgets/gadgets.module';
import { AgmDirectionModule } from 'agm-direction';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatInputModule,
  MatFormFieldModule, MatSelectModule, MatDatepickerModule,
  MatNativeDateModule, MatTableModule, MatListModule, MatIconModule,
  MatTabsModule, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MatAutocompleteModule,
  MatProgressBarModule, MatCardModule, MatExpansionModule } from '@angular/material';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { JobComponent } from './job/job.component';
import { UserListComponent } from './user-list/user-list.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';
import { JobDetailComponent } from './job-detail/job-detail.component';

const routes: Routes =  [
  { path: 'jobdetail/:companyId/:jobId', component: JobDetailComponent },
  { path: 'form', component: FormComponent },
  { path: 'job', component: JobComponent },
  { path: 'joblist', component: JobsListComponent },
  { path: 'company', component: UserListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    GooglePlaceModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({ apiKey: environment.agmApiKey }),
    AgmDirectionModule,
    GadgetsModule,
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
    MatAutocompleteModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatCardModule,

    routing,
  ],
  exports: [ JobsListComponent ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  declarations: [FormComponent, JobComponent, UserListComponent, JobsListComponent, JobDetailComponent]
})
export class CompaniesModule { }

