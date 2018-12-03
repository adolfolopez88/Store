import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Enrollment {
  firstName: string;
  lastName: string;
  otherName: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  email: string;
  dateAvailable: string;
}


@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  private enrollmentDoc: AngularFirestoreDocument;
  private enrollmentColl: AngularFirestoreCollection;
  private path = 'anrollments';

  constructor(private angularFirestore: AngularFirestore) { }

  public add(data: Enrollment): Promise<DocumentReference> {
    return this.angularFirestore.collection<Enrollment>(this.path).add(data);
  }

  public set(id: string, data: Enrollment): Promise<void> {
    return this.angularFirestore.doc<Enrollment>(`${this.path}/${id}`).set(data);
  }

  public getCollection$(): Observable<Enrollment[]> {
    return this.angularFirestore.collection<Enrollment>(this.path).valueChanges();
  }
}
