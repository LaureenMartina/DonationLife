import { User } from "./../../dataHoldersService/DonationData/user/User";
import { Config } from "./../../dataHoldersService/config";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { DataResponse } from "../../dataHoldersService/DataResponse";
import { ErrorResponse } from "../../dataHoldersService/ErrorResponse";

@Injectable()
export class UserService {

    constructor(private http: HttpClient, private config: Config) {
    }

    public getUsers(token?: String): Promise<any> {
        const header = new HttpHeaders({ "x-access-token": token as string });
        return new Promise((resolve, reject) => {
            this.http.get(`${this.config.url}/users/`, { headers: header })
                .subscribe(
                    (item: any) => resolve(item as DataResponse),
                    (err: any) => reject(err as ErrorResponse)
                );
        });
    }

    public getCurrent(token: String): Promise<any> {
        const header = new HttpHeaders({ "x-access-token": token as string });
        return new Promise((resolve, reject) => {
            this.http.get(`${this.config.url}/users/current`, { headers: header })
                .subscribe(
                    (item: any) => resolve(item as DataResponse),
                    (err: any) => reject(err as ErrorResponse)
                );
        });
    }

    public updateCurrent(user: User, token: String): Promise<any> {
        const header = new HttpHeaders({ "x-access-token": token as string });
        return new Promise((resolve, reject) => {
            this.http.put(`${this.config.url}/users/current/upmedicaldata`, user, { headers: header })
                .subscribe(
                    (item: any) => resolve(item as DataResponse),
                    (err: any) => reject(err as ErrorResponse)
                );
        });
    }

}