import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-inform',
  templateUrl: 'inform.html'
})
export class InformPage {

  constructor(public navCtrl: NavController) {

  }

  private backToHome() {
    this.navCtrl.push(HomePage);
  }

}