module Apptus.Jewellery {
	"use strict";

	let allModules = [
		"ui.router",
		"ngAria"
	];

	export let JewelleryModule = angular.module('apptusJewelleryModule', allModules);

	JewelleryModule.config([
		"$stateProvider",
		"$urlRouterProvider",
		function routes(
			$stateProvider: angular.ui.IStateProvider,
			$urlRouterProvider: angular.ui.IUrlRouterProvider) {
			$urlRouterProvider.otherwise('/Home');

			$stateProvider
				.state("Home", <ng.ui.IState>{
					url: "/Home",
					template: "~/Scripts/common/views/Home.html"
				});
		}]);
}