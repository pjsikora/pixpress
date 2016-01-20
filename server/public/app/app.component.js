System.register(['rxjs/add/operator/map', "angular2/core", "./app.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1;
    var AppComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(appService) {
                    this.appService = appService;
                }
                AppComponent.prototype.getGpio = function () {
                    var _this = this;
                    this.appService.getGpios()
                        .subscribe(function (gpios) {
                        _this.gpios = gpios;
                        console.log("this.gpios");
                        console.log(_this.gpios);
                    }, function (error) { return console.error('Error: ' + error); }, function () { return console.log("Done!"); });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getGpio();
                    console.log(this.gpios);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'application',
                        template: "<ul>\n\t\t<li *ngFor=\"#one of gpios\">{{one.name}}</li>\n\t\t</ul>"
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LmdldEdwaW8iLCJBcHBDb21wb25lbnQubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFVQ0Esc0JBQW1CQSxVQUFzQkE7b0JBQXRCQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFZQTtnQkFBR0EsQ0FBQ0E7Z0JBRTdDRCw4QkFBT0EsR0FBUEE7b0JBQUFFLGlCQVlDQTtvQkFYQUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsRUFBRUE7eUJBQ3hCQSxTQUFTQSxDQUNUQSxVQUFBQSxLQUFLQTt3QkFDSkEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7d0JBQ25CQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTt3QkFDMUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUV6QkEsQ0FBQ0EsRUFDREEsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsRUFBaENBLENBQWdDQSxFQUN6Q0EsY0FBTUEsT0FBQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBcEJBLENBQW9CQSxDQUMzQkEsQ0FBQ0E7Z0JBQ0hBLENBQUNBO2dCQUVERiwrQkFBUUEsR0FBUkE7b0JBQ0NHLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO29CQUVmQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQTlCRkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsYUFBYUE7d0JBQ3ZCQSxRQUFRQSxFQUFFQSxxRUFFSEE7cUJBQ1BBLENBQUNBOztpQ0EwQkRBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0EvQkEsQUErQkNBLElBQUE7WUEvQkQsdUNBK0JDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7QXBwU2VydmljZX0gZnJvbSBcIi4vYXBwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FwcGxpY2F0aW9uJyxcblx0dGVtcGxhdGU6IGA8dWw+XG5cdFx0PGxpICpuZ0Zvcj1cIiNvbmUgb2YgZ3Bpb3NcIj57e29uZS5uYW1lfX08L2xpPlxuXHRcdDwvdWw+YFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdGdwaW9zO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlKSB7fVxuXG5cdGdldEdwaW8oKSB7XG5cdFx0dGhpcy5hcHBTZXJ2aWNlLmdldEdwaW9zKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGdwaW9zID0+IHtcblx0XHRcdFx0XHR0aGlzLmdwaW9zID0gZ3Bpb3M7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ0aGlzLmdwaW9zXCIpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuZ3Bpb3MpO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnICsgZXJyb3IpLFxuXHRcdFx0XHQoKSA9PiBjb25zb2xlLmxvZyhcIkRvbmUhXCIpXG5cdFx0KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2V0R3BpbygpO1xuXG5cdFx0Y29uc29sZS5sb2codGhpcy5ncGlvcyk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
