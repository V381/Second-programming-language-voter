import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GetIcons {
    constructor(private http: Http){

    }

    extractData(res: Response){
        return res.json();
    }

    getIcons (route) {
        return this.http.get(route).map(response => response.json())
    }

}