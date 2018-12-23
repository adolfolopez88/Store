import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer-head',
  templateUrl: './drawer-head.component.html',
  styleUrls: ['./drawer-head.component.css']
})
export class DrawerHeadComponent implements OnInit {

  user: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userSubject.subscribe((user) => this.user = user);
  }
}

