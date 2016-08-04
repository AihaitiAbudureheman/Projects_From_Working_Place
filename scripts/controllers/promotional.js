'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
  .controller('PromotionalCtrl', ['$http', '$scope', 'getPromotional', '$state', '$stateParams', '$window', '$document', 'youtubePlay', '$anchorScroll', '$location', function($http, $scope, getPromotional, $state, $stateParams, $window, $anchorScroll, $location, $document, youtubePlay) {
    $scope.promotionalObj = getPromotional;
    console.log($scope.promotionalObj);

  }]);
