import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-inform-modal',
  templateUrl: 'inform-modal.html'
})
export class InformModalPage {

  constructor(public navCtrl: NavController) {

  }

  private backToHome() {
    this.navCtrl.push(HomePage);
  }


}