'use strict';

//Controller for the themes
//uses Theme-Service and BackUp-Service
angular.module('wdcApp')
.controller('ThemeCtrl',[ '$scope', 'retrieveThemes', '$location', 'themeFactory', 'backUpFactory', '$http', '$q','$timeout',
  function ($scope, retrieveThemes, $location, themeFactory, backUpFactory, $http, $q,$timeout) {

        //Retrieve the themes from the http request in resolve of app.js
        var themesArray = retrieveThemes;
        
        //temporary ID fix
        // for(var i=0; i<themesFromPromise.length; i++){
        //   themesFromPromise[i].id = i;
        // }

        themeFactory.setThemes(themesArray);
        console.log(themesArray);
        $scope.getThemes = themesArray;
        console.log($scope.getThemes);

        $scope.currentPage = themeFactory.currentPage(0);
        $scope.choosenTheme = backUpFactory.themeChoise;
        $scope.pages = themeFactory.getPagesNew(0,1);
        $scope.orderName = false;
        $scope.orderDate = false;
        $scope.orderRating = false;

        $scope.websiteCat = true;
        $scope.webshopCat = false;
        $scope.appCat = false;

        $scope.endOfCategory = false;

        var loadingAnimation = document.getElementById('loadingSpace');
        var body = angular.element( document.querySelector('body'));


        $scope.categoryClick = function(index){
          switch(index){
            case 0:
                    if($scope.websiteCat != true){
                      $scope.websiteCat = true;
                      $scope.webshopCat = false;
                      $scope.appCat = false;
                      $scope.endOfCategory = false;
                      changeCategory('Promotional');
                    }
                    break;
            case 1: if($scope.webshopCat!= true){
                      $scope.websiteCat = false;
                      $scope.webshopCat = true;
                      $scope.appCat = false;
                      $scope.endOfCategory = false;
                      changeCategory('Ecommerce');
                    }
                    break;
            case 2: window.alert("Still in developement, idea to add a 'Coming Soon' pop up! \n -Nicki Boi Fresh");
                    break;
          }
        }
        

        $scope.getNewThemes = function(index){
          themesArray = themeFactory.getNineThemes(index);
          console.log($scope.getThemes);
        };

        $scope.setCurrentPage = function(index){
          $scope.currentPage = themeFactory.currentPage(index);
          console.log($scope.currentPage);
          console.log($scope.numOfPages);

        };

        $scope.getPagesRight = function(){

          $scope.pages = themeFactory.getPagesNew($scope.currentPage,($scope.currentPage));

        };
        $scope.getPagesLeft = function(){

          $scope.pages = themeFactory.getPagesNew($scope.currentPage,($scope.currentPage+1));
        };

        $scope.getPagesByNumberClick = function (value, oldValue){

          $scope.pages = themeFactory.getPagesNew(value,value+1);
        };

        $scope.setChoosenTheme = function(index){
          backUpFactory.themeChoise = index;
        };
        $scope.getTheme = function(index){
          return themeFactory.selectedTheme(index);
        };


        $scope.sortRating = function(){
          themeFactory.sortByRating(themesArray);
          //themesArray = themeFactory.getNineThemes(0);
          $scope.orderName = false;
          $scope.orderDate = false;
          $scope.orderRating = true;
        };
        $scope.sortDate = function(){
          themeFactory.sortByDate(themesArray);
          //themesArray = themeFactory.getNineThemes(0);
          $scope.orderName = false;
          $scope.orderDate = true;
          $scope.orderRating = false;
        };
        $scope.sortName = function(){
          themeFactory.sortByName(themesArray);
          //themesArray = themeFactory.getNineThemes(0);
          $scope.orderName = true;
          $scope.orderDate = false;
          $scope.orderRating = false;
        };
        $scope.getReverse = function(){
          themeFactory.revThemes(themesArray);
          //themesArray = themeFactory.getNineThemes(0);
          $scope.setCurrentPage(0);
          $scope.getPagesByNumberClick(0,1);
        }



        //Start of function used to find when at the bottom of the page
        function getScrollXY() {
          var scrOfX = 0, scrOfY = 0;
          if( typeof( window.pageYOffset ) == 'number' ) {
          //Netscape compliant
            scrOfY = window.pageYOffset;
            scrOfX = window.pageXOffset;
          } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
            //DOM compliant
            scrOfY = document.body.scrollTop;
            scrOfX = document.body.scrollLeft;
          } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
            //IE6 standards compliant mode
            scrOfY = document.documentElement.scrollTop;
            scrOfX = document.documentElement.scrollLeft;
          }
          return [ scrOfX, scrOfY ];
        }

        function getDocHeight() {
          var D = document;
          return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
            );
        }

        document.addEventListener("scroll", function (event) {
          console.log("scroll");
          var earlyPop = 325;
          var height = getDocHeight() - earlyPop;
          var scroll = getScrollXY()[1] + window.innerHeight;
          var diff = scroll - height;
          if (height <= scroll) {
            infiniteScroll();
          }
        });
        //End of scroll sfunctions

        var allowFunction = true;
        function infiniteScroll(){
            if(allowFunction){
              allowFunction = false
              startLoading();
            }else{
              return;
            }
            console.log("pop");
            //Need a promise to request nine more themes,

            themeFactory.requestNineThemes().then(function(res){
              console.log('yaboitroy');
              console.log(res);
              if(res.length==0){
                console.log('lastTheme');
                lastTheme();
              }
              pushNewThemes(res);
            })
        }

        function pushNewThemes(themes){
          $timeout(function(){
                
                for(var i=0; i<themes.length; i++){
                  var newTheme = themes[i];
                  themesArray.push(newTheme);
                }
                console.log(themesArray);
                $scope.getThemes = themesArray;
                $scope.$apply();
              });

        }

        function lastTheme(){
          $scope.endOfCategory=true;
          endLoading();
        }

        function startLoading(){
          loadingAnimation.style.visibility='visible';
          body.addClass('stop-scrolling');
        }
        function endLoading(){
          setTimeout(function(){
            loadingAnimation.style.visibility='hidden';
            body.removeClass('stop-scrolling');
          }, 1000);
        }

        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
          allowFunction = true;
          endLoading();
        });

        

        function changeCategory(catChange){
          themeFactory.setCurrentCategory(catChange);
          startLoading();
          allowFunction = true;
          themesArray = [];
          var promiseReturn =  $http.get('http://wd-agency.com:5062/api/themes?start=0&end=9&isVisible=true&category='+ catChange).then(function(res) {
                          pushNewThemes(res.data);
                          endLoading();
                        });      
        }
}]);
