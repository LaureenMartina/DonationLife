import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-error-modal',
  templateUrl: 'error-modal.html'
})
export class ErrorModalPage {

  constructor(public navCtrl: NavController, public errors: String[]) {
    console.log(errors);
  }

}