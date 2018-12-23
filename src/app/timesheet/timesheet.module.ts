import { MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule,
  MatDatepickerModule, MatNativeDateModule, MatTableModule,
   MatExpansionModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayComponent } from './day/day.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TimesheetService } from '../services/timesheet.service';
import { SheetComponent } from './sheet/sheet.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

const routes: Routes =  [
  { path: 'day', component: DayComponent },
  { path: 'sheet', component: SheetComponent },
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
    MatTableModule,
    MatExpansionModule,
    NgxMaterialTimepickerModule.forRoot(),
    GooglePlaceModule,
    routing
  ],
  providers: [TimesheetService,  { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  declarations: [DayComponent, SheetComponent]
})
export class TimesheetModule { }
