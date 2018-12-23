import { Injectable } from '@angular/core';
import { MatSpinner } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinner: MatSpinner;
  constructor() { }

  setSpinner(spinner: MatSpinner) {
    this.spinner = spinner;
    this.spinner._elementRef.nativeElement.style.display = 'none';
  }

  public show() {
    this.spinner._elementRef.nativeElement.style.display = 'block';
  }

  public hide() {
    this.spinner._elementRef.nativeElement.style.display = 'none';
  }
}
