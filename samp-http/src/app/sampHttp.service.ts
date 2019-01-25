import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class SampHttp {

    constructor(private client: HttpClient) {}

    // getList(url: string, params?: any) {
    //    return this.client.get(url, params);
    // }

    get(url: string, params?: any) {
        console.log(params);
        return this.client.get(url, {params: params});
    }

    post(url: string, params?: any) {
        console.log(params);
        return this.client.post(url, params);
    }

    put(url: string, params?: any) {
        return this.client.put(url, params);
    }
}
