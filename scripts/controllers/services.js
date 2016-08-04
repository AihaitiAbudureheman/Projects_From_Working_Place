'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
  .controller('ServicesCtrl', ['$http', '$scope', 'getServices', '$state', '$stateParams', '$window', '$document', 'youtubePlay', '$anchorScroll', '$location', function($http, $scope, getServices, $state, $stateParams, $window, $anchorScroll, $location, $document, youtubePlay) {
    $scope.serviceObj = getServices;

  }]);
