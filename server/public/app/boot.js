System.register(['angular2/platform/browser', "./components/MainAppComponent", "./app.service", "angular2/http"], function(exports_1) {
    var browser_1, MainAppComponent_1, app_service_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (MainAppComponent_1_1) {
                MainAppComponent_1 = MainAppComponent_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(MainAppComponent_1.MainAppComponent, [app_service_1.AppService, http_1.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQSxtQkFBUyxDQUFDLG1DQUFnQixFQUFFLENBQUMsd0JBQVUsRUFBRSxxQkFBYyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInXG5pbXBvcnQge01haW5BcHBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvTWFpbkFwcENvbXBvbmVudFwiO1xuaW1wb3J0IHtBcHBTZXJ2aWNlfSBmcm9tIFwiLi9hcHAuc2VydmljZVwiO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuXG5ib290c3RyYXAoTWFpbkFwcENvbXBvbmVudCwgW0FwcFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
