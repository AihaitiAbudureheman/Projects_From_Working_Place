'use strict';
/**
 * @ngdoc function
 * @name wdcApp.controller:ProcessCtrl
 * @description
 * # ProcessCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
    .controller('ProcessCtrl', ['$scope', '$http', 'parallaxHelper', function($scope, $http, parallaxHelper) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.txt_parallax = parallaxHelper.createAnimator(0.4, 300, -300); //--Angular parallax setting--//
}]);

