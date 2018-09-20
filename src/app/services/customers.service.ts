import { Injectable } from '@angular/core';
import { flame } from '../app.module';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }


  public getCustomers() {
    return flame.content.get('customers');
  }

}
