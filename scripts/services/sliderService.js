//Service for the Slider
'use strict';
angular.module('wdcApp')
	.service('sliderFactory', 
		function(){

			//Array, which have specific themes you wanna show in your slider
			//can have as many as you want			
			var images = [

							'images/slider/Aomine_homepage_new.jpg',
							'images/slider/daich_homepage_new.jpg',
							'images/slider/hitomi_homepage_new.jpg',
							'images/slider/megumi_homepage_new.jpg',
							'images/slider/shino_homepage_new.jpg',
							'images/slider/Aomine_homepage_2_new.jpg',
							'images/slider/ren_homepage_new.jpg'

			];
			//returns all images for the slider in an array
			this.getImages = function(){

				return images;

			};
			//returns one specific image out of the array
			this.getImage = function(index){

				return images[index];

			};
			//will delete the first image of your array and will add it at the end of your image array
			this.firstWillBeLast = function(){
				
				var first = images[0];
				images.shift();
				images.push(first);

			};
			//will only pick the first 6 images of your image array
			//you will not need more than these, because in one run you will only see 6 images
			this.firstSix = function(){

				var firstSixImages = [];
				for(var i = 0; i<6;i++){

					firstSixImages[i] = images[i];

				}				
				return firstSixImages;

			};
		});