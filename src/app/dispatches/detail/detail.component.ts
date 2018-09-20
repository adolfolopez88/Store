import { GeolocationService } from './../../services/geolocation.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { CustomersModule } from './../../customers/customers.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

export interface Dispatch {
  customerId: number;

}

export interface LatLng {
  lat: number | string;
  lng: number | string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  customers: any[];
  @ViewChild('placesRefOrigin') placesRefOrigin: GooglePlaceDirective;
  @ViewChild('placesRefDestination') placesRefDestination: GooglePlaceDirective;

  origin: LatLng = { lat: 0, lng : 0 };
  destination: LatLng = { lat: 0, lng : 0 };
  mapLat: number | string;
  mapLng: number | string;
  mapZoom = 12;

  constructor(private customersService: CustomersService, private geolocation: GeolocationService)  {
  }

  ngOnInit() {

    this.customersService.getCustomers().then(customers => {
      this.customers = Object.keys(customers).map(productIndex => {
        return customers[productIndex];
      });
    })
    .catch(error => console.log(error));

    this.geolocation.getLocation().subscribe((location) => {
      this.mapLat = location.latitude;
      this.mapLng = location.longitude;
    });

  }

  public createDispatch() {

    this.mapLat = this.placesRefOrigin.place.geometry.location.lat();
    this.mapLng = this.placesRefOrigin.place.geometry.location.lng();

    this.origin = {
      lat: this.placesRefOrigin.place.geometry.location.lat(), lng : this.placesRefOrigin.place.geometry.location.lng() };
    this.destination = {
      lat: this.placesRefDestination.place.geometry.location.lat(), lng : this.placesRefDestination.place.geometry.location.lng() };
  }

}
