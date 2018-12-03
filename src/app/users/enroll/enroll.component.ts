import { EnrollmentsService } from './../../services/enrollments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  @ViewChild('Address') placeAddress: GooglePlaceDirective;

  constructor(private formBuilder: FormBuilder, private enrollmentsService: EnrollmentsService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      otherName: [],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateAvailable: ['', Validators.required],
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.enrollmentsService.add(this.registerForm.value)
      .then((response) => {
        console.log(response);
        this.registerForm.reset();
      }).catch((error) => {
        console.log(error);
      });
  }

}
