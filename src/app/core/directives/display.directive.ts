import { style } from '@angular/animations';
import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective implements OnChanges {

  @Input() show: boolean;
  constructor(private el: ElementRef) { }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
   /*  this.showOrHide(this.show); */
  }

  private showOrHide(show: boolean) {
    if (show) {
      this.el.nativeElement.style.display = 'block';
    } else {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
