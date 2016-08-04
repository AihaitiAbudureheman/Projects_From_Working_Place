'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
    .controller('MainCtrl', ['$scope', '$http', 'getTestimonials', 'parallaxHelper', 'youtubePlay', function($scope, $http, getTestimonials, parallaxHelper, youtubePlay) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ]; 

        $scope.txt_parallax = parallaxHelper.createAnimator(0.4, 300, -300); //--Angular parallax setting--//

        /*--Code for home slider playreel video starts--*/
        $scope.playReel = function() {
            var video_code = "vqxvEUKiT1g";
            youtubePlay.video(video_code);
        };
        /*--Code for home slider playreel video ends--*/

        /*Code for getting testimonials api from the server starts*/
        $scope.testimonialsObj=getTestimonials;
        console.log($scope.testimonialsObj);

        /*Code for getting testimonials api from the server ends*/




    }]);
