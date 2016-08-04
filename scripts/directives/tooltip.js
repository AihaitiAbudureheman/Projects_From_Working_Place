'use strict';


angular.module('wdcApp')
	.directive('animation', ['$window', function($window){

		return{
			link: function(scope, element, attrs){

					element
                		.on('mouseenter',function() {
                			var offset = 0;
                			var top = parseInt(angular.element('#' + element.context.id).css('top'),10);
                			if(top<0){
                				offset=top;
                			}
                			var posHeight = angular.element('#' + element.context.id).height();
                			var boxHeight = angular.element('.demoHover').height();	
                			var sec = posHeight/200;
                    		$('#' + element.context.id).css('transition', 'all ' +  sec + 's linear');
                    		$('#' + element.context.id).css('top',parseInt($('#' + element.context.id).css('top')) + (-(posHeight-boxHeight+offset)) + 'px');
                		})
               			.on('mouseleave',function() { 
               				var posHeight = angular.element('#' + element.context.id).height();	
                			var sec = posHeight/400;
                    		$('#' + element.context.id).css('transition', 'all ' +  sec + 's linear');              				
                   			$('#' + element.context.id).css('top',parseInt( 0 + 'px'));                   			
                		});
				
					

			}
		};
	}]); 