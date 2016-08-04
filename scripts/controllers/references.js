'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:ReferencesCtrl
 * @description
 * # ReferencesCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
  .controller('ReferencesCtrl', ['$scope', 'getReferences', '$http', '$location', '$anchorScroll', '$timeout', 'youtubePlay', function($scope, getReferences, $location, $anchorScroll, $http, $timeout, youtubePlay) {
    /*--Reference page load animation starts--*/
    $scope.reference_first = true;
    viewAnimate();

    function viewAnimate() {
      $timeout(function() {
        $scope.reference_first = false;
      }, 500);
    };
    /*--Reference page load animation ends--*/

    /*--Code for reference page video starts--*/
    $scope.referenceVideo = function() {
      var video_code = "vqxvEUKiT1g";
      youtubePlay.video(video_code);
    };
    /*--Code for reference page video ends--*/


    //code for retrieving object references
    $scope.refObj_first = getReferences;

    //Get the size of retrieved array
    var size1 = $scope.refObj_first.length;

    //Filter the array with isVisible property, store the array with the invisible property true to refObj array
    $scope.refObj=[];
    for(var j=0; j<size1; j++)
    {
      if($scope.refObj_first[j].isVisible==true)
      {
        $scope.refObj.push($scope.refObj_first[j]);
      }
    }

   //Get the size of new array
    var size=$scope.refObj.length;

    //Create four array to store different category information
    $scope.promoObj = [];
    $scope.ecomObj = [];
    $scope.mobObj = [];
    $scope.cusObj = [];

    //Split the array and save it to different array object
    for (var i = 0; i < size; i++) {
      if ($scope.refObj[i].category.name == 'Promotional') {
        $scope.promoObj.push($scope.refObj[i]);
      }

      if ($scope.refObj[i].category.name == 'Ecommerce') {
        $scope.ecomObj.push($scope.refObj[i]);
      }

      if ($scope.refObj[i].category.name == 'Mobile') {
        $scope.mobObj.push($scope.refObj[i]);
      }

      if ($scope.refObj[i].category.name == 'Custom') {
        $scope.cusObj.push($scope.refObj[i]);
      }

    }


    //Scrolling event starts

    //minimum scroll height of body and html element
    var scroll_height = 600;

    //Scrolling function which triggered with ng-click
    $scope.scrollIt = function(idx) {
      for (var k = 0; k < size; k = k + 4) {
        if (idx >= k && idx < k + 4) {
          scroll_height = 600 + 65 * k;
        }
      }
      $('html, body').animate({
        scrollTop: scroll_height
      }, 'easing');

    };

  }]);
