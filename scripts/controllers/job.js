'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:JobCtrl
 * @description
 * # JobCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
    .controller('JobCtrl', ['$http', '$scope', '$state', '$stateParams', '$timeout', '$uibModal', 'youtubePlay', '$window', function($http, $scope, $state, $stateParams, $timeout, $uibModal, youtubePlay,$window) {
        console.log('Hallo from Job', $stateParams);

        //get the common text for all job pages
        $http.get('assets/wordings/jobs/jobPageMain.json').then(function(file) {
            console.log('JSON', file);
            $scope.text = file.data;
        }, function(error) {
            console.log(error);  
        });

        //get job specific content
        $http.get('assets/wordings/jobs/jobPositions/' + $stateParams.id + '.json').then(function(file) {
            console.log('JSON', file);
            $scope.job = file.data;
            $('.person_img').css('background', 'url(' + $scope.job.person_img + ') 50% 50% / 100px no-repeat');
        }, function(error) {
            console.log(error);
        });
        if ($stateParams.scrollTo !== '') {
         setTimeout(function() {
             $window.scrollTo(0, 640);
            });
     }
      if ($stateParams.scrollTo == '') {
          $window.scrollTo(0, 640);
      }

        // when going back to the Main Jobs Page
        $scope.goBack = function(param,language) {
            console.log('ble ble ble ble', param);
            $state.go('jobs', {
                scrollTo: param,
                langcode:language.langcode
            });
        };

        //mission and profile steps function
        $scope.meet = true;
        $scope.interview = false;
        $scope.apply = false;
        var i = 0;
        $scope.go = function(param) {
            console.log(param);
            // set interview quetion and answer to the first item in array
            $scope.interview_answer = $scope.job.interview_answers[i];
            $scope.interview_question = $scope.job.interview_questions[i];
            if (param) {
                if (param === 'goToMain') {
                    // if we are on the first element on array go back to first section
                    if (i === 0) {
                        $scope.interview = false;
                        $timeout(function() {
                            $scope.meet = true;
                        }, 450);
                    } else {
                        // if not go back in the array
                        i--;
                        console.log(i);
                        $scope.interview_answer = $scope.job.interview_answers[i];
                        $scope.interview_question = $scope.job.interview_questions[i];
                    }
                } else if (param === 'showQA') {

                    if (i === ($scope.job.interview_answers.length - 1)) {
                        // if we are on the last slide, then show the second
                        if ($scope.apply) {
                            $scope.apply = false;
                            $timeout(function() {
                                $scope.interview = true;
                            }, 450);
                        }
                        // if we are on the last postion in the array show last slide
                        else {
                            console.log('time for last slide');
                            $scope.interview = false;
                            $timeout(function() {
                                $scope.apply = true;
                            }, 450);
                        }
                    } //if not just got the next elemnt in the array
                    else {
                        //console.log($scope.job);
                        i++;
                        $scope.interview_answer = $scope.job.interview_answers[i];
                        $scope.interview_question = $scope.job.interview_questions[i];
                    }
                }
                // reset the steps
                else if (param === "backToStart") {
                    i = 0;
                    $scope.apply = false;
                    $timeout(function() {
                        $scope.meet = true;
                    }, 450);
                }
                // if on first section button click show the second section
            } else {
                $scope.meet = false;
                $timeout(function() {
                    $scope.interview = true;
                }, 450);
            }
        };

        // Application form modal starts here
        $scope.open = function() {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modalTemplate/applicationform.html',
                controller: 'ApplicationFormCtrl',
                resolve: {
                    job: function() {
                        return $scope.job;
                    }
                }
            });
        };
        /*--Code for jobs page banner video starts--*/
        $scope.playVideo = function() {
            var video_code = "n922b-FJjSM";
            youtubePlay.video(video_code);
        };
         /*--Code for jobs page banner video ends--*/
    }])


    .controller('ApplicationFormCtrl', function($http, $scope, $uibModalInstance, job, $mdToast, $document, $timeout) {

        $http.get('assets/wordings/jobs/jobsform.json').success(function(data) {
            $scope.modalform = data;
            // console.log(modalform.formtitle.title1);

        });
        $scope.list2 = {};
        $scope.slide = 1;
        var i = 1;
        // Datepicker stuff
        $scope.popup1 = {
            opened: false
        };
        $scope.job = job;
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };
        // Icon click open datepicker
        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };
        // Button Text

        $scope.button1 = "Back";
        $scope.button2 = "Next";
        $scope.button3 = "Cancel";
        $scope.button4 = "Finish";


        //Close the modal on click
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        //steps starts here
        $scope.next = function() {
            i++;
            $scope.slide = i;
        };
        $scope.back = function() {
            i--;
            $scope.slide = i;
        };
        $scope.sample = function() {
            $mdToast.show(
                $mdToast.simple()
                .textContent('Fill all the Fields')
                .position($scope.getToastPosition())
                .hideDelay(5000)
            );
        };

        $scope.submit = function() {
            $uibModalInstance.dismiss('cancel');
            $timeout(function() {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Form has been Submitted Successfully!')
                    .position($scope.getToastPosition())
                    .hideDelay(5000)
                );
            }, 1000);
        };

        // Angular MD toast
        var last = {
            bottom: true,
            top: false,
            left: false,
            right: true
        };

        $scope.toastPosition = angular.extend({}, last);

        $scope.getToastPosition = function() {
            sanitizePosition();

            return Object.keys($scope.toastPosition)
                .filter(function(pos) {
                    return $scope.toastPosition[pos];
                })
                .join(' ');
        };

        function sanitizePosition() {
            var current = $scope.toastPosition;

            if (current.bottom && last.top) current.top = false;
            if (current.top && last.bottom) current.bottom = false;
            if (current.right && last.left) current.left = false;
            if (current.left && last.right) current.right = false;

            last = angular.extend({}, current);
        }
  })
  .controller('ApplicationFormCtrl', function($scope, $uibModalInstance, job) {
    $scope.list2 = {};
    $scope.slide = 1;
    var i = 1;
    // Datepicker stuff
    $scope.popup1 = {
      opened: false
    };
    $scope.job = job;
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
    // Icon click open datepicker
    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };
     // Button Text
        $scope.button1 = "Back";
        $scope.button2 = "Next";
        $scope.button3 = "Cancel";

        // Close the modal on click
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        //steps starts here
        $scope.ok = function() {
            i++;
            $scope.slide = i;
        };
        $scope.back = function() {
            i--;
            $scope.slide = i;
        };
    $scope.list1 = [];
    $scope.list2 = [];
    $scope.list3 = [];
    $scope.list4 = [];

    $scope.list5 = [{
      'title': 'Bogota, Colombia',
      'drag': true
    }, {
      'title': 'Copenhagen, Denmark',
      'drag': true
    }, {
      'title': 'Paris, France',
      'drag': true
    }, {
      'title': 'Coimbatore, India',
      'drag': true
    }, {
      'title': 'Mysore, India',
      'drag': true
    }, {
      'title': ' Nottingham, UK',
      'drag': true
    }];
  });
