import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Toast } from '@ionic-native/toast';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InscriptPage } from '../pages/inscript/inscript';
import { InformModalPage } from '../pages/inform-modal/inform-modal';
import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ErrorModalPage } from '../pages/error-modal/error-modal';
import { LocationPage } from '../pages/location/location';
import { ProfilPage } from '../pages/profil/profil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

// Services
import { AuthentificationService } from '../services/DonationServices/AuthentificationService';
import { CollectService } from '../services/DonationServices/CollectsService';
import { UserService } from '../services/DonationServices/UserService';
import { HttpClientModule } from '@angular/common/http';
import { Config } from '../dataHoldersService/config';
import { DataService } from '../services/dataService';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    InscriptPage,
    ConnexionPage,
    InformModalPage,
    LoginPage,
    MapsPage,
    ErrorModalPage,
    LocationPage,
    ProfilPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    InscriptPage,
    ConnexionPage,
    InformModalPage,
    LoginPage,
    MapsPage,
    ErrorModalPage,
    LocationPage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AuthentificationService,
    CollectService,
    UserService,
    Config,
    DataService,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
