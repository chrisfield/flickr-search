'use strict';

/* Filters */

angular.module('appFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

angular.module('appFilters', []).filter('readableDate', function() {
  return function(input) {
    return input.substring(0, 10);
  };
});

angular.module('appFilters', []).filter('moment', function() {
    return function(input) {
        return moment(input, 'YYYY-MM-DD hh:mm:ss').format('MMM \'YY');
    };
});
