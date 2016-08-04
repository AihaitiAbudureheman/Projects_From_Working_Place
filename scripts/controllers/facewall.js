'use strict';

/**
 * @ngdoc function
 * @name wdcApp.controller:FacewallctrlCtrl
 * @description
 * # FacewallctrlCtrl
 * Controller of the wdcApp
 */
angular.module('wdcApp')
    .controller('FacewallCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $http.get('assets/wordings/facewall/facewall_en.json').success(function(data) {
            $scope.faces = data;
        });

        var text = "WIREDELTA",
            soFar = "";

        var visible = document.querySelector(".visible"),
            invisible = document.querySelector(".invisible");

        invisible.innerHTML = text;
        var t = setInterval(function() {
            soFar += text.substr(0, 1),
                text = text.substr(1);

            visible.innerHTML = soFar;
            invisible.innerHTML = text;

            if (text.length === 0) clearInterval(t);

        }, 1000)
        $timeout(function() {
            document.getElementById('wrapper_layer').style.display = "none";
        }, 10000)
    }]);
