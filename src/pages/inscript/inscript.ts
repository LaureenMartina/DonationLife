import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataResponse } from '../../dataHoldersService/DataResponse';
import { ErrorResponse } from '../../dataHoldersService/ErrorResponse';
import { AuthentificationService } from '../../services/DonationServices/AuthentificationService';
import { User } from '../../dataHoldersService/DonationData/user/User';
import { HomePage } from '../home/home';
import { Toast } from '@ionic-native/toast';

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
  // Data From Services
  data: DataResponse;
  error : ErrorResponse;

  constructor(public navCtrl: NavController, private authSrv: AuthentificationService, private toast: Toast) {
  
  }

  validateInscript() {
    var user =  new User();
    user.email = this.email;
    user.address = this.address;
    let current = new Date();
    user.age = current.getFullYear() - this.yearSelected;
    user.bloodType = this.groupBlood;
    user.firstname =this.firtsname;
    user.gender = this.gender;
    user.lastname = this.lastname;
    user.phone = this.phoneNumber;
    user.sexualOrientation = this.sexuelOrientation;
    user.password = this.password;
    if (user.address) {

    }
    this.authSrv.register(user)
        .then(fetched => {
          this.data = fetched;
          console.log(this.data);
          this.navCtrl.push(HomePage, {token: this.data.data.token});
        })
        .catch( error => {
          this.error = error;
          console.error(this.error);
          // this.toast.show(`Certain(s) champ(s) sont incorrecte(s)`, '5000', 'center').subscribe(
          //   toast => {
          //     console.log(toast);
          //   }
          // );
        });
  }

  backToHome() {
    this.navCtrl.push(LoginPage);
  }

}
