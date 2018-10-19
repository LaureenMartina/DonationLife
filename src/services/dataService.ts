import { Injectable }   from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService{

    token: string;
    headers: HttpHeaders;

    // TODO: load token
    constructor(){
        new HttpHeaders({"x-access-token": this.token});
    }

    public getToken() : string {
        return this.token;
    }
    
    public getHeaders() : HttpHeaders {
        return this.headers;
    }
}