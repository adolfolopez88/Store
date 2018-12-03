import { MessagingService } from './services/messaging.service';
import { AuthService, User } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User = null;
  message: any = {};
  constructor(private authService: AuthService, private swUpdate: SwUpdate, public messagingService: MessagingService) {

    this.authService.user$.subscribe((user) => {
      if (user !== null) {
        this.user = user;
      }
    });

    this.messagingService.getPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

  public ngOnInit(): void {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        window.location.reload();
      });
    }

  }
}



