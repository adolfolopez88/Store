import { FormComponent } from './form/form.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule,
   MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AgmDirectionModule } from 'agm-direction';
import { environment } from './../../environments/environment.prod';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =  [
  { path: 'detail', component: DetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,

    FlexLayoutModule,
    GooglePlaceModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({ apiKey: environment.agmApiKey }),
    AgmDirectionModule,

    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    HttpClientModule
  ],
  declarations: [DetailComponent, FormComponent],
  providers: []
})
export class DispatchesModule { }
