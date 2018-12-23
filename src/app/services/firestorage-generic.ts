import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

export interface File {
  id: string;
  name: string;
  url: string;
  type: string;
  extension: string;
  size: number;
  created: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirestorageGenericService {


  constructor(private afs: AngularFirestore) { }


  public addRefFileToObject(docPath: string, file: File) {

    const doc = this.afs.doc(docPath);
    return doc.snapshotChanges()
      .pipe(take(1))
      .subscribe(snap => {

        if ( snap.payload.exists ) {

          snap.payload.data();
          doc.collection<any>('files').doc(file.id).set(file);

        }

      //return snap.payload.exists ? this.siteCol.doc(id).update(obj) : this.siteCol.doc(id).set(obj);
    });
  }


















 /*  public addRefFileToObject(refCol: string, key: string, file: File) {

    this.genericCol = this.afs.collection<any>(refCol);

    let obj = Object.assign({});
    const doc = this.genericCol.doc(key).snapshotChanges().pipe(take(1));

    return doc.subscribe(snap => {

      if ( snap.payload.exists ) {

        obj = snap.payload.data();
        const files: AngularFirestoreCollection<any> = this.genericCol.doc(key).collection<any>('files');
        files.doc(file.id).set(file);
        this.genericCol.doc(key).update(obj);
      }

      //return snap.payload.exists ? this.siteCol.doc(id).update(obj) : this.siteCol.doc(id).set(obj);
    });
  }

  public getDocumentFiles(refCol, key): Observable<any> {

    return this.afs.collection<any>(refCol).doc(key).collection<any>('files').snapshotChanges()
    .pipe(map(actions => {
      return actions.map(file => {
        return {
            id: file.payload.doc.data().id,
            name:  file.payload.doc.data().name,
            url: file.payload.doc.data().url,
            type: file.payload.doc.data().type,
            extension: file.payload.doc.data().extension,
            size:  file.payload.doc.data().size,
            created: file.payload.doc.data().created
        };
      });
    }));
  } */



}
