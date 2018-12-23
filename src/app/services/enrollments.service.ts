import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Enrollment {
  uid: string;
  firstName: string;
  lastName: string;
  otherName: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  email: string;
  dateAvailable: string;
  photoUrl?: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  private enrollmentDoc: AngularFirestoreDocument;
  private enrollmentColl: AngularFirestoreCollection;
  private path = 'users';

  constructor(private angularFirestore: AngularFirestore) { }

  public add(data: Enrollment): Promise<DocumentReference> {
    return this.angularFirestore.collection<Enrollment>(this.path).add(data);
  }

  public set(id: string, data: Enrollment): Promise<void> {
    return this.angularFirestore.doc<Enrollment>(`${this.path}/${id}`).set(data, { merge: true });
  }

  public update(id: string, data: any): Promise<void> {
    return this.angularFirestore.doc<Enrollment>(`${this.path}/${id}`).update(data);
  }

  public getCollection$(query?): Observable<Enrollment[]> {

    const colEnrRef =
      query ? this.angularFirestore.collection<Enrollment>(this.path, query) : this.angularFirestore.collection<Enrollment>(this.path);
    return colEnrRef.valueChanges();
  }
}
