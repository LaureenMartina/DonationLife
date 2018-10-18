import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MapsPage } from '../maps/maps';


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
  tab5Root = MapsPage;
  //tab6Root = Logout;

  constructor() {

  }
  
}
