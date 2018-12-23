import { AngularFirestore } from 'angularfire2/firestore';
import { MessagingService, Message} from './services/messaging.service';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { User } from './models/support';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User = null;
  message: any = {};
  constructor(public authService: AuthService,
    private swUpdate: SwUpdate, public messagingService: MessagingService, private afs: AngularFirestore) {

    /*
     this.authService.user.subscribe((user) => {
      if (user !== null) {
        this.user = user;
      }
    }); */

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

  public messageTest() {

    const message: Message = {title : 'pipi', body: 'caca', to: 'AaW3qqhaX3ZZ2NwvMGooK0xPMqR2' };
    this.messagingService.pushMessage(message);
  }
}
