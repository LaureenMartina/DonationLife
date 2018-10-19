import { Component } from '@angular/core';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { NavController } from 'ionic-angular';
import { DataHolder } from '../../dataHoldersService/DataHolder';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})

export class CalendarComponent {


  text: string;
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;

  constructor(private theInAppBrowser: InAppBrowser, private navCtrl: NavController, public dataHolder: DataHolder) {
    if (!this.dataHolder.token) {
      this.navCtrl.push(LoginPage);
    }
    console.log('Hello CalendarComponent Component');
    this.text = 'Hello World';
  }

  public openWithSystemBrowser(url: string) {
    let target = "_system";
    this.theInAppBrowser.create(url, target, this.options);
  }

}