import { Product } from './../../services/product.service';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent implements OnInit, AfterViewInit {

  products: Product[] = [
    { name: 'detergente', images: [
      { name: 'some image', downloadUrl: '../../../assets/building1.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building2.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building3.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building4.jpeg', extention: 'jpg' }
    ] , price: 2000 },
    { name: 'detergente', images: [
      { name: 'some image', downloadUrl: '../../../assets/building1.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building2.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building3.jpeg', extention: 'jpg' },
    ] , price: 2000 },
    { name: 'detergente', images: [
      { name: 'some image', downloadUrl: '../../../assets/building1.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building2.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building3.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building4.jpeg', extention: 'jpg' }
    ] , price: 2000 },
    { name: 'detergente', images: [
      { name: 'some image', downloadUrl: '../../../assets/building1.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building2.jpeg', extention: 'jpg' },
      { name: 'some image', downloadUrl: '../../../assets/building3.jpeg', extention: 'jpg' },
    ] , price: 2000 }
  ];

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}
