'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wdcApp
 */

angular.module('wdcApp')

.controller('AboutCtrl', ['$scope', '$http', 'roundProgressService', '$interval', '$timeout', '$window', function($scope, $http, roundProgressService, $interval, $timeout, $window) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    var current = [];
    var facewallHeight = document.getElementById('facewall').offsetHeight
    var totHeight = document.getElementById('wd_in_number')
    var totHeight2 = document.getElementById('slider')
    window.onscroll = function() {
        if (window.pageYOffset >= totHeight.offsetTop - facewallHeight) {
            prog_animation();
        }
        if (window.pageYOffset >= totHeight2.offsetTop - facewallHeight) {
            document.querySelector('md-list-item.person:nth-child(1) .person_info').classList.add("info_animate");
            document.querySelector('md-list-item.person:nth-child(2) .person_info').classList.add("info_animate");
        }
    }

    $scope.offset = 0;
    $scope.timerCurrent = 0;
    $scope.uploadCurrent = 0;
    $scope.stroke = 10;
    $scope.radius = 50;
    $scope.rounded = false;
    $scope.responsive = false;
    $scope.clockwise = true;
    $scope.bgColor = '#D4DBE3';
    $scope.animationDelay = 0;
    $scope.currentAnimation = 'easeOutCubic';


    function prog_animation() {
        $timeout(function() {
            $scope.duration = 500;
            $scope.isSemi = false;
            $scope.currentColor = '#549CB9';
            $scope.currentAnimation = 'easeOutCubic';

        }, 100)
    }


    $scope.animations = [];

    angular.forEach(roundProgressService.animations, function(value, key) {
        $scope.animations.push(key);
    });

    $scope.getStyle = function() {
        var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

        return {
            'top': $scope.isSemi ? 'auto' : '50%',
            'bottom': $scope.isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': $scope.radius / 1.44 + 'px'
        };
    };

    $scope.getColor = function() {
        return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;
    };
    // var amounts =45;
    $scope.showPreciseCurrentss = function(val) {
        $timeout(function() {
            for (var i = 2; i < 5; i++) {
                if (val <= 0) {
                    $scope.preciseCurrent = $scope.current;
                } else {
                    var math = $window.Math;

                    $scope.preciseCurrent = math.min(math.round(val), $scope.max);
                }
            }
        });
    };

    $timeout(function() {
        $scope.slickConfig = {
            accessibility: true,
            enabled: true,
            autoplay: false,
            adaptiveHeight: true,
            arrows: true,
            centerMode: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            fade: true

        };
    }, 1000)

}]);
