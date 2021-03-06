import { DataHolder } from './../../dataHoldersService/DataHolder';
import { ErrorResponse } from './../../dataHoldersService/ErrorResponse';
import { DataResponse } from './../../dataHoldersService/DataResponse';
import { UserService } from './../../services/DonationServices/UserService';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  lastname: String;
  firstname: String;
  email: String;
  dataResponse: DataResponse; 
  errorResponse: ErrorResponse;
  
  constructor(public navCtrl: NavController, private userSrv: UserService, public dataHolder: DataHolder) {
  }

  deconnexion(){
      this.dataHolder.token = null;
      this.navCtrl.push(HomePage);
  }

  connexion(){
    if (this.dataHolder.token){
        this.userSrv.getCurrent(this.dataHolder.token)
        .then(response => {
          console.log(response);
          this.dataResponse = response;
          this.lastname = this.dataResponse.data.user.lastname;
          this.firstname = this.dataResponse.data.user.firstname;
          this.email = this.dataResponse.data.user.email;
          this.dataHolder.token = this.dataResponse.data.token;
        }).catch(e => {
          console.log(e);
          this.errorResponse = e;
        });
    } else {
      this.navCtrl.push(LoginPage);
    }
  }
}