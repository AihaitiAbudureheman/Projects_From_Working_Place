//Factory who will save, which package and theme were choosen
'use strict';
angular.module('wdcApp')
.factory('backUpFactory', 
		function(){

			//returns the picked package and theme (id)
			return {

				packageChoise: 0,
				themeChoise: 0,
				pressedButtonCatagory: ''

			};

		});