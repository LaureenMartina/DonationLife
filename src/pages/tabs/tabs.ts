import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { LocationPage } from '../location/location';
import { ProfilPage } from '../profil/profil';
import { CalendarComponent } from '../../components/calendar/calendar';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  isSelected : false;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ProfilPage;
  tab4Root = CalendarComponent;
  tab5Root = LocationPage;

  constructor() {

  }
  
}
