import { DataHolder } from './../dataHoldersService/DataHolder';
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
import { ConnexionPage } from '../pages/connexion/connexion';
import { ErrorModalPage } from '../pages/error-modal/error-modal';
import { LocationPage } from '../pages/location/location';
import { ProfilPage } from '../pages/profil/profil';
import { CalendarComponent } from '../components/calendar/calendar';


import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Services
import { AuthentificationService } from '../services/DonationServices/AuthentificationService';
import { CollectService } from '../services/DonationServices/CollectsSerice';
import { UserService } from '../services/DonationServices/UserService';
import { HttpClientModule } from '@angular/common/http';
import { Config } from '../dataHoldersService/config';

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
    ErrorModalPage,
    LocationPage,
    ProfilPage,
    CalendarComponent
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
    ErrorModalPage,
    LocationPage,
    ProfilPage,
    CalendarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthentificationService,
    CollectService,
    UserService,
    Config,
    Toast,
    InAppBrowser,
    DataHolder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
