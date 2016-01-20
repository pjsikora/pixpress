import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";

@Injectable()

export class AppService {
    public people;

    constructor(public http: Http) {

    }
    getGpios() {
        return this.http.get('../gpio.json')
            .map(response => response.json())
    }
}
