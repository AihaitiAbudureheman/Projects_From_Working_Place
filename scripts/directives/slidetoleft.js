'use strict';

/**
 * @ngdoc directive
 * @name wdcApp.directive:slidetoleft
 * @description
 * # slidetoleft
 */
angular.module('wdcApp')
    .directive('slidetoleft', function() {
        return function(scope, element) {
            element.bind('click', function() {
                // Pins on the map
                angular.element('.pin_slide2.pin').css({ opacity: 0 });
                angular.element('.pin_slide2.pin_name').css("display", "none");
                // Addresses
                angular.element('.slide2').animate({
                    left: '+100%'
                }, 500, function() {
                    angular.element('.slide2').hide();
                    angular.element('.slide2').css({
                        left: 0
                    });
                    angular.element('.slide1').effect('slide', {
                        direction: 'left'
                    }, 500);
                    // Arrows
                    angular.element('.arrow_left').hide('slide', {
                        direction: 'right',
                    });
                    angular.element('.arrow_right').show('slide', {
                        direction: 'left',
                    });
                    // Pins on the map
                    angular.element('.pin_slide1.pin').css({ opacity: 1 });
                    angular.element('.pin_slide1.pin_name').css("display", "block");
                });

                // Map
                angular.element('.map').animate({
                    'margin-left': '-24%'
                }, 500);
            });
        };
    });
