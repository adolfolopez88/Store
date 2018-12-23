import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import { MatProgressBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProgressbarService {

  private progressBar: MatProgressBar;

  constructor() { }

  public setProgressBar(progressBar:  MatProgressBar) {
    this.progressBar = progressBar;
    this.progressBar._elementRef.nativeElement.style.display = 'none';
  }

  public show() {
    this.progressBar._elementRef.nativeElement.style.display = 'block';
  }

  public hide() {
    this.progressBar._elementRef.nativeElement.style.display = 'none';
  }
}
