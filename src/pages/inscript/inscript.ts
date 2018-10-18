import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/DonationServices/UserService';
import { DataResponse } from '../../dataHoldersService/DataResponse';
import { ErrorResponse } from '../../dataHoldersService/ErrorResponse';
import { AuthentificationService } from '../../services/DonationServices/AuthentificationService';
import { User } from '../../dataHoldersService/DonationData/user/User';

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
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiI1YmM3YWNjNGU3NDAzMjRjMDQ3NzlkZmIiLCJpYXQiOjE1Mzk4NzE0NjYsImV4cCI6MTUzOTg3NTA2Nn0.RdPmUhnaCSatl_e2rUzgD87NmDwR0TmaW55iecvXlcQ";
    
  constructor(public navCtrl: NavController, private userSrv: AuthentificationService) {
  
  }

  validateInscript() {
    var user =  new User();
    user.email = "toto@gmail.com";
    user.password = "toto";

    this.userSrv.register(user)
        .then(fetched => {
          this.data = fetched;
          console.log(this.data);
        })
        .catch( error => this.error = this.error);
  }

}
