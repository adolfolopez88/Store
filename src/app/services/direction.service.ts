import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  } from '@types/googlemaps'




@Injectable({
  providedIn: 'root'
})
export class DirectionService {


  //public directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(private http: HttpClient) {

  }

}
