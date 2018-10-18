import { Injectable }   from '@angular/core';

@Injectable()
export class DataService{

    token: string;

    // TODO: load token
    constructor(){
    }

    public getToken() : string {
        return this.token;
    }
}