import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InscriptPage } from '../inscript/inscript';
import { ConnexionPage } from '../connexion/connexion';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  private clickConnexion() {
    this.navCtrl.push(ConnexionPage);
  }

  private clickInscrip() {
    this.navCtrl.push(InscriptPage);
  }

}