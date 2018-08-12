import { Component, OnInit, AfterViewInit, Input, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as kf from '../../models/keyframes';


@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css'],
  animations: [  trigger('imagesAnimation', [
    transition('* => flash', animate(100, keyframes(kf.flash))),

  ])]
})
export class GalleryDetailComponent implements OnInit, AfterViewInit {

  animationState = '';
  imagesOpacity = 0;
  @Input() images = [];

  @ViewChildren('imagesGallery') imagesGallery: QueryList<any>;
  @ViewChild('imageDisplay') imageDisplay;

  ngOnInit() {
   // this.startAnimation('flash');
  }

  // after the view is initiali render
  ngAfterViewInit() {

  }

  public changeImage(event) {

    const target = event.target || event.srcElement || event.currentTarget;
    this.imageDisplay.nativeElement.src = target.src;
    this.startAnimation('flash');
    // console.log(target.src = );
    // this.image.native
    // this.imagesGallery.forEach(image => console.log(image.nativeElement.src));
    // Array.from(this.gallery.nativeElement.children).filter(element => console.log(element));
  }


  public startAnimation(state) {

    if (!this.animationState) {
       this.animationState = state;
    }
  }

  public resetAnimation() {
    if (this.animationState === 'flash') {
      this.imagesOpacity = 1;
    }
    this.animationState = '';
  }
}

