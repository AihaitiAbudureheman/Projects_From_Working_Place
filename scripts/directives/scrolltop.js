'use strict';

/**
 * @ngdoc directive
 * @name wdcApp.directive:scrolltop
 * @description
 * # scrolltop
 */

angular.module('wdcApp')
  .directive('scrolltop', function ($document) {
    return {
      restrict: 'A',
      link: function(scope, elm) {
        elm.bind("click", function() {
             $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
            })
    }
}
});
