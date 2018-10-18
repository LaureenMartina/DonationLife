import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-inscript',
  templateUrl: 'inscript.html'
})
export class InscriptPage {

  firtsname : String;
  lastname : String;
  email : String;
  password : String;
  confirmPassword : String;
  monthSelected : String;
  yearSelected : number;
  gender : String;
  phoneNumber : String;
  address : String;
  groupBlood: String;
  sexuelOrientation : String;

  // inject Years on view
  years : number[] = (new Array(80).fill(0).map((item, index) => new Date().getFullYear() - index).filter(year => new Date().getFullYear() - year >= 18));

  constructor(public navCtrl: NavController) {
  
  }

  validateInscript() {
    console.log('hello');
  }

  backToHome() {
    this.navCtrl.push(HomePage);
  }

}
