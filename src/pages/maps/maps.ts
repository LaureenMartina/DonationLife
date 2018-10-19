import { Collect } from './../../dataHoldersService/DonationData/Collect/Collect';
import { CollectService } from './../../services/DonationServices/CollectsSerice';
import { DataHolder } from './../../dataHoldersService/DataHolder';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

    event: Collect;
    myLocation: Collect;

    constructor(public navCtrl: NavController, param: NavParams) {
        console.log(param.get("myLocation"));
        this.event = param.get("event");
        this.myLocation = param.get("myLocation");

    }

    parseJson() {
        return JSON.stringify(this.event);
    }

    displayMap() {
        return JSON.stringify(this.myLocation); 
    }

    public loadScript(url) {
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    public ngOnInit() {
        this.loadScript("googleMapApi.js");
        this.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAALkKv3-jjc88zn9dD6hGheGkZ21xW_9o&callback=initMap");
    }
}
