import {bootstrap} from 'angular2/platform/browser'
import {MainAppComponent} from "./components/MainAppComponent";
import {AppService} from "./app.service";
import {HTTP_PROVIDERS} from "angular2/http";


bootstrap(MainAppComponent, [AppService, HTTP_PROVIDERS]);