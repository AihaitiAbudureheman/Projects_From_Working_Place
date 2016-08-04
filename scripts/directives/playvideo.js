'use strict';

/**
 * @ngdoc directive
 * @name wdcApp.directive:playvideo
 * @description
 * # playvideo
 */
angular.module('wdcApp')
  .directive('playvideo', function ($compile) {
    return function(scope, element, attrs) {
      element.bind('click', function() {
        angular.element('header').css({
          display: 'none'
        });
        angular.element('.content').css({
          display: 'none'
        });
        angular.element('footer').css({
          display: 'none'
        });
        angular.element('body').append($compile('<iframe class=\'player\' width=\'100% \' height=\'100%\'  src=\'https://www.youtube.com/embed/'+ attrs.id +'?autoplay=1&showinfo=0&loop=1&rel=0\' frameborder=\'0\' allowfullscreen></iframe><img src=\'../images/footer/close.png\' class=\'close_button\' ng-click=\'close();\'>')(scope));
        scope.close = function() {
          angular.element(".player").remove();
          angular.element('header').css({
            display: 'block'
          });
          angular.element('.content').css({
            display: 'block'
          });
          angular.element('footer').css({
            display: 'block'
          });
        };
      });
    };
  });
