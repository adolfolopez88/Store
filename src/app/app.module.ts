import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { MatToolbarModule, MatInputModule, MatFormFieldModule,
  MatButtonModule, MatListModule, MatSidenavModule, MatExpansionModule, MatIconModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';


const routes: Routes =  [
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: 'gadgets', loadChildren: './gadgets/gadgets.module#GadgetsModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,

    routing,

    FlexLayoutModule,
    GooglePlaceModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({ apiKey: environment.agmApiKey }),
    AgmDirectionModule,

    AngularFireModule.initializeApp(environment.firebase),

    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
