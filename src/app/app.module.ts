import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthGuardService } from './services/auth-guard.service';
import { MessagingService } from './services/messaging.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
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
import { AuthService } from './services/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
/*     DrawerHeadComponent */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    AngularFireModule.initializeApp(environment.firebase),
   /*  routing, */
    FlexLayoutModule,
    GooglePlaceModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({ apiKey: environment.agmApiKey }),
    AgmDirectionModule,
    CoreModule,

    AngularFirestoreModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,

    AppRoutingModule
  ],
  providers: [AuthService, AngularFireAuth, MessagingService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
