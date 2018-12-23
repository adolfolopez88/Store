import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {  first } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';
import { User } from '../models/support';

@Injectable()
export class AuthService {

  public currentUser: Observable<any>;
  authState: Observable<firebase.User>;
  userSubject = new ReplaySubject();

  constructor(public authFirebase: AngularFireAuth, private afs: AngularFirestore) {
    this.authState = this.authFirebase.authState;
  }

  get userSubjectG(): Observable<any> {
    return this.userSubject;
  }

  setCurrentUser(user: any) {
    this.userSubject.next(user);
    this.currentUser = of(user);
  }

  private socialSignIn(provider: firebase.auth.AuthProvider) {
    return this.authFirebase.auth.signInWithPopup(provider)
      .then((credential) => {
        this.createAndUpdateUser(credential.user);
      });
  }

  public login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.authFirebase.auth.signInWithEmailAndPassword(email, password);
  }

  public loginFacebook() {
    return this.socialSignIn(new firebase.auth.FacebookAuthProvider);
  }

  private createAndUpdateUser(user) {

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      photoUrl: user.photoURL,
      roles: ['user']
    };

    return  userRef.set(data, { merge: true });
  }

  public createUser(email: string, password: string ) {
    this.authFirebase.auth.createUserWithEmailAndPassword(email, password)
      .then((user: firebase.auth.UserCredential) => { this.createAndUpdateUser(user.user); });
  }

  public logout(): Promise<void> {
    return this.authFirebase.auth.signOut();
  }

  currentUserAsP(): Promise<firebase.User> {
    return this.authFirebase.authState.pipe(first()).toPromise();
  }

  public getUser(uid: string): Observable<any>  {
    return this.afs.doc(`users/${uid}`).valueChanges();
  }
}
