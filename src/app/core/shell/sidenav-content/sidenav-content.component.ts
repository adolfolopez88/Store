import { trigger, transition, animate, keyframes } from '@angular/animations';
import { SpinnerService } from './../services/spinner.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatProgressBar, MatSpinner } from '@angular/material';
import { SidenavService } from '../services/sidenav.service';
import { ProgressbarService } from '../services/progressbar.service';
import * as kf from '../../../models/keyframes';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css'],
  animations: [
   /*  trigger('iconAnimation',  [
      transition('* => *', [
        animate(1000, keyframes(kf.ZoomIn))
      ])
    ]) */
  ]
})
export class SidenavContentComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('progressbar') public progressbar: MatProgressBar;
  @ViewChild('spinner') public spinner: MatSpinner;

  constructor(private sidenavService: SidenavService, private progressBarService: ProgressbarService,
    private authService: AuthService, private router: Router, private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
    this.progressBarService.setProgressBar(this.progressbar);
    this.spinnerService.setSpinner(this.spinner);
  }

  public logOut() {

    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
      console.log('logout successful');
    });
  }
}
