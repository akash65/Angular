import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Service } from './service';

@Injectable()

export class LoginGuard implements CanActivate {
    constructor( private authservice: Service, private myRoute: Router) {}

    canActivate() {
        this.myRoute.navigate(['/']);
        return this.authservice.isLoggednIn();


        // if (this.authservice.isLoggednIn()) {
        //     // this.myRoute.navigate(['/login']);
        //     return false;
        //   } else {
        // //   this.myRoute.navigate(['/students']);
        //   return true;
        // }

    }
}

