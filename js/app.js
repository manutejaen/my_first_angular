"use strict";

/*  [] after module can be used to define depedent modules as it is shown below*/
angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
]).

/*RouteProvideer is another service as $scope.  */
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
  when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
  otherwise({redirectTo: '/drivers'});
}]);