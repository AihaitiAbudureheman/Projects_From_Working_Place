'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:IosCtrl
 * @description
 * # IosCtrl
 * Controller of the wdcApp
 */
 angular.module('wdcApp')
 .controller('IosCtrl',  ['$scope', 'getIos', '$state', '$stateParams', '$http','$document', 'roundProgressService', '$interval', '$timeout', '$window', '$location', function($scope, $http, getIos, $state, $location, $stateParams, $document, roundProgressService, $interval, $timeout, $window) {
   //receive IOS api references and assign it to iosObj
    $scope.iosObj=getIos;
    console.log($scope.iosObj);


 	//scroll to the selected service category
 	$scope.smoothScroll = function(target) {


        var offset = 64;
        var appRows = document.getElementsByClassName("description_row");
        var scrollContainer= appRows[target];
        //smooth scroll takes at 1500 ms
        $document.scrollToElement(scrollContainer, offset, 1500);



        /* Instant scroll to target-----

 		//Height of header, need to scroll past.
 		var yourHeight = 64;
 		var appRows = document.getElementsByClassName("description_row");

 		var scrollContainer= appRows[target];

 		//scroll to the selected service category.
 		scrollContainer.scrollIntoView(true);
 		//scroll back to show the catergory title below the navbar.
 		var scrolledY = window.scrollY;
 		if(scrolledY){
 			window.scroll(0, scrolledY - yourHeight);
		}

        -----Instant scroll to target*/
	}

	/*Functions for number counters*/
	var current = [];
    var totHeight = document.getElementById('wd_in_number');
    window.onscroll = function() {
        if (window.pageYOffset >= totHeight.offsetTop - 400) {
            prog_animation();
        }
    }

	$scope.offset = 0;
    $scope.timerCurrent = 0;
    $scope.uploadCurrent = 0;
    $scope.stroke = 10;
    $scope.radius = 60;
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
            'top': $scope.isSemi ? 'auto' : '62.5%',
            'bottom': $scope.isSemi ? '5%' : 'auto',
            'left': '52.5%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': $scope.radius / 2.8 + 'px'
        };
    };

    $scope.getColor = function() {
        return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;
    };

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
