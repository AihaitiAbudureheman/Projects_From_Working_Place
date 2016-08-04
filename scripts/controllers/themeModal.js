angular.module('wdcApp')
.controller('themeModal', ['$scope','$mdDialog','$mdMedia', '$sce', '$location', 'themeFactory', function($scope, $mdDialog, $mdMedia, $sce, $location,themeFactory) {
  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.themeReference = '';
  $scope.previewUrl ='';
  $scope.previewTitle ='';
  $scope.iframeReference = '';
  $scope.toolbarReference = '';
  $scope.tabsReference = '';
  $scope.modalReference = '';
  $scope.tabsWrapReference = '';

  $scope.displayHeader = function(event){
    var element = event.target;
    console.log(element);
    var headerHolder = element.nextElementSibling;
    console.log(headerHolder);

    var elementVariables = checkOverflow(element);
    var conditional = elementVariables[0];
    var originalWidth = elementVariables[1];
    var overflowWidth = elementVariables[2];
    console.log(overflowWidth);
    if(conditional){
      element.style.width = overflowWidth;
      console.log(element);
      angular.element(element).addClass('overflowHover');
      angular.element(headerHolder).removeClass('ng-hide');
      setTimeout(function() {
          angular.element(element).removeClass('overflowHover');
          angular.element(headerHolder).addClass('ng-hide');
      }, 2000);
    }
  }
  
  function checkOverflow(el){
   var curOverflow = el.style.overflow;

   if ( !curOverflow || curOverflow === "visible" ){
      el.style.overflow = "hidden";
   }
   var isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
   el.style.overflow = curOverflow;
   return [isOverflowing,el.clientWidth,el.scrollWidth];
  }

  $scope.setElements = function(iframe,toolbar,tabs,tabsWrap,modal){
    iframeReference = iframe;
    toolbarReference = toolbar;
    tabsReference = tabs;
    tabsWrapReference = tabsWrap;
    modalReference = modal;
    console.log(modalReference);
    //Event Listener for horizontal scroll, adds margin to the title and tab bars 
    modal.addEventListener("scroll", function (event) {
      console.log("scroll");
      var xScroll = modalReference.scrollLeft;
      toolbarReference.style.marginLeft = xScroll.toString() + 'px';
      var tabLeftMargin = parseInt(tabsReference.style.marginLeft,10);
      var wrapperMargin = xScroll+tabLeftMargin;
      tabsWrapReference.style.marginLeft = xScroll.toString() + 'px';
      console.log(wrapperMargin)
      console.log(xScroll, "    ", (xScroll+1) );
    });
  }

  $scope.showAdvanced = function(ev,theme) {
    themeReference = theme;
    //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/themeModal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      onShowing:function(){
        console.log('show');
        var footer = document.getElementById('footerID');
        footer.style.zIndex = 70;
        console.log(footer);
      },
      onRemoving:function(){
        var footer = document.getElementById('footerID');
        footer.style.zIndex = 1200;
        console.log(footer);
      }
    })
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };


  $scope.showDemo = function(ev,url,title) {
    previewUrl = url;
    previewTitle = title;
    $mdDialog.show({
      templateUrl: 'views/themeDemo.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      controller:DemoController,
      onShowing:function(){
        console.log('show');
        var footer = document.getElementById('footerID');
        footer.style.zIndex = 70;
        console.log(footer);
      },
      onRemoving:function(){
        var footer = document.getElementById('footerID');
        footer.style.zIndex = 1200;
        console.log(footer);
      },
      onComplete:function(){
              var iframe = document.getElementById('demoBox');
              var toolbar = document.getElementById('demoToolbar');
              var tabs = document.getElementById('demoTabs').getElementsByTagName('md-tabs-wrapper')[0].getElementsByTagName('md-tabs-canvas')[0].getElementsByTagName('md-pagination-wrapper')[0];
              var tabsWrap = document.getElementById('demoTabs').getElementsByTagName('md-tabs-wrapper')[0].getElementsByTagName('md-tabs-canvas')[0];
              var modal = document.getElementById('demoModalForm');
              console.log("onComplete");
              $scope.setElements(iframe,toolbar,tabs,tabsWrap,modal);
            }
  
    })
  };



}]);

function DemoController($scope, $mdDialog, $mdMedia,$mdUtil, $sce) {
    $scope.demoUrl = $sce.trustAsResourceUrl(previewUrl);
    $scope.demoTitle = previewTitle;
    /* prints pop whenever modal goes to sm or xs
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      console.log('screen');
    });
    */

    $scope.responsive = function() {
      console.log(iframeReference);
      iframeReference.style.width = '99.6%';
      iframeReference.style.height = '1000px';
    };
    $scope.desktop = function() {
      console.log(iframeReference);
      iframeReference.style.width = '1300px';
      iframeReference.style.height = '1000px';
    };
    $scope.tablet = function() {
      console.log(iframeReference);
      iframeReference.style.width = '950px';
      iframeReference.style.height = '1000px';
    };
    $scope.mobile = function() {
      console.log(iframeReference);
      iframeReference.style.width = '380px';
      iframeReference.style.height = '600px';
    };
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }


function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      console.log(answer);
      switch(answer){
        case 0: window.location = themeReference.buyDomainUrl.withDomainUrl;
                break;
        case 1: window.location = themeReference.buyDomainUrl.withoutDomainUrl;
                break;
      }
      $mdDialog.hide(answer);
    };
  }
