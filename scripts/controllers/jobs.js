'use strict';
/**
 * @ngdoc function
 * @name wdcApp.controller:JobsCtrl
 * @description
 * # JobsCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
  .controller('JobsCtrl', ['$http', '$scope', 'getJobs', '$state', '$stateParams', 'youtubePlay', '$window', '$document', function($http, $scope, getJobs, $state, $stateParams, youtubePlay, $window, $document) {
    // get the json with all the job openings
    $http.get('assets/wordings/jobs/jobsPage.json').then(function(data) {
      $scope.text = data.data;
      console.log($scope.text);
    }, function(error) {
      console.log(error);
    });

    $scope.jobsObj = getJobs;

    /*--Code for jobs page banner video starts--*/
    $scope.playVideo = function() {
      var video_code = "n922b-FJjSM";
      youtubePlay.video(video_code);
    };
    /*--Code for jobs page banner video ends--*/

    // animate the jobs page when coming back for a job post
    if ($stateParams.scrollTo !== '') {
      //if we are coming back from a job advert animate the jobs page.
      setTimeout(function() {
        var offset = $('#' + $stateParams.scrollTo).position();
        console.log(offset);
        $("html, body").animate({
          scrollTop: offset.top - 140
        }, "slow");
      }, 500);
    }

    $scope.linkTo = function(param, language) {
      console.log('we should go to', param);
      $state.go('job', {
        id: param,
        langcode: language.langcode
      });
    }

    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }
  }]).value('duScrollOffset', 140)
  .value('duScrollDuration', 1000)
