import { AuthService } from './../../services/auth.service';
import { TimesheetService, Day } from './../../services/timesheet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  sheet: Day[];
  constructor(private timesheetService: TimesheetService, private authService: AuthService) { }

  ngOnInit() {

   /*  this.timesheetService.getCollection$(this.authService.currentUser.uid)
      .subscribe((sheet) => {
        this.sheet = sheet;
      }); */
  }

}
