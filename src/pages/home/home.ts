import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { LoginPage } from '../login/login';
import { InformModalPage } from '../inform-modal/inform-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabBarElement: HTMLElement;

  constructor(public navCtrl: NavController, private statusBar: StatusBar, public modalCtrl: ModalController) {
    this.tabBarElement = document.querySelector('ion-tabs');
  }

  becompeVolunteer() {
    this.navCtrl.push(LoginPage);
  }

  /*onPageDidEnter() {
    this.tabBarElement.style.display = "none";
  }*/

  showText(){
    let infoModal = this.modalCtrl.create(InformModalPage, { userId: 8675309 });
    infoModal.present();
  }
}