'use strict';
/**
 * @ngdoc function
 * @name wdcApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the wdcApp
 */

angular.module('wdcApp')

.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(files, uploadUrl){
               var fd = new FormData();
               fd.append('file1', files.file1);
               fd.append('file2', files.file2);
               fd.append('resume', files.resume);
               $http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){
               })
            
               .error(function(){
               });
            }
         }]);
