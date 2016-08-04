'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:HostingCtrl
 * @description
 * # HostingCtrl
 * Controller of the wdcApp
 */
 angular.module('wdcApp')
 .controller('HostingCtrl',  ['$scope', '$http','$document', 'roundProgressService', '$interval', '$timeout', '$window', function($scope, $http, $document, roundProgressService, $interval, $timeout, $window) {

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

}]);