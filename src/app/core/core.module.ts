import { CompaniesService } from './../services/companies.service';
import { GadgetsModule } from './../gadgets/gadgets.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatIconModule, MatSidenavModule, MatExpansionModule, MatListModule, MatButtonModule,
  MatFormFieldModule, MatInputModule, MatToolbarModule, MatProgressBar, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { ShellComponent } from './shell/shell.component';
import { ToolbarComponent } from './shell/toolbar/toolbar.component';
import { SidenavContentComponent } from './shell/sidenav-content/sidenav-content.component';
import { DrawerHeadComponent } from './shell/drawer-head/drawer-head.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavService } from './shell/services/sidenav.service';
import { DisplayDirective } from './directives/display.directive';
import { CompaniesModule } from '../companies/companies.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    GadgetsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    CompaniesModule,
    AppRoutingModule
  ],
  declarations: [
    ShellComponent,
    ToolbarComponent,
    SidenavContentComponent,
    DrawerHeadComponent,
    LoginComponent,
    DisplayDirective
  ],
  exports: [
    ShellComponent,
    LoginComponent,
    DisplayDirective
  ],
  providers: [
    SidenavService, CompaniesService
  ]
})
export class CoreModule { }
