import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  constructor(public navCtrl: NavController, ) {
  
  }

  clickGPS() {
    //this.navCtrl.push(HomePage);
  }

}