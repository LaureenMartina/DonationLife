import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InscriptPage } from '../pages/inscript/inscript';
import { InformPage } from '../pages/inform/inform';
import { LoginPage } from '../pages/login/login';

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
    ContactPage,
    HomePage,
    TabsPage,
    InscriptPage,
    InformPage,
    LoginPage
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
    ContactPage,
    HomePage,
    TabsPage,
    InscriptPage,
    InformPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthentificationService,
    CollectService,
    UserService,
    Config,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
