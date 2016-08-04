//Service with content about the different packages
'use strict';
angular.module('wdcApp')
	.service('packageFactory', 
		function(){

			//Array with Objects
			//each object is an specific package
			var packages = [

				{
					id: 0,						//id to identify the package
					package: 'FREE PROMOTIONAL WEBSITE',		//name of the package
					price: 'FREE',				//price of the package (better to take a number?)
					information: 'Lorem ipsum dolor sit amet consectetur adiscipin',					
					ribbon: '',
					benefits: [			// array what the package includes
								'Promotional package features:',								
								'Blog',
								'Content management',
								'Category management',
								'Media management',
								'User management'
							],
					button: 'View Theme',
					addon: [
						{
							id: 0,
							head: '1 Year Domain Name + Setup',
							price: '10 €',
							description: 'Domain name for one year and posibility of renewal every 12 months',	
							active: ['Add', 'Remove']
						},
						{
							id: 1,
							head: '6 Months Basic Hosting + Setup',
							price: '40 €',
							description: '250mb of space on a shared server, renewable every 6 months',	
							active: ['Add', 'Remove']
						},
						{
							id: 2,
							head: 'Monthly Back-Ups',
							price: '60 €',
							description: 'Lorem ipsum dolor sit amet consectetur adiscipin',	
							active: ['Add', 'Remove']
						},
						{
							id: 3,
							head: 'Google Analytics',
							price: '10 €',
							description: 'Lorem ipsum dolor sit amet consectetur adiscipin',	
							active: ['Add', 'Remove']
						},
						{
							id: 4,
							head: 'Firewall',
							price: '10 €',
							description: 'Lorem ipsum dolor sit amet consectetur adiscipin',	
							active: ['Add', 'Remove']
						}

					]
				},
				{
					id: 1,
					package: 'FREE E-COMMERCE WEBSITE',
					price: 'FREE',
					information: 'Lorem ipsum dolor sit amet consectetur adiscipin',					
					ribbon: 'images/main/Ribbon.png',
					benefits: [
								'Includes all features from promotional, plus:',								
								'Shopping cart',								
								'Product management',
								'Payment management',
								'Site search'
							],
					button: 'View Theme',
					addon: [
						{
							id: 0,
							head: '1 Year Domain Name + Setup',
							price: '10 €',
							description: 'Domain name for one year and posibility of renewal every 12 months',	
							active: ['Add', 'Remove']
						},
						{
							id: 1,
							head: '6 Months Basic Hosting + Setup',
							price: '40 €',
							description: '250mb of space on a shared server, renewable every 6 months',	
							active: ['Add', 'Remove']
						},
						{
							id: 2,
							head: 'Monthly Back-Ups',
							price: '60 €',
							description: 'Lorem ipsum dolor sit amet consectetur adiscipin',	
							active: ['Add', 'Remove']
						},
						{
							id: 3,
							head: 'Google Analytics',
							price: '10 €',
							description: 'Lorem ipsum dolor sit amet consectetur adiscipin',	
							active: ['Add', 'Remove']
						},
						{	
							id: 4,
							head: 'Firewall',
							price: '10 €',
							description: 'Lorem ipsum dolor sit amet consectetur adiscipin',	
							active: ['Add', 'Remove']
						}

					]
				},
				{
					id: 2,
					package: 'FREE MOBILE APP',
					price: 'FREE',
					information: 'Lorem ipsum dolor sit amet consectetur adiscipin',					
					ribbon: 'images/main/Ribbon.png',
					benefits: [
								'Mobile package features:',
								'Splash Screen',
								'Website landing page',
								'Admin panel',
								'Social media login',
								'User management'
							],
					button: 'View Theme',
					addon: [
						{
							id: 0,
							head: '1 Year Domain Name + Setup',
							price: '10 €',
							description: 'Domain name for one year and posibility of renewal every 12 months',	
							active: ['Add', 'Remove']
						},
						{
							id: 1,
							head: '6 Months Basic Hosting + Setup',
							price: '40 €',
							description: '250mb of space on a shared server, renewable every 6 months',	
							active: ['Add', 'Remove']
						},
						{
							id: 2,
							head: 'Monthly Back-Ups',
							price: '60 €',
							description: 'Lorem ipsum dolor sit amet consectetur adiscipin',	
							active: ['Add', 'Remove']
						},
						{
							id: 3,
							head: 'Google Analytics',
							price: '10 €',
							description: 'Lorem ipsum dolor sit amet consectetur adiscipin',	
							active: ['Add', 'Remove']
						},
						{
							id: 4,
							head: 'Firewall',
							price: '10 €',
							description: 'Lorem ipsum dolor sit amet consectetur adiscipin',	
							active: ['Add', 'Remove']
						}

					]
				}								
			];	
			// clone the original array with all packages
			var packageClone = [];
			packageClone = packages.slice(0);	
				
			//returns an array with all packages
			this.getPackages = function(){
				
				return packages;

			};
			//returns one specific package
			this.getPackage = function(index){

				return packageClone[index];

			};
			//Clones the original package Array
			this.getPackageClone = function(index){
				
				return packageClone[index];
			};
			//Will return the first three Objects of the package Array (for the Overview of the packages)
			this.getFirstThree = function(){				

				return packageClone;

			};
		
			this.showLeftArrow = function(index){
				console.log(index);
				if(index === 0){
					angular.element('#leftArrow').removeClass();
          			angular.element('#leftArrow').addClass("col-xs-1 vcenter arrow2 opacityOfArrow");          			
				}else{
					angular.element('#leftArrow').removeClass();
          			angular.element('#leftArrow').addClass("col-xs-1 vcenter arrow2");          			
				}
			};
			this.showRightArrow = function(index){
				if(index === 2){
					angular.element('#rightArrow').removeClass();
          			angular.element('#rightArrow').addClass("col-xs-1 vcenter arrow2 opacityOfArrow");
				}else{
					angular.element('#rightArrow').removeClass();
          			angular.element('#rightArrow').addClass("col-xs-1 vcenter arrow2");
				}
			};			

			//Removes the first package from the array and adds it at the first position
			this.removeFirst = function(){

				var temp = packageClone[0];
				packageClone.shift();
				packageClone.push(temp);

				return packageClone;
			};
			// Removes the last package from the array and adds it to the first position
			this.removeLast = function(){

				var l = packageClone.length;				
				var temp = packageClone[l-1];

				var tempArray = [];
				tempArray.push(temp);				
				for(var i = 0; i<l-1;i++){
					tempArray.push(packageClone[i]);
				}
				packageClone = tempArray;
				return packageClone;				
			};

			this.resetPackage = function(){
				packageClone = packages.slice(0);
			};

			this.toAddRemove = function(choise, index){
				
				packages[choise].addon[index].active.reverse();

				if(packages[choise].addon[index].active[0] === 'Remove'){					
          			angular.element('#change'+index).addClass("changeButtonRemove");					
				}else{
					angular.element('#change'+index).removeClass();
          			angular.element('#change'+index).addClass("buttonAddRemove");
				}			
			};
		});

	