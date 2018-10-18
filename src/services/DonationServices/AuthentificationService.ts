import {User} from "./../../dataHoldersService/DonationData/user/User";
import {Config} from "./../../dataHoldersService/config";
import { Injectable }   from '@angular/core';
import { HttpClient} from "@angular/common/http";

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { DataResponse } from "../../dataHoldersService/DataResponse";
import { ErrorResponse } from "../../dataHoldersService/ErrorResponse";

@Injectable()
export class AuthentificationService{

    constructor(private http: HttpClient, private config: Config){
    }

    public sign(user: User) : Promise<any>{
        return new Promise((resolve , reject) => {
            this.http.post(`${this.config.url}/authentication/sign`, {user})
            .subscribe(
                (item: any) => resolve(item as DataResponse),
                (err: any) => reject(err as ErrorResponse)
            );
        });
    } 


    public register(user: User) : Promise<DataResponse> {
        return new Promise((resolve , reject) => {
            this.http.post(`${this.config.url}/authentication/register`, {user})
            .subscribe(
                (item: any) => resolve(item as DataResponse),
                (err: any) => reject(err as ErrorResponse)
            );
        });
    }

}