import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreGenericService {

  private doc: AngularFirestoreDocument;
  private Coll: AngularFirestoreCollection;

  constructor(private angularFirestore: AngularFirestore) { }

  public add(path: string, data: any): Promise<DocumentReference> {
    return this.angularFirestore.collection<any>(path).add(data);
  }

  public addWithId(path: string, data: any): Promise<void>  {
    data.id = this.angularFirestore.createId();
    return this.angularFirestore.doc<any>(`${path}/${data.id}`).set(data);
  }

  public set(path: string, id: string, data: any): Promise<void> {
    return this.angularFirestore.doc<any>(`${path}/${id}`).set(data, { merge: true });
  }

  public update(path: string, id: string, data: any): Promise<void> {
    return this.angularFirestore.doc<any>(`${path}/${id}`).update(data);
  }

  public getDoc(path: string, id: string): Promise<any> {
    return this.angularFirestore.doc<any>(`${path}/${id}`).valueChanges().pipe(first()).toPromise();
  }

  public getCollection$(path: string, query?): AngularFirestoreCollection {

    const colEnrRef =
      query ? this.angularFirestore.collection<any>(path, query) : this.angularFirestore.collection<any>(path);
    return colEnrRef;
  }
}
