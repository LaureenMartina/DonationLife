import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { LogoutPage } from '../logout/logout';
//import { CalendarPage } from '../calendar/calendar';
//import { Geolocalisation } from '../geolocalisation/geolocalisation';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  isSelected : false;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  //tab3Root = CalendarPage;
  //tab4Root = GeolocalisationPage;
  tab5Root = LogoutPage;

  constructor() {

  }

}
