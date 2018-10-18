import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InscriptPage } from '../pages/inscript/inscript';
import { InformModalPage } from '../pages/inform-modal/inform-modal';
import { LoginPage } from '../pages/login/login';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ErrorModalPage } from '../pages/error-modal/error-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ErrorModalPage
  ],
  imports: [
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
    ErrorModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
