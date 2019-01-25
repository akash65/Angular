import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()

export class ObjectService {
    value = new Subject(); // not need initial value
    message = new BehaviorSubject('hello'); // needs initial value


}
