'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')

.controller('BodyCtrl', ['$translate', '$scope', 'youtubePlay', '$stateParams', '$state', function($translate, $scope, youtubePlay, $stateParams, $state) {
    $scope.language = $translate.preferredLanguage(); // Default
    $scope.toggleLanguage = function(langKey) {
        $translate.use(langKey);
        $scope.language = langKey;
        $stateParams.langcode = langKey;
        $state.reload();
    }

    /*--Code for Header active nav--*/  
    $scope.isActive = function(route) {
            return route === $state.current.name;
        }
        /*--Code for footer video starts--*/
    $scope.footerVideo1 = function() {
        var video_code = "vqxvEUKiT1g";
        youtubePlay.video(video_code);
    };
    $scope.footerVideo2 = function() {
        var video_code = "n922b-FJjSM";
        youtubePlay.video(video_code);
    };
    /*--Code for footer video ends--*/
}]);
