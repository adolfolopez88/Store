import { map, tap } from 'rxjs/operators';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, ReplaySubject, of,  combineLatest} from 'rxjs';
import { FirestoreGenericService } from './firestore-generic.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  path = 'companies';
  $company: Observable<any>;
  subjectCompany = new ReplaySubject<any>();
  $jobs: Observable<any>;
  constructor(private fs: FirestoreGenericService, private angularFirestore: AngularFirestore) { }

  retriveCompany(companyId: string): Observable<any> {
    const docRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`${this.path}/${companyId}`);
    const collRef = docRef.collection('members');

    return combineLatest<any[]>(docRef.valueChanges(), collRef.valueChanges()).pipe(
      map(arr => {
         return { company: arr[0], members: arr[1] };
      })
    );
  }

  setCompany(company) {
    this.subjectCompany.next(company);
    this.$company = of(company);
  }

  retrieveJobs(companyId: string): Observable<any> {
    this.$jobs = this.fs.getCollection$(`${this.path}/${companyId}/jobs`).valueChanges();
    return this.$jobs;
  }

  getJob(companyId: string, jobId: string): Observable<any> {
    return this.angularFirestore.doc(`${this.path}/${companyId}/jobs/${jobId}`).valueChanges();
  }

  addMember(companyId: string, jobId: string, data: any): Promise<any> {
    return this.fs.set(`${this.path}/${companyId}/jobs/${jobId}`, '', data);
  }

}
