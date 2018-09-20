import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { take, switchMap } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable()
export class AuthService {

  userDoc: AngularFirestoreDocument<User>;
  userCol: AngularFirestoreCollection<User>;
  authState: firebase.User = null;
  user$: Observable<User>;

  constructor(private authFirebase: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.userCol = this.afs.collection<User>('users');

    this.user$ = this.authFirebase.authState.pipe(switchMap(user => {

          if (user) {
            return this.userCol.doc<User>(user.uid).valueChanges();
          } else {
            return of(null);
          }
    }));
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  private socialSignIn(provider: firebase.auth.AuthProvider) {
    return this.authFirebase.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUser(credential.user);
        this.router.navigate(['/products/list']);
      })
      .catch(error => console.log(error));
  }

  public loginFacebook() {
    return this.socialSignIn(new firebase.auth.FacebookAuthProvider);
  }

  public updateUser(user) {

    const data = {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL
    };

    const doc = this.userCol.doc(user.uid).snapshotChanges().pipe(take(1));

    return doc.subscribe(snap => {
      return snap.payload.exists ? this.userCol.doc(user.uid).update(data) : this.userCol.doc(user.uid).set(data);
    });
  }

}
