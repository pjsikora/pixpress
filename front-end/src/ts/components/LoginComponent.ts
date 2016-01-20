import {Component} from "angular2/core";
import {OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: "loginbox",
    template: `
    <input type="text"/>
    <input type="text"/>
    <input type="submit"/>
    `
})

export class LoginComponent {
    constructor(public http: Http) {

    }
}