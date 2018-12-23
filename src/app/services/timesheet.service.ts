import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

export interface Day {
  date: string;
  start: string;
  finish: string;
  breakTime: string;
  totalTime: string;
  address: string;
  client: string;
  supervisor: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  private enrollmentDoc: AngularFirestoreDocument;
  private enrollmentColl: AngularFirestoreCollection;

  constructor(private angularFirestore: AngularFirestore) { }

  public add(userId: string, data: Day): Promise<DocumentReference> {
    return this.angularFirestore.collection<Day>(`users/${userId}/timesheet`).add(data);
  }

  public getCollection$(userId: string, query?): Observable<Day[]> {

    return this.angularFirestore.collection<Day>(`users/${userId}/timesheet`).valueChanges();
  }
/*   public set(id: string, data: Enrollment): Promise<void> {
    return this.angularFirestore.doc<Enrollment>(`${this.path}/${id}`).set(data, { merge: true });
  }

  public update(id: string, data: any): Promise<void> {
    return this.angularFirestore.doc<Enrollment>(`${this.path}/${id}`).update(data);
  }
 */
}
