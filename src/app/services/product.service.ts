import { FileStore } from './../models/support';
import { Injectable } from '@angular/core';
import { flame } from '../app.module';

export interface Image {
  url: string;
}

export interface Product {
  name: string;
  images: Image[];
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts() {
    return flame.content.get('products', { populate: [  {
        field: 'images',
        subFields: [ 'image' ]
      }
    ]
    });
  }

}


     /**


    flame.content.subscribe('products', function(error, blogPosts) {
      if (error) {
        return console.error('Something went wrong while retrieving all the content. Details:', error);
      }
      console.log('All the products:', blogPosts);
    }); */
