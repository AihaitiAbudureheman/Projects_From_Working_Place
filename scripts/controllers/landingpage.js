'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
  .controller('landingpageCtrl', ['$http', '$scope', 'getLand', '$state', '$stateParams', '$window', '$document', 'youtubePlay', '$anchorScroll', '$location', function($http, $scope, getLand, $state, $stateParams, $window, $anchorScroll, $location, $document, youtubePlay) {
    $scope.landObj = getLand;
  }]);
