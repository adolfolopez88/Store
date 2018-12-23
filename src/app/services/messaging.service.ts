import { AngularFirestore } from 'angularfire2/firestore';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

export interface Message {

  title: string;
  body: string;
  to: string;
}
@Injectable()
export class MessagingService {

  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);
  user: firebase.User;

  constructor(private angularFirestore: AngularFirestore, private afAuth: AngularFireAuth) { }


  public updateToken(token) {
    this.afAuth.authState.pipe(take(1)).subscribe((user: firebase.User) => {
      if (!user) { return; }

      const data = { token: token };
      this.angularFirestore.collection('fcmTokens').doc(user.uid).set(data);
    });
  }

  public getPermission() {
    this.messaging.requestPermission()
    .then(() => {
      console.log('Notification permission granted.');
      return this.messaging.getToken();
    })
    .then(token => {
      console.log(token);
      this.updateToken(token);
    })
    .catch((err) => {
      console.log('Unable to get permission to notify.', err);
    });
  }

  public receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      this.currentMessage.next(payload);
    });
  }

  public pushMessage(message: Message) {
    return this.angularFirestore.collection('messages').add(message);
  }
}



/* curl https://fcm.googleapis.com/fcm/send \
-H"Content-Type: application/json" \
	-H"Authorization: key=AAAAZcrlGTc:APA91bH0I07rjtntC1E1uefP5z0wpZG1iPFasDtEcqvT3z1nPUdTxhURoyRMMFic03yZS29A80vmbVc2psmEUlvFXLQvHQDSpHMojmt4AQSSYToqR8ASmAEF9W0od-6nVfqb0Q6_l_9Q" \
-d '{ "notification": { "title": "Nueva Feature!", "body": "Hay nuevas features","icon":"", "click_action": "http://www.platzi.com"}, "to" : "de-y3GN0aX0:APA91bGm5eAtMG73uMKGREn-rJ7n0OUXRbKZSeddY6W8LdA3A9oSpWqVw4i-0d2eI9rVwtX7-au78MrrbAj9fzfcPOb97y5n0aVhMgm5-BGV41jAkGz6v2_lkYvEGmaHksg4KJLPXmgP"
}' */
