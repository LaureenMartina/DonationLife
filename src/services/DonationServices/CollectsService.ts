import { Config } from "./../../dataHoldersService/config";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { DataResponse } from "../../dataHoldersService/DataResponse";
import { ErrorResponse } from "../../dataHoldersService/ErrorResponse";
import { Collect } from "../../dataHoldersService/DonationData/collect";
import { DataService } from '../dataService';

@Injectable()
export class CollectService {

    url: string;
    headers: HttpHeaders;

    constructor(private dataService: DataService, private http: HttpClient, private config: Config) {
        this.url = config.url + '/collects/current/near';
        this.headers = dataService.getHeaders();
    }

    getCollects(location: Collect): Promise<any> {
       return new Promise((resolve , reject) => {
            this.http.post(this.url, location, { headers: this.headers })
            .subscribe(
                (item: any) => resolve(item as DataResponse),
                (err: any) => reject(err as ErrorResponse)
            );
        });
    }
}