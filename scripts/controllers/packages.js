'use strict';

//Controller for the different packages
//uses the package-service and backUp-service
angular.module('wdcApp')
.controller('PackagesCtrl',[ '$scope', 'packageFactory','$location', 'backUpFactory','$window', 
  function ($scope, packageFactory, $location, backUpFactory,$window) {
    //The Resize function for the packages to keep them they same heigh on word breaks
    //Problem was at the FREE PROMOTIONAL WEBSITE title and the features word breaks.
    var resizePackageFunction =
            function(){
                //Features wording
                var packages = document.getElementsByClassName("packageHeadNew");
                //package title
                var titleSpacing = document.getElementsByClassName("packageTitle");
                //make sure they are accesible
                console.log( packages);
                console.log(titleSpacing);
                if(packages.length != 0 && titleSpacing != 0){
                  console.log(packages.length);
                  //the first package was always the tallest due to wording, thus by default
                  //I grab this as the reference height. This will cause issues if the wording
                  //is too change.
                  //TODO Make Dynamic for future proofing in wording change.
                  var maxHeight = packages[0].clientHeight;
                  var titleHeight = titleSpacing[0].clientHeight;
                  console.log(maxHeight);
                  for(var i=1; i<packages.length; i++){
                    packages[i].style.height=maxHeight;
                    titleSpacing[i].style.height = titleHeight;
                  }
                }else{
                  console.log("packages was not loaded yet");
                }
              };

    console.log("pacakges controller");
    //Try to run it first.    
    resizePackageFunction();



    var count = true;


        $scope.$watch(function(){
         return $window.innerWidth;
       }, function(value) {
        $scope.width = value;
        if(value <= 991 && count === true){
          angular.element('#rightArrow').removeClass();
          angular.element('#rightArrow').addClass("col-xs-1 vcenter arrow2");  
          angular.element('#leftArrow').removeClass();
          angular.element('#leftArrow').addClass("col-xs-1 vcenter arrow2 opacityOfArrow");  
          count = false;
        }else if(value > 991){
          angular.element('#rightArrow').removeClass();
          angular.element('#rightArrow').addClass("col-xs-1 vcenter arrow");
          angular.element('#leftArrow').removeClass();
          angular.element('#leftArrow').addClass("col-xs-1 vcenter arrow");
          packageFactory.resetPackage();
          count = true; 
        }
      });

        $scope.choise = 0;
        $scope.changeState = function(choise,index){

          packageFactory.toAddRemove(choise,index);
        };
        //variable will get an array with all packages 
        $scope.packages = function(){
          return packageFactory.getFirstThree();
        };        

        //will return the original package array
        $scope.packageClone = function(index){          
          return packageFactory.getPackageClone(index);
        };
        //sets the choosen package in the backUp-service
        $scope.packageChoise = function(index){
          console.log(index);
          backUpFactory.packageChoise = index; 

        };
        //will send you to a new page view - same like by themes-controller -> should delete one function?!
        $scope.go = function (hash) {
          $location.path( hash );
        };
        //gives you the choosen package
        $scope.choise = backUpFactory.packageChoise;     
        //variable will get one specific package
        $scope.package = function(index){          
          return packageFactory.getPackage(index);
        };        

        $scope.addGlyph = function(index){

          if(index === 0 || index === 3){
            return 'freePackage';
          }else if(index === 4 || index === 5 ||index === 6){
            return 'glyphicon glyphicon-ok';
          }
        };

        $scope.shownPackage = 0;

        $scope.setShownPackage = function(index){

          if(index === 1){
            packageFactory.removeFirst();
            packageFactory.getFirstThree();
          }else{
            packageFactory.removeLast();
            packageFactory.getFirstThree();
          }
          $scope.shownPackage = $scope.shownPackage + index;
          console.log($scope.shownPackage);
          packageFactory.showLeftArrow($scope.shownPackage);
          packageFactory.showRightArrow($scope.shownPackage);

        };

        $scope.reset = function(){
          // New code I added to this function, runs when get now is clicked.
          // Removes the event listener so they don't continue to run on the next page.
          window.removeEventListener('load',resizePackageFunction);
          window.removeEventListener('resize',resizePackageFunction);
          //
          packageFactory.resetPackage();
        };


      }]);