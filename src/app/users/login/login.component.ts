import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {

  }

  login() {
    // this.authService.Login(this.user.email,  this.user.password);
  }

  loginFacebook() {
    this.authService.loginFacebook();
  }
}
