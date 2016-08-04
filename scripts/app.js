'use strict';

/**
 * @ngdoc overview
 * @name wdcApp
 * @description
 * # wdcApp
 *
 * Main module of the application.
 */
 angular
 .module('wdcApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'angular-click-outside',
    'ui.router',
    'duScroll',
    'duParallax',
    'ui.bootstrap',
    'ngDragDrop',
    'sticky',
    'angular-svg-round-progress',
    'slickCarousel',
    'sticky',
    'angular-svg-round-progress',
    'slickCarousel',
    'pascalprecht.translate',
    'updateMeta'
    ])

 .config(function($urlRouterProvider, $stateProvider, $translateProvider,$mdThemingProvider,$locationProvider) {

    //hmtl5 mode to remove #
    $locationProvider.html5Mode(true);
    //MD TABS THEMEING
    $mdThemingProvider.theme('default')
        .accentPalette('light-blue');

    $mdThemingProvider.theme('loginTheme')
        .primaryPalette('light-blue')
        .dark();
    //-------------STATES Starts here --------------------//

    //Setting up redirects for plain URLs and default
    $urlRouterProvider
        .when('/about', '/about/en')
        .when('/process', '/process/en')
        .when('/services', '/services/en')
        .when('/promotional', '/promotional/en')
        .when('/ios', '/ios/en')
        .when('/e_commerce', '/e_commerce/en')
        .when('/design', '/design/en')
        .when('/hosting', '/hosting/en')
        .when('/marketing', '/marketing/en')
        .when('/android', '/android/en')
        .when('/hybrid', '/hybrid/en')
        .when('/landingpage', '/landingpage/en')
        .when('/technologies', '/technologies/en')
        .when('/programminglanguages', '/programminglanguages/en')
        .when('/frameworks', '/frameworks/en')
        .when('/references', '/references/en')
        .when('/contact', '/contact/en')
        .when('/pricing', '/pricing/en')
        .when('/jobs', '/jobs/en')
        .when('/facewall', '/facewall/en')
        .when('/pricing', '/pricing/en')
        .when('/shop','/shop/en')
        .otherwise('/');

    //setting up states
    $stateProvider
    //Home Page State
    .state('main', {
        url: '/:langcode',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'home',
        resolve:{
        //Promise in the state transistion to fetch the themes from http, passed to the ReferencesCtrl
            getTestimonials: function($http){
                    return $http.get('http://wd-agency.com:5062/api/testimonials').then(function(res) {
                        return res.data;
                    });
                }
            }

        })
        //About Page State
        .state('about', {
            url: '/about/:langcode',
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            activetab: 'about'
        })
        //Process Page State
        .state('process', {
            url: '/process/:langcode',
            templateUrl: 'views/process.html',
            controller: 'ProcessCtrl'
        })
        //Services Page State
        .state('services', {
            url: '/services/:langcode',
            templateUrl: 'views/services.html',
            controller: 'ServicesCtrl',
            resolve:{
        //Promise in the state transistion to fetch the services api references from http, passed to the ServicesCtrl
            getServices: function($http){
                return $http.get('http://wd-agency.com:5062/api/services').then(function(res) {
                        return res.data;
                    });
                }

            }

        })
        //promotional Page State
        .state('promotional', {
            url: '/promotional/:langcode',
            templateUrl: 'views/promotional.html',
            controller: 'PromotionalCtrl',
            resolve:{
              //promises in the state to fetch the promotional api references from http, and pass them to PromotionalCtrl
              getPromotional: function($http){
                return $http.get('http://wd-agency.com:5062/api/services/file/promotional').then(function(res){
                  return res.data;
                });
              }
            }
        })
        //Service -> Ios page state
        .state('ios', {
            url: '/ios/:langcode',
            templateUrl: 'views/ios.html',
            controller: 'IosCtrl',
            resolve:{
              //promises in the state to fetch the ios api references from http, and pass them to IosCtrl
              getIos: function($http){
                return $http.get('http://wd-agency.com:5062/api/services/file/ios').then(function(res){
                  return res.data;
                });
              }
            }
        })
        //E-commerce Page State
        .state('ecommerce', {
            url: '/ecommerce/:langcode',
            templateUrl: 'views/e_commerce.html',
            controller: 'ecommerceCtrl',
            resolve:{
              //promises in the state to fetch the ecommerce api references from http, and pass them to ecommerceCtrl
              getEcom: function($http){
                return $http.get('http://wd-agency.com:5062/api/services/file/ecommerce').then(function(res){
                  return res.data;
                });
              }
            }
        })
        //service -> design page
        .state('design', {
            url: '/design/:langcode',
            templateUrl: 'views/design.html',
            controller: 'DesignCtrl'
        })
        //service -> hosting page
        .state('hosting', {
            url: '/hosting/:langcode',
            templateUrl: 'views/hosting.html',
            controller: 'HostingCtrl'
        })
        //service -> hosting page
        .state('marketing', {
            url: '/marketing/:langcode',
            templateUrl: 'views/marketing.html',
            controller: 'MarketingCtrl'
        })
        //Service -> android page state
        .state('android', {
            url: '/android/:langcode',
            templateUrl: 'views/android.html',
            controller: 'AndroidCtrl'
        })
        //Service -> hybrid page state
        .state('hybrid', {
            url: '/hybrid/:langcode',
            templateUrl: 'views/hybrid.html',
            controller: 'HybridCtrl'
        })
        //Landing Page State
        .state('landingpage', {
            url: '/landingpage/:langcode',
            templateUrl: 'views/landingpage.html',
            controller: 'landingpageCtrl',
            resolve:{
              //promises to get the landingpage api references from the server and pass to landingpageCtrl
              getLand:function($http){
                return $http.get('http://wd-agency.com:5062/api/services/file/landingpage').then(function(res){
                  return res.data;
                });
              }
            }
        })
        //Technologies Page State
        .state('technologies', {
            url: '/technologies/:langcode',
            templateUrl: 'views/technologies.html',
            controller: 'TechnologiesCtrl'
        })
        //Programming languages Page State
        .state('programminglanguages', {
            url: '/programminglanguages/:langcode',
            templateUrl: 'views/programmingLanguages.html',
            controller: 'programmingLanguagesCtrl'
        })
        //Frameworks Page State
        .state('frameworks', {
            url: '/frameworks/:langcode',
            templateUrl: 'views/frameworks.html',
            controller: 'frameworksCtrl'
        })
        //Database Page State
        .state('databases', {
            url: '/databases/:langcode',
            templateUrl: 'views/databases.html',
            controller: 'databaseCtrl'
        })
        // References Page State
        .state('references', {
            url: '/references/:langcode',
            templateUrl: 'views/references.html',
            controller: 'ReferencesCtrl',
            resolve:{
        //Promise in the state transistion to fetch the themes from http, passed to the ReferencesCtrl
            getReferences: function($http){
                return $http.get('http://wd-agency.com:5062/api/references').then(function(res) {
                        return res.data;
                    });
                }
            }
        })
        // Contact Page State
        .state('contact', {
            url: '/contact/:langcode',
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        // Pricing Page State
        .state('pricing', {
            url: '/pricing/:langcode',
            templateUrl: 'views/pricing.html',
            controller: 'PricingCtrl'
        })
        // Jobs Page State
        .state('jobs', {
            url: '/jobs/:langcode',
            templateUrl: 'views/jobs.html',
            controller: 'JobsCtrl',
            params: {
                'scrollTo': ''
            },
            resolve:{
        //Promise in the state transistion to fetch the jobs information from http, passed to the JobsCtrl
            getJobs: function($http){
                    return $http.get('http://wd-agency.com:5062/api/jobs').then(function(res) {
                        return res.data;
                    });
                }
            }
        })
        //Individual Job Pages State
        .state('job', {
            url: '/jobs/:id/:langcode',
            templateUrl: 'views/job.html',
            controller: 'JobCtrl'
        })
        // Facewall Page State
        .state('facewall', {
            url: '/facewall/:langcode',
            templateUrl: 'views/facewall.html',
            controller: 'FacewallCtrl'
        })

        .state('shop',{
            url: '/shop/:langcode',
            templateUrl:'views/theme.html',
            controller:'ThemeCtrl',
            resolve:{
                    //Promise in the state transistion to fetch the themes from http, passed to the ThemeCtrl
                    //Retrieving all of the themes right now as we will  need more specific request calls to the server
                    retrieveThemes: function($http){
                        return $http.get('http://wd-agency.com:5062/api/themes?start=0&end=9&isVisible=true&category=Promotional').then(function(res) {
                          return res.data;
                      });
                    }
                    /*
                    retrieveThemes: function($http){
                        return $http.get('http://wd-agency.com:5062/api/themes?start=0&end=10&isVisible=true').then(function(res) {
                          return res.data;
                      });
                    }
                    */
                }
            })
        ;




        //---------------states end=----------------------//
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/wordings/all/all_',
            suffix: '.json'
        });

    // load 'en' table on startup
    var url_lang = window.location.href.split("/").pop(-1);
    if(url_lang==null){
        $translateProvider.preferredLanguage('en');
    }
    else if (url_lang == "en" || url_lang == "fr" || url_lang == "es") {
        $translateProvider.preferredLanguage(url_lang);
    } else {
        $translateProvider.preferredLanguage('en');
    }

})

.run(function($anchorScroll, $window, $rootScope, $stateParams, $location) {

    $rootScope.$on("$stateChangeSuccess", function(event, currentState, previousState) {
        $window.scrollTo(0, 0);
    });

});
