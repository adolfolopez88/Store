import { Injectable } from '@angular/core';
import { flame } from '../app.module';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private db: AngularFirestore) { }


  public getCustomers() {
     return flame.content.get('customers');
  }

  public getEnviroment(): Promise<any> {
    return flame.settings.getGlobals();

  }

  getItems(): Observable<any[]> {

    return this.db.collection('fl_content').valueChanges();
  }
}

