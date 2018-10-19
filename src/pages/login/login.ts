import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InscriptPage } from '../inscript/inscript';
import { ConnexionPage } from '../connexion/connexion';
import { DataHolder } from '../../dataHoldersService/DataHolder';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public dataHolder: DataHolder) {
    if (this.dataHolder.token) {
      this.navCtrl.push(HomePage);
    }
  }

  private clickConnexion() {
    this.navCtrl.push(ConnexionPage);
  }

  private clickInscrip() {
    this.navCtrl.push(InscriptPage);
  }

}