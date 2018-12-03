import { GeolocationService } from './../../services/geolocation.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChange } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import {  } from '@types/googlemaps'

export class Dispatch {
  customerId: number;
  charge: string;
  departureDate: Date;
  arriveDate: Date;
  origin: Address;
  destination: Address;
}
export class TravelDetail {
  distance: any;
  duration: any;
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
  directionsService = new google.maps.DirectionsService;
  distance = 0;

  mapLat: number | string;
  mapLng: number | string;
  mapZoom = 12;
  travelDetail = new TravelDetail;

  dispatch  = new Dispatch();
  dispatchForm: FormGroup  = new FormGroup({
    'customerId': new FormControl(this.dispatch.customerId, [Validators.required]),
    // 'charge': new FormControl(this.dispatch.charge, [Validators.required]),
    'departureDate': new FormControl(this.dispatch.departureDate, [Validators.required]),
    'arriveDate': new FormControl(this.dispatch.arriveDate, [Validators.required]),
    'origin': new FormControl(this.dispatch.origin, [Validators.required]),
    'destination': new FormControl(this.dispatch.destination, [Validators.required])
  });


  constructor(private customersService: CustomersService,
    private geolocation: GeolocationService)  {
      console.log(this.dispatchForm);
  }

  ngOnInit() {

    this.customersService.getCustomers().then(customers => {

      this.customers = Object.keys(customers).map(index => {
        return customers[index];
      });
    })
    .catch(error => console.log(error));

    this.geolocation.getLocation().subscribe((location) => {
      this.mapLat = location.latitude;
      this.mapLng = location.longitude;
    });
  }

  async createDispatch() {

    this.dispatch = this.dispatchForm.value;
    this.dispatch.origin = this.placesRefOrigin.place;
    this.dispatch.destination = this.placesRefDestination.place;

    await this.getTravelDetail().then((response) => {
      console.log(response);
      this.travelDetail.distance =  response.distance;
      this.travelDetail.duration =  response.duration;
    });

    this.mapLat = this.placesRefOrigin.place.geometry.location.lat();
    this.mapLng = this.placesRefOrigin.place.geometry.location.lng();

    this.origin = {
      lat: this.placesRefOrigin.place.geometry.location.lat(), lng : this.placesRefOrigin.place.geometry.location.lng() };
    this.destination = {
      lat: this.placesRefDestination.place.geometry.location.lat(), lng : this.placesRefDestination.place.geometry.location.lng() };
  }


  getTravelDetail(): Promise<any> {

    const request = {
      origin: this.dispatch.origin.formatted_address,
      destination: this.dispatch.destination.formatted_address,
      travelMode: google.maps.TravelMode.DRIVING
    };

    return new Promise((resolve, reject) => {

      this.directionsService.route(request, function(response, status) {
        if (status.toString() === 'OK') {
            resolve(response.routes[0].legs[0]);
        } else {
            reject('fail');
        }
      });
    });
  }

  get customerId() {
    return this.dispatchForm.get('customerId');
  }

  get charge() {
    return this.dispatchForm.get('charge');
  }

  getEnviroment() {
    this.customersService.getItems().subscribe(item => {
      console.log(item);
    });
  }
}
