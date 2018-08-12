import { FileStore } from './../models/support';
import { Injectable } from '@angular/core';


export interface Product {
  name: string;
  images: FileStore[];
  price: number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }
}
