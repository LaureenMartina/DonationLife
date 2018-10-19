import { DataHolder } from './../../dataHoldersService/DataHolder';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { Toast} from '@ionic-native/toast';
import { HomePage } from '../home/home';
import { AuthentificationService } from '../../services/DonationServices/AuthentificationService';
import { DataResponse } from '../../dataHoldersService/DataResponse';
import { ErrorResponse } from '../../dataHoldersService/ErrorResponse';
import { User } from '../../dataHoldersService/DonationData/user/User';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {

  email : String;
  password : String;
  dataResponse : DataResponse;
  errorResponse : ErrorResponse;

  constructor(public navCtrl: NavController, private authSrv: AuthentificationService, private alertCtrl: AlertController, public dataHolder: DataHolder) {
    if (this.dataHolder.token){
      this.navCtrl.push(ProfilPage);
    }
  }

  validateConnexion() {

    var user = new User();
    user.password = this.password;
    user.email = this.email;
    console.log(user);
    this.authSrv.sign(user)
      .then( response => {
        console.log(user.email);
        this.dataResponse = response;
        this.navCtrl.push(HomePage);
        this.dataHolder.token = this.dataResponse.data.token;
        console.log(this.dataHolder);
      })
      .catch( error => {
        this.errorResponse = error;
        this.presentAlert();
      });
  }

  backToHome() {
    this.navCtrl.push(LoginPage);
  }

  private presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mauvaise saisie',
      subTitle: 'Email ou mot de passe incorrect',
      buttons: ['OK']
    });
    alert.present();
  }

}
