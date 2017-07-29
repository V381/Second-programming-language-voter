import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GetIconsScores {
    constructor(private http: Http){

    }

    getIconsScore (route) {
        return this.http.get(route).map(response => response.json())
    }

}