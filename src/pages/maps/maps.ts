import { Collect } from './../../dataHoldersService/DonationData/Collect/Collect';
import { CollectService } from './../../services/DonationServices/CollectsSerice';
import { DataHolder} from './../../dataHoldersService/DataHolder';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var googleApi;

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
        googleApi();
    }
}
