import {Config} from "./../../dataHoldersService/config";
import { Injectable }   from '@angular/core';
import { HttpHeaders, HttpClient} from "@angular/common/http";

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { DataResponse } from "../../dataHoldersService/DataResponse";
import { ErrorResponse } from "../../dataHoldersService/ErrorResponse";

@Injectable()
export class CollectService{

    constructor(private http: HttpClient, private config: Config){
    }

    public near(token : String) : Promise<any>{

        const header = new HttpHeaders({ "x-access-token": token as string });
        return new Promise((resolve , reject) => {
            this.http.get(`${this.config.url}/collects/near`, { headers: header })
            .subscribe(
                (item: any) => resolve(item as DataResponse),
                (err: any) => reject(err as ErrorResponse)
            );
        });
    } 
}