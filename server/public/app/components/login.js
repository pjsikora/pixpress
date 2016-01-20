System.register(["angular2/core", 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(http) {
                    this.http = http;
                }
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: "loginbox",
                        template: "\n    <input type=\"text\"/>\n    <input type=\"text\"/>\n    <input type=\"submit\"/>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9naW4udHMiXSwibmFtZXMiOlsiTG9naW5Db21wb25lbnQiLCJMb2dpbkNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBVUlBLHdCQUFtQkEsSUFBVUE7b0JBQVZDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO2dCQUU3QkEsQ0FBQ0E7Z0JBWkxEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsUUFBUUEsRUFBRUEsOEZBSVRBO3FCQUNKQSxDQUFDQTs7bUNBTURBO2dCQUFEQSxxQkFBQ0E7WUFBREEsQ0FiQSxBQWFDQSxJQUFBO1lBYkQsMkNBYUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibG9naW5ib3hcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIi8+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
