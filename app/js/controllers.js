'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('PictureListCtrl', ['$scope', '$http',
  function($scope, $http) {

    $scope.getData = function () {
    $scope.showSearchButton=false;
    $scope.query = '';
    $scope.pictureList = [];
    $http({
      method: 'GET',
      url: 'https://api.flickr.com/services/rest',
      params: {
        method:'flickr.photos.search',
        api_key: '7eb926a18e727dff0b719fb06990f325',
        text: $scope.flickrQuery,
        format: 'json',
        nojsoncallback: 1,
        per_page: 50,
        extras: 'date_taken' // NB. The returned JSON property is 'datetaken' (no underscore).
      }
    }).success(
        function(data) {
          $scope.pictureList = data.photos.photo;
        });
    };

    if (!$scope.flickrQuery) 
      $scope.flickrQuery = 'Chester Zoo' ;
    $scope.getData();
    $scope.orderProp = '-datetaken';
  }]);

