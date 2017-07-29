import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SaveScore {
    constructor(private http: Http){

    }

    saveScore(data){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/score', JSON.stringify(data), options).map((res: Response) => res.json());
    }

}