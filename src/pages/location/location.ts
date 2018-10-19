import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataHolder } from '../../dataHoldersService/DataHolder';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  constructor(public navCtrl: NavController, public dataHolder: DataHolder) {
    if (!this.dataHolder.token){
      this.navCtrl.push(LoginPage);
    }
  }

  searchGPS() {
    //this.navCtrl.push(HomePage);
  }

}
