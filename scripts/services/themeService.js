// Service with all themes
// will be seperated in different catagories later -- need catagories^
'use strict';
angular.module('wdcApp')
	.service('themeFactory',[ '$http', '$q',
		function($http, $q){

			
			//variable, which holds all themes, used for testing, real data from
			var themes = []
			/* Old array for data, switching to get request from server
			[

						{
							id: 0,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14' // category/categories for the theme
						},
						{
							id: 1,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 2,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 3,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 4,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 5,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 6,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 7,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14' // category/categories for the theme
						},
						{
							id: 8,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 9,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 10,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 11,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 12,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 13,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 14,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14' // category/categories for the theme
						},
						{
							id: 15,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 16,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 17,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 18,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 19,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 20,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 21,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14' // category/categories for the theme
						},
						{
							id: 22,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 23,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 24,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 25,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 26,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 27,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 28,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14' // category/categories for the theme
						},
						{
							id: 29,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 30,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 31,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 32,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 33,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 34,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'

						},{
							id: 35,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE', // category/categories for the theme
							rating: 1,
							date: '2016-01-14'
						},
						{
							id: 36,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 2,
							date: '2016-03-14'
						},
						{
							id: 37,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 3,
							date: '2016-04-14'
						},
						{
							id: 38,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						},
						{
							id: 39,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-03-14'
						},
						{
							id: 40,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-02-14'
						},
						{
							id: 41,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-01-14'
						},
						{
							id: 42,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE', // category/categories for the theme
							rating: 4,
							date: '2016-05-13'
						},
						{
							id: 43,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 3,
							date: '2016-05-12'
						},
						{
							id: 44,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 2,
							date: '2016-05-11'
						},
						{
							id: 45,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 3,
							date: '2016-05-18'
						},
						{
							id: 46,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 5,
							date: '2016-05-15'
						},
						{
							id: 47,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 3,
							date: '2016-05-13'
						},
						{
							id: 48,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 2,
							date: '2016-05-12'
						},
						{
							id: 49,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE', // category/categories for the theme
							rating: 1,
							date: '2016-05-11'
						},
						{
							id: 50,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 1,
							date: '2016-05-02'
						},
						{
							id: 51,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 3,
							date: '2016-05-19'
						},
						{
							id: 52,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 5,
							date: '2016-05-08'
						},
						{
							id: 53,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-05'
						},
						{
							id: 54,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 5,
							date: '2016-05-19'
						},
						{
							id: 55,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 2,
							date: '2016-05-17'
						},
						{
							id: 56,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE', // category/categories for the theme
							rating: 3,
							date: '2016-05-14'
						},
						{
							id: 57,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-10'
						},
						{
							id: 58,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 5,
							date: '2016-05-10'
						},
						{
							id: 59,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 1,
							date: '2016-05-15'
						},
						{
							id: 60,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-09'
						},
						{
							id: 61,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 5,
							date: '2016-05-13'
						},
						{
							id: 62,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 1,
							date: '2016-05-14'
						},
						{
							id: 63,		//identification variable
							name: 'AOMINE',		// name
							imgUrl: 'images/slider/hole_image/Aomine.jpg',
							imageHeight: 6984,
							category: 'new',
							price: 'FREE', // category/categories for the theme
							rating: 3,
							date: '2016-05-14'
						},
						{
							id: 64,
							name: 'DAICHI',
							imgUrl: 'images/slider/hole_image/daichi.jpg',
							imageHeight: 2697,
							category: 'new',
							price: 'FREE',
							rating: 3,
							date: '2016-05-16'
						},
						{
							id: 65,
							name: 'HITOMI',
							imgUrl: 'images/slider/hole_image/hitomi.jpg',
							imageHeight: 1721,
							category: 'new',
							price: 'FREE',
							rating: 2,
							date: '2016-05-14'
						},
						{
							id: 66,
							name: 'MEGUMI',
							imgUrl: 'images/slider/hole_image/megumi.jpg',
							imageHeight: 5354,
							category: 'new',
							price: 'FREE',
							rating: 3,
							date: '2016-05-10'
						},
						{
							id: 67,
							name: 'SHINO',
							imgUrl: 'images/slider/hole_image/shino.jpg',
							imageHeight: 4179,
							category: 'new',
							price: 'FREE',
							rating: 5,
							date: '2016-05-15'
						},
						{
							id: 68,
							name: 'AOMINE2',
							imgUrl: 'images/slider/Aomine_homepage_2.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 2,
							date: '2016-05-13'
						},
						{
							id: 69,
							name: 'REN',
							imgUrl: 'images/slider/ren_homepage.jpg',
							imageHeight: 1216,
							category: 'new',
							price: 'FREE',
							rating: 4,
							date: '2016-05-14'
						}

			]*/
			;

			var themesCloned = [];
			var firstTheme;
			this.setThemes = function(themeArray){
				themes = themeArray;
				console.log(themes);
				themesCloned = themes.slice(0);
				firstTheme = themesCloned[0];
				console.log(themesCloned);
			}

			//Category selectory for retreving themes based off of:
			//Website(promitonal) -> 1
			//webshop(ecommerce) -> 2
			//??app(mobile app) -> ??
			//default is 1

			var currentCategory = "Promotional";

			this.setCurrentCategory = function(category){
				currentCategory = category;
				pageCount = 0;

			}

			var pageCount = 0;
			var newNineThemes = [];
			this.requestNineThemes = function(){
				var deferred = $q.defer()
				pageCount = pageCount + 9;
				var pageStart = pageCount;
				var pageEnd = pageCount+9;
				$http.get('http://wd-agency.com:5062/api/themes?start='+pageStart.toString()+'&end='+pageEnd.toString()+'&isVisible=true&category='+currentCategory.toString()).then(function(res) {
                          console.log('before forEach', res.data);
                          //Assign IDs to each theme, required for themeService.
                          /* IDs required for pagination, not needed if using infinite scroll.
                          var i = 0;
                          angular.forEach(res.data, function(obj) {

                            obj.id = i;
                            i++;
                          });
                            i = undefined;
                          console.log('after forEach', res.data);
                          */

                          newNineThemes = res.data;
                          console.log(newNineThemes);
                          deferred.resolve(newNineThemes);
                        }, function(err){
                        	console.log(err);
                        	deferred.reject(err);
                        });   
                return deferred.promise; 
			}
			

			// Holds the selected Theme
			this.selectedTheme = function(index){
				return themes[index];
			};
			//Clone the Array which holds all themes
			
			

			//returns the cloned array with the themes
			this.getClonedThemes = function(){
				return themesCloned;
			};

			
			this.getNineThemes = function(index){

				var array = [];
				var l = themesCloned.length;
				var i = pageCount * 9;
				console.log(themesCloned[i].category._id);
				while(array.length<9){
					console.log('loop',i);
					if((themesCloned[i].category._id==currentCategory)&&themesCloned[i].isVisible){
						array.push(themesCloned[i]);
						console.log('push');
					}
					i++;
					if(i==l){
						break;
					}
				}

				pageCount++;
				/*
				for(var i = (index*9); i<((index*9)+9);i++){

					if(i < l){
					array.push(themesCloned[i]);
					}else{
						break;
					}
				}
				*/

				return array;
			};

			this.getPages = function(){

				var l = Math.ceil(themes.length/9);
				var pages = [];

				for(var i = 0; i < l; i++){

					pages.push({id: i, title: '' + (i+1)});

				}

				return pages;

			};

			this.getPagesNew = function(index, old){

				var l = Math.ceil(themes.length/9);
				var pages = [];
				var length;

				if(old < index){
					if((index+4) >= l){
						for(var i = l-4; i < l;i++){

							if(i === index){
								pages.push({id: i, title: '' + (i+1), class: 'page-item active disabled'});
							}else{
								pages.push({id: i, title: '' + (i+1), class: 'page-item'});
							}

						}
					}else{
						for(var i = index; i < (index+4);i++){

							if(i === index){
								pages.push({id: i, title: '' + (i+1), class: 'page-item active disabled'});
							}else{
								pages.push({id: i, title: '' + (i+1), class: 'page-item'});
							}
						}
					}
				}else{
					if((index-3) <= 0){
						length = 3;
					}else{
						length = index;
					}
					for(var i = length; i >= (length -3);i--){

						if(i === index){
								pages.push({id: i, title: '' + (i+1), class: 'page-item active disabled'});
							}else{
								pages.push({id: i, title: '' + (i+1), class: 'page-item'});
							}
					}
					pages.reverse();

				}

				return pages;


			};

			this.currentPage = function(index){

				var page = index;
				var l = Math.ceil(themes.length/9);

				if(page === 0){
              		angular.element('#buttonPrev').addClass("disabled");
				}else if(page === l-1 ){
					angular.element('#buttonNext').addClass("disabled");
				}else{

					angular.element('#buttonPrev').removeClass();
              		angular.element('#buttonPrev').addClass("page-item");

              		angular.element('#buttonNext').removeClass();
              		angular.element('#buttonNext').addClass("page-item");

				}
				return page;
			};

			this.sortByRating = function(themesArray){

				angular.element('#sortDate').removeClass();
				angular.element('#sortName').removeClass();
				angular.element('#sortRating').addClass('active');

				return themesArray.sort(function(rat1, rat2){
						var ratingA = rat1.popularity; 
						var ratingB = rat2.popularity;
						if (ratingA < ratingB) {
    						return 1;
  						}
  						if (ratingA >ratingB) {
    						return -1;
  						}
  						return 0;
				});

			};

			this.sortByDate = function(themesArray){

				angular.element('#sortRating').removeClass();
				angular.element('#sortName').removeClass();
				angular.element('#sortDate').addClass('active');
				return themesArray.sort(function(rat1, rat2){
					var dateA = rat1.dateAdded;
  					var dateB = rat2.dateAdded;
  						if (dateA < dateB) {
    						return 1;
  						}
  						if (dateA > dateB) {
    						return -1;
  						}
  						return 0;
				});

			};

			this.sortByName = function(themesArray){

				angular.element('#sortRating').removeClass();
				angular.element('#sortDate').removeClass();
				angular.element('#sortName').addClass('active');
				return themesArray.sort(function(rat1, rat2){
					var nameA = rat1.title.toUpperCase();
  					var nameB = rat2.title.toUpperCase();
  						if (nameA < nameB) {
    						return -1;
  						}
  						if (nameA > nameB) {
    						return 1;
  						}
  						return 0;
				});

			};

			this.revThemes = function(themesArray){
				return themesArray.reverse();
			}


		}]);
