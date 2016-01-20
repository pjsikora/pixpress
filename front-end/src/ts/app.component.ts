import 'rxjs/add/operator/map';

import {Component} from "angular2/core";
import {OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {AppService} from "./app.service";
import { RouterOutlet } from 'angular2/router';

@Component({
	selector: 'application',
	template: `<ul>
		<li *ngFor="#one of gpios">{{one.name}}</li>
		</ul>`
})

export class AppComponent {
	gpios;

	constructor(public appService: AppService) {}

	getGpio() {
		this.appService.getGpios()
			.subscribe(
				gpios => {
					this.gpios = gpios;
					console.log("this.gpios");
					console.log(this.gpios);

				},
				error => console.error('Error: ' + error),
				() => console.log("Done!")
		);
	}

	ngOnInit() {
		this.getGpio();

		console.log(this.gpios);
	}
}
