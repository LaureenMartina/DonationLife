import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';
import { CollectService } from '../../services/DonationServices/CollectsService';
import { Collect } from '../../dataHoldersService/DonationData/collect';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  @ViewChild('map') mapContainer: ElementRef;

  map: any;
  markers: [][];

  constructor(public navCtrl: NavController, public navParams: NavParams, private collectService: CollectService) {
    // TODO: inject service and initialize array
    this.markers = [];
  }

  ionViewDidLoad() {
    this.loadMap();

    // Hide attribution
    document.getElementsByClassName( 'leaflet-control-attribution')[0].style.display = 'none';
  }

  loadMap() {
    this.map = leaflet.map("map",{
    }).fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 17,
      minZoom: 5
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 12,
      minZoom: 4
    }).on('locationfound', (location) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any;

      this.collectService.getCollects({latitude: location[1], longitude: location[2]})
        .then((collects: Array<Collect>) => {
          collects.forEach((collect: Collect, index: number) => {
            marker = leaflet.marker(collect.latitude, collect.longitude).on('click', () => {
              // TODO: markers onClick
            });
            markerGroup.addLayer(marker);

            // Last iteration
            if (collects.length == index + 1) {
              this.map.addLayer(markerGroup);
            }
          });
        }). catch(err => {
          console.log(err);
        });
      }).on('locationerror', (err) => {
        alert(err.message);
    });
  }
}