import { map } from 'rxjs/operators';
import { FirestoreGenericService } from './../../services/firestore-generic.service';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TimesheetService } from '../../services/timesheet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDay;

  dayForm = this.formBuilder.group({
    date: ['', Validators.required],
    start: ['', Validators.required],
    finish: ['', Validators.required],
    address: ['', Validators.required],
    // breakTime: ['', Validators.required],
    // totalTime: [''],
    client: ['', Validators.required ],
    supervisor: ['', Validators.required]
  });

  submitted = false;
  employers: Observable<any[]>;
  constructor(private formBuilder: FormBuilder, private fs: FirestoreGenericService,
    private timesheetService: TimesheetService, private authService: AuthService) { }

  ngOnInit() {
    this.employers = this.fs.getCollection$('employers')
    .snapshotChanges()
    .pipe(map(actions => {
      return actions.map(a => {
        return { id: a.payload.doc.id, data: a.payload.doc.data() };
      });
    }));
    /* .subscribe((employers) => {
      this.employers = employers;
    }); console.log();*/


  }

  public insertDay() {
    this.submitted = true;

    if (this.dayForm.invalid) {
      return;
    }

    this.submitted = false;

   /*  this.timesheetService.add(this.authService.currentUser.uid, this.dayForm.value)
      .then(() => {
        this.formDay.resetForm();
        console.log('timesheet added successfuly');
      }); */
  }

  get form() {
    return this.dayForm.controls;
  }
}
