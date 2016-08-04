'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the wdcApp
 */

angular.module('wdcApp')
    .controller('ApplicationCtrl', ['$scope', 'fileUpload', '$http', '$stateParams', '$mdToast', '$animate',
        function($scope, fileUpload, $http, $stateParams, $mdToast, $animate) {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $http({
                method: 'GET',
                url: 'assets/wordings/jobs/jobPositions/' + $stateParams.id + '.json'
            }).then(function successCallback(response) {
                console.log(response.data.title);
                var job = response.data.title;
            }, function errorCallback(response) {
                console.log(error);
            });

            $scope.toastPosition = {
                bottom: true,
                top: false,
                left: false,
                right: true
            };


            $scope.getToastPosition = function() {
                return Object.keys($scope.toastPosition)
                    .filter(function(pos) {
                        return $scope.toastPosition[pos];
                    })
                    .join(' ');
            };

            $scope.resumeUpload = function() {
                var resume = $scope.resume;
                console.log('file is ');
                console.dir(resume);
                if (typeof resume === 'undefined' || resume === null) {
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('file not found')
                        .position($scope.getToastPosition())
                        .hideDelay(5000)
                    );
                } else {
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('file uploaded Sucessfully')
                        .position($scope.getToastPosition())
                        .hideDelay(5000)
                    );
                }

                var uploadUrl = '/upload';
                var files = {resume:resume}
                fileUpload.uploadFileToUrl(files, uploadUrl);

            };

            this.jobForm = function() {

                var data = {
                    job: $scope.job,
                    applicationPos: $scope.applicationPos,
                    lName: $scope.lName,
                    name: $scope.name,
                    fName: $scope.fName,
                    gender: $scope.gender,
                    dob: $scope.dob,
                    phone: $scope.phone,
                    email: $scope.email,
                    nationality: $scope.nationality,
                    country: $scope.country,
                    skype: $scope.skype,
                    education: $scope.education,
                    countryOfStudy: $scope.countryOfStudy,
                    fieldOfStudy: $scope.fieldOfStudy,
                    eduyear: $scope.eduyear,
                    school: $scope.school,
                    company: $scope.company,
                    position: $scope.position,
                    industry: $scope.industry,
                    experience: $scope.experience,
                    cover: $scope.cover,
                    list1: $scope.list1,
                    list2: $scope.list2

                }


                //Post Request
                $http({
                    method: 'POST',
                    url: '/jobForm',
                    data: data
                }).then(function successCallback(response) {
                        console.log(response.data.Status);
                        if (response.data.Status) {
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('Thanks for your message ' + data.fName)
                                .position($scope.getToastPosition())
                                .hideDelay(5000)
                            );
                        } // for success
                        else {
                            $mdToast.show(

                                $mdToast.simple()
                                .textContent('Something went wrong, Please TRY AGAIN ' + data.fName)
                                .position($scope.getToastPosition())
                                .hideDelay(5000)
                            );
                        } //for error
                    },
                    function errorCallback(response) {
                        $mdToast.show(
                            $mdToast.simple()
                            .textContent('Something went wrong, Please TRY AGAIN ' + data.fName)
                            .position($scope.getToastPosition())
                            .hideDelay(5000)
                        );
                    });
            }
        }
    ]);