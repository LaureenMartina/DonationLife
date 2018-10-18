import { Config } from "./../../dataHoldersService/config";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { DataResponse } from "../../dataHoldersService/DataResponse";
import { ErrorResponse } from "../../dataHoldersService/ErrorResponse";
import { Collect } from "../../dataHoldersService/DonationData/collect";
import {DataService} from '../dataService';

@Injectable()
export class CollectService {

    constructor(private dataService: DataService, private http: HttpClient, private config: Config) {
    }

    public getCollects(location: Collect): Promise<any> {

        const header = new HttpHeaders({ "x-access-token": this.dataService.getToken()});
        return new Promise((resolve, reject) => {
            this.http.post(`${this.config.url}/collects/near`, location, { headers: header })
                .subscribe(
                    (item: any) => resolve(item as DataResponse),
                    (err: any) => reject(err as ErrorResponse)
                );
        });
    }
}