'use strict';

//Directive for repeating the slider
angular.module('wdcApp')
	.directive('repeatDirective', function(){

		//if the last image for the slider comes - do something
		return function(scope) {
		if (scope.$last){
			scope.$emit('LastRepeaterElement');
		}
		};
	});