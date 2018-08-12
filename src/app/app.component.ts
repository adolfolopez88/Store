import { Component, ViewChild, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { GeolocationService } from './services/geolocation.service';

export interface LatLng {
  lat: number | string;
  lng: number | string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  update = false;

  @ViewChild('placesRefOrigin') placesRefOrigin: GooglePlaceDirective;
  @ViewChild('placesRefDestination') placesRefDestination: GooglePlaceDirective;

  origin: LatLng = { lat: 0, lng : 0 };
  destination: LatLng = { lat: 0, lng : 0 };
  mapLat: number | string;
  mapLng: number | string;
  mapZoom = 12;

  constructor(private updates: SwUpdate, private geolocation: GeolocationService ) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  public ngOnInit() {
    this.geolocation.getLocation().subscribe((location) => {
      this.mapLat = location.latitude;
      this.mapLng = location.longitude;
    });
  }

  public findTheWay() {

    this.mapLat = this.placesRefOrigin.place.geometry.location.lat();
    this.mapLng = this.placesRefOrigin.place.geometry.location.lng();

    this.origin = {
      lat: this.placesRefOrigin.place.geometry.location.lat(), lng : this.placesRefOrigin.place.geometry.location.lng() };
    this.destination = {
      lat: this.placesRefDestination.place.geometry.location.lat(), lng : this.placesRefDestination.place.geometry.location.lng() };

    console.log(this.placesRefDestination.place);
  }

}
