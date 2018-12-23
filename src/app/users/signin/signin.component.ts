import { AuthService } from './../../services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { MustMatch } from '../../helpers/must-match.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signInForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.compose( [Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    confirmation: ['', Validators.required]
  }, {
    validator: MustMatch('password', 'confirmation')
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  get form() {
    return this.signInForm.controls;
  }

  createUser() {
    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
    }

    this.authService.createUser(this.signInForm.value.email, this.signInForm.value.password);

  }

}
