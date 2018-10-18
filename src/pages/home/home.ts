import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { LoginPage } from '../login/login';
import { InformPage } from '../inform/inform';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabBarElement: HTMLElement;

  constructor(public navCtrl: NavController, private statusBar: StatusBar) {
    this.tabBarElement = document.querySelector('ion-tabs');
  }

  becompeVolunteer() {
    this.navCtrl.push(LoginPage);
  }

  showDetails() {
    this.navCtrl.push(InformPage);
  }


  onPageDidEnter() {
    this.tabBarElement.style.display = "none";
  }
}
