import { MapsPage } from './../maps/maps';
import { CollectService } from './../../services/DonationServices/CollectsSerice';
import { DataHolder } from './../../dataHoldersService/DataHolder';
import { UserService } from './../../services/DonationServices/UserService';
import { Collect } from './../../dataHoldersService/DonationData/Collect/Collect';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  events: Collect[];
  myLocation: Collect;

  constructor(public navCtrl: NavController, private collectService: CollectService, public dataHolder: DataHolder) {
    this.collectService.near(this.dataHolder.token)
      .then(response => {
        console.log("okCollect", response);
        this.events = response.data.collects;
        console.log(this.events);
      })
      .catch(e => {
        console.log("error", e);
      });

      this.collectService.current(this.dataHolder.token)
      .then(response => {
        console.log("okCollect", response);
        this.myLocation = {
          latitude: response.latitude,
          longitude: response.longitude
        } as Collect;

        console.log(this.myLocation);
      })
      .catch(e => {
        console.log("error", e);
      });
  }

  searchGPS(event) {
    this.navCtrl.push(MapsPage, {event, myLocation: this.myLocation});
  }

}
