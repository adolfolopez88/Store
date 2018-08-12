import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  images = [
    { name: 'some image', downloadUrl: '../../../assets/building1.jpeg', extention: 'jpg' },
    { name: 'some image', downloadUrl: '../../../assets/building2.jpeg', extention: 'jpg' },
    { name: 'some image', downloadUrl: '../../../assets/building3.jpeg', extention: 'jpg' },
    { name: 'some image', downloadUrl: '../../../assets/building4.jpeg', extention: 'jpg' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
