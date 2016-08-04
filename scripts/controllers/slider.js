'use strict';

//Controller for the Slider of different themes
//will only need the slider service
angular.module('wdcApp')
  .controller('SliderCtrl',[ '$scope', 'sliderFactory', '$timeout', '$interval', 
      function ($scope, sliderFactory, $timeout, $interval) {
      
      //slides variable will get the first six themes - return is an array
      $scope.slides = sliderFactory.firstSix();

      //if the slider is finished - reload it and start it new after a specific time
      //$scope.$on('LastRepeaterElement', 
      //  function(){
      //    //delete the first image and add it to the end / show new first six themes
      //    $timeout(function(){
      //      sliderFactory.firstWillBeLast();
      //      $scope.slides = sliderFactory.firstSix();            

      //    }, 3000); //after 3sec 
      //  });  

        var promise = $interval(function(){
          sliderFactory.firstWillBeLast();
          $scope.slides = sliderFactory.firstSix();       
        }, 3000); 

        $scope.$on('$destroy', function () { $interval.cancel(promise); });          
  }]);
        
        
        

