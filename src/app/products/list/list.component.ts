import { Product, ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent implements OnInit, AfterViewInit {

  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then(products => {
      this.products = Object.keys(products).map(productIndex => {
         return products[productIndex];
       });
     })
     .catch(error => console.log(error));
  }

  ngAfterViewInit() {

  }
}
