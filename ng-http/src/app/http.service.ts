import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    get(url: string, params?: any) {
        return this.http.get(url, params);
    }

    post(url: string, params?: any) {
        return this.http.post(url, params);
    }
}
