var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        "use strict";
        var allModules = [
            "ui.router",
            "ngAria"
        ];
        Jewellery.JewelleryModule = angular.module('apptusJewelleryModule', allModules);
        Jewellery.JewelleryModule.config([
            "$stateProvider",
            "$urlRouterProvider",
            function routes($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/Home');
                $stateProvider
                    .state("Home", {
                    url: "/Home",
                    template: "~/Scripts/common/views/Home.html"
                });
            }]);
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=JewelleryModule.js.map