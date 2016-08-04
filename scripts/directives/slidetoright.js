'use strict';

/**
 * @ngdoc directive
 * @name wdcApp.directive:slidetoright
 * @description
 * # slidetoright
 */
angular.module('wdcApp')
    .directive('slidetoright', function() {
        return function(scope, element) {
            element.bind('click', function() {
                // Pins on the map
                angular.element('.pin_slide1.pin').css({ opacity: 0 });
                angular.element('.pin_slide1.pin_name').css("display", "none");
                // Addresses
                angular.element('.slide1').animate({
                    right: '+100%'
                }, 500, function() {
                    angular.element('.slide1').hide();
                    angular.element('.slide1').css({
                        right: 0
                    });
                    angular.element('.slide2').effect('slide', {
                        direction: 'right'
                    }, 500);
                    // Arrows
                    angular.element('.arrow_right').hide('slide', {
                        direction: 'left'
                    });
                    angular.element('.arrow_left').show('slide', {
                        direction: 'right'
                    });
                    // Pins on the map
                    angular.element('.pin_slide2.pin').css({ opacity: 1 });
                    angular.element('.pin_slide2.pin_name').css("display", "block");
                });
                // Map
                angular.element('.map').animate({
                    'margin-left': '0%'
                }, 500);
            });
        };
    });
