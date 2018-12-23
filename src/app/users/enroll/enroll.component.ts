import { AuthService } from './../../services/auth.service';
import { EnrollmentsService } from './../../services/enrollments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

interface EnrollUserData {
  firstName?: string;
  lastName?: string;
  otherName?: string;
  dateOfBirth?: string;
  address?: string;
  phone?: string;
  email?: string;
  dateAvailable?: string;
}

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit, OnChanges {

  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    otherName: [],
    dateOfBirth: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dateAvailable: ['', Validators.required],
    active: false
  });
  submitted = false;
  @ViewChild('Address') placeAddress: GooglePlaceDirective;
  @Input('enrollUserData') enrollUserData: EnrollUserData;

  constructor(private formBuilder: FormBuilder, private enrollmentsService: EnrollmentsService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.enrollUserData.currentValue !== undefined) {

      const enroll = changes.enrollUserData.currentValue;

      this.registerForm.get('firstName').setValue(enroll.firstName);
      this.registerForm.get('lastName').setValue(enroll.lastName);
      this.registerForm.get('otherName').setValue(enroll.otherName);
      this.registerForm.get('email').setValue(enroll.email);
      /* this.registerForm.get('firstName').setValue(enroll.firstName);
      this.registerForm.get('firstName').setValue(enroll.firstName);
      this.registerForm.get('firstName').setValue(enroll.firstName);*/
    }
  }

  get form() {
    return this.registerForm.controls;
  }

  public register() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.submitted = false;

  /*   this.enrollmentsService.set(this.authService.currentUser.uid, this.registerForm.value)
      .then((response) => {
        console.log(response);
        this.registerForm.reset();
      }).catch((error) => {
        console.log(error);
      }); */
  }
}
