import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-inscript',
  templateUrl: 'inscript.html'
})
export class InscriptPage {

  constructor(public navCtrl: NavController) {

  }

  validateInscript() {
    console.log('hello');
  }

}
