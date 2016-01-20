System.register(['rxjs/add/operator/map', "angular2/core", "../app.service"], function(exports_1) {
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
    var MainAppComponent;
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
            MainAppComponent = (function () {
                function MainAppComponent(appService) {
                    this.appService = appService;
                }
                MainAppComponent.prototype.getGpio = function () {
                    var _this = this;
                    this.appService.getGpios()
                        .subscribe(function (gpios) {
                        _this.gpios = gpios;
                        console.log("this.gpios");
                        console.log(_this.gpios);
                    }, function (error) { return console.error('Error: ' + error); }, function () { return console.log("Done!"); });
                };
                MainAppComponent.prototype.ngOnInit = function () {
                    this.getGpio();
                    console.log(this.gpios);
                };
                MainAppComponent = __decorate([
                    core_1.Component({
                        selector: 'mainappcomponent',
                        template: "<ul>\n\t\t<li *ngFor=\"#one of gpios\">{{one.name}}</li>\n\t\t</ul>"
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], MainAppComponent);
                return MainAppComponent;
            })();
            exports_1("MainAppComponent", MainAppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFpbkFwcENvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJNYWluQXBwQ29tcG9uZW50IiwiTWFpbkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIk1haW5BcHBDb21wb25lbnQuZ2V0R3BpbyIsIk1haW5BcHBDb21wb25lbnQubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFVSUEsMEJBQW1CQSxVQUFzQkE7b0JBQXRCQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFZQTtnQkFBR0EsQ0FBQ0E7Z0JBRTdDRCxrQ0FBT0EsR0FBUEE7b0JBQUFFLGlCQVlDQTtvQkFYR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsRUFBRUE7eUJBQ3JCQSxTQUFTQSxDQUNOQSxVQUFBQSxLQUFLQTt3QkFDREEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7d0JBQ25CQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTt3QkFDMUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUU1QkEsQ0FBQ0EsRUFDREEsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsRUFBaENBLENBQWdDQSxFQUN6Q0EsY0FBTUEsT0FBQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBcEJBLENBQW9CQSxDQUM3QkEsQ0FBQ0E7Z0JBQ1ZBLENBQUNBO2dCQUVERixtQ0FBUUEsR0FBUkE7b0JBQ0lHLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO29CQUVmQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQTlCTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsa0JBQWtCQTt3QkFDNUJBLFFBQVFBLEVBQUVBLHFFQUVOQTtxQkFDUEEsQ0FBQ0E7O3FDQTBCREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQS9CQSxBQStCQ0EsSUFBQTtZQS9CRCwrQ0ErQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL01haW5BcHBDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0FwcFNlcnZpY2V9IGZyb20gXCIuLi9hcHAuc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJPdXRsZXR9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFpbmFwcGNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGU6IGA8dWw+XG5cdFx0PGxpICpuZ0Zvcj1cIiNvbmUgb2YgZ3Bpb3NcIj57e29uZS5uYW1lfX08L2xpPlxuXHRcdDwvdWw+YFxufSlcblxuZXhwb3J0IGNsYXNzIE1haW5BcHBDb21wb25lbnQge1xuICAgIGdwaW9zO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UpIHt9XG5cbiAgICBnZXRHcGlvKCkge1xuICAgICAgICB0aGlzLmFwcFNlcnZpY2UuZ2V0R3Bpb3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBncGlvcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3Bpb3MgPSBncGlvcztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmdwaW9zXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdwaW9zKTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvciksXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJEb25lIVwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRHcGlvKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncGlvcyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
