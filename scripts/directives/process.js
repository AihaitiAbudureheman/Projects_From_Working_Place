'use strict';

/**
 * @ngdoc directive
 * @name wdcApp.directive:process
 * @description
 * # process
 */
angular.module('wdcApp')
    .directive('dExpandCollapse', function() {
        return {
            restrict: 'EA',
            link: function(scope, element, attrs) {
                $(element).click(function() {
                    $(this).find(".hide_div").slideToggle('200', function() {});
                    $(this).find(".list_item").toggleClass("list_bg");
                    $(this).find(".plus").toggleClass("hide");
                    $(this).find(".minus").toggleClass("show");
                    if ($("div.hide_div:visible").length > 1) {
                        $(this).parent().siblings().find(".hide_div").slideUp();
                        $(this).parent().siblings().find(".list_item").removeClass('list_bg');
                        $(this).parent().siblings().find(".plus").removeClass('hide');
                        $(this).parent().siblings().find(".minus").removeClass('show');
                    }
                });
            }
        }
    });
    
