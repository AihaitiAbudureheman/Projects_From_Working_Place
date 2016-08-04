'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
.controller('ecommerceCtrl', ['$http', '$scope', 'getEcom', '$state', '$stateParams', '$window', '$document', 'youtubePlay', '$anchorScroll', '$location', function($http, $scope, getEcom, $state, $stateParams, $window, $anchorScroll, $location, $document, youtubePlay) {
  $scope.ecomObj = getEcom;
  }]);
