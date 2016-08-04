'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the wdcApp
 */

angular.module('wdcApp')
    .controller('ContactCtrl', ['$scope', 'fileUpload', '$http', '$mdToast', '$animate',
        function($scope, fileUpload, $http, $mdToast, $animate) {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            var contactHeight = document.getElementById('contact').offsetHeight         
            btnAnimate();
            function btnAnimate() {
             document.getElementById('contact_btn').classList.add('contact_btn');
             document.getElementById('project_btn').classList.add('project_btn');
            };

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

            $scope.uploadFile = function() {
                var file1 = $scope.file1;
                var file2 = $scope.file2;
                console.log('file is ');
                console.dir(file1);
                console.dir(file2);
                if (typeof file1 === 'undefined' || file1 === null) {
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
                var files = {file1:file1,
                            file2:file2}
                fileUpload.uploadFileToUrl(files, uploadUrl);

            };


            this.questionMail = function() {

                var data = ({
                    name: this.name,
                    email: this.email,
                    company: this.company,
                    website: this.website,
                    message: this.message,
                    option1: $scope.option1,
                    option2: $scope.option2
                })

                //Post Request
                $http({
                    method: 'POST',
                    url: '/questionMail',
                    data: data
                }).then(function successCallback(response) {
                        console.log(response.data.Status);
                        if (response.data.Status) {
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('Thanks for your message ' + data.name)
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
                            .textContent('Something went wrong, Please TRY AGAIN ' + data.name)
                            .position($scope.getToastPosition())
                            .hideDelay(5000)
                        );
                    });
            };

            this.kickstartMail = function() {
                var data = {
                    lName: this.lName,
                    fName: this.fName,
                    phone: this.phone,
                    email: this.email1,
                    company: this.company1,
                    website: this.website1,
                    message: this.message1,
                    urgency: $scope.urgency,
                    option1: $scope.option1k,
                    option2: $scope.option2k
                }

                //Post Request
                $http({
                    method: 'POST',
                    url: '/kickstartMail',
                    data: data
                }).then(function (response) {
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
                    function (response) {
                        $mdToast.show(
                            $mdToast.simple()
                            .textContent('Something went wrong, Please TRY AGAIN ' + data.fName)
                            .position($scope.getToastPosition())
                            .hideDelay(5000)
                        );
                });

            };

        }
    ]);
