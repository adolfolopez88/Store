import { transition, trigger, animate, keyframes } from '@angular/animations';
import { ProgressbarService } from './../../core/shell/services/progressbar.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import * as kf from '../../models/keyframes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('avatarAnimation',  [
      transition('* => *', [
        animate(1000, keyframes(kf.ZoomIn))
      ])
    ])
  ]

})
export class ProfileComponent implements OnInit {

  user: any;
  path = '';

  constructor(private authService: AuthService, private progressBar: ProgressbarService) { }

  ngOnInit() {

    this.progressBar.show();
    this.authService.userSubjectG.subscribe((user) => {
      this.user = user;
      this.progressBar.hide();
    });
  }
}


