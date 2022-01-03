import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpService {
    
    constructor(private http : HttpClient) {

    }

    getDataFromServer(uri : string) : Observable<any> {
        return this.http.get('/api/v1/' + uri);
    }
}