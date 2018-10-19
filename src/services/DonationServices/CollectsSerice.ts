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
            this.http.get("http://api.ipstack.com/check?access_key=ffccedd4a2b191cd0eb492140ffbd84a")
            .subscribe(
                (item: any) => {
                    console.log(item);
                    this.http.post(`${this.config.url}/collects/current/near`, { 
                        collect: {
                            latitude: item.latitude,
                            longitude: item.longitude
                        }
                    }, { headers: header })
                    .subscribe(
                        (item: any) => resolve(item as DataResponse),
                        (err: any) => reject(err as ErrorResponse)
                    );
                },
                (err: any) => reject(err as ErrorResponse)
            );

        });
    } 

    public current(token : String) : Promise<any>{

        const header = new HttpHeaders({ "x-access-token": token as string });

        return new Promise((resolve , reject) => {
            this.http.get("http://api.ipstack.com/check?access_key=ffccedd4a2b191cd0eb492140ffbd84a")
            .subscribe(
                (item: any) => resolve(item as DataResponse),
                (err: any) => reject(err as ErrorResponse)
            );

        });
    } 
}
