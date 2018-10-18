import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
//import { CalendarPage } from '../calendar/calendar';
//import { Geolocalisation } from '../geolocalisation/geolocalisation';
import { LocationPage } from '../location/location';
import { ProfilPage } from '../profil/profil';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  isSelected : false;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ProfilPage;
  tab4Root = LocationPage;
  //tab5Root = GeolocalisationPage;
  // tab6Root = LogoutPage;

  constructor() {

  }

  logout(){
    console.log("logout");
  }

}
