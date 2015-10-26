'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'ngMaterial',
  'appControllers',
  'appFilters'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pictures', {
        templateUrl: 'partials/picture-list.html',
        controller: 'PictureListCtrl'
      }).
      otherwise({
        redirectTo: '/pictures'
      });
  }]);
