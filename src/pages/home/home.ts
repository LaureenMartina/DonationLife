import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { LoginPage } from '../login/login';
import { InformPage } from '../inform/inform';

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

  /*showDetails() {
    this.navCtrl.push(InformPage);
  }*/


  onPageDidEnter() {
    this.tabBarElement.style.display = "none";
  }

  /*showText() {
    let infoModal = this.modalCtrl.create(InformModal);
    infoModal.present();
  }*/
}

/*@Component({
  template: `
    <p>bla bla bla</p>
    <button ion-button clear id="b_back">Back</button>
  `
})
export class InformModal {

  constructor(params: NavParams) {
    console.log('UserId');
  }

  ionViewDidLoad() {
    console.log("I'm alive!");
  }
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }
}*/
