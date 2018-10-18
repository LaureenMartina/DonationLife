import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Toast} from '@ionic-native/toast';
import { HomePage } from '../home/home';
import { AuthentificationService } from '../../services/DonationServices/AuthentificationService';
import { DataResponse } from '../../dataHoldersService/DataResponse';
import { ErrorResponse } from '../../dataHoldersService/ErrorResponse';
import { User } from '../../dataHoldersService/DonationData/user/User';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {

  email : String;
  password : String;
  dataResponse : DataResponse;
  errorResponse : ErrorResponse;

  constructor(public navCtrl: NavController, private authSrv: AuthentificationService, private toast: Toast) {
  
  }

  validateConnexion() {

    var user = new User();
    user.password = this.password;
    user.email = this.email;

    this.authSrv.sign(user)
      .then( response => {
        this.dataResponse = response;
        this.navCtrl.push(HomePage, {token : this.dataResponse.data.token});
      })
      .catch( error => {
        this.errorResponse = error;
        this.toast.show(`Impossible de vous connecter`, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
  }

  backToHome() {
    this.navCtrl.push(HomePage);
  }

}
