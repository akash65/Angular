import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class Service {

  userLog = false;
    // apiUrl = 'https://nobounds-testbe.powerofn.in';
    constructor(private httpservice: HttpClient) {}

    get(apiUrl: string, params?: any) {
        return this.httpservice.get(apiUrl, {params});

    }

    /**
     * guard methods
     */
    sendToken(token: string) {
        localStorage.setItem('LoggedInUser', token);
      }
      getToken() {
        return localStorage.getItem('LoggedInUser');
      }
      isLoggednIn() {
        // return this.getToken() !== null;
        return this.userLog;
      }

}
