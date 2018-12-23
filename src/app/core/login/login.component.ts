import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  submitted = false;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
  }

  public login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value.email,  this.loginForm.value.password)
      .then(() => { console.log('login successful'); });
  }

  public loginFacebook() {
    this.authService.loginFacebook()
      .then(() => {
        this.router.navigate(['/users/profile']);
        console.log('login successful'); });
  }

  public logout() {
    this.authService.logout()
      .then(() => { console.log('logout successful'); });
  }

  get form() {
    return this.loginForm.controls;
  }
}
