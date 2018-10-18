import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {

  email : String;
  password : String;

  constructor(public navCtrl: NavController) {
  
  }

  validateConnexion() {
    console.log('hello');
  }

  backToHome() {
    this.navCtrl.push(HomePage);
  }

}
