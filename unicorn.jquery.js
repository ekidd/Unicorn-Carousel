(function($,M){
	$.fn.unicorn = function(options) {
		var unicorn = this;
		
		var defaults = {
			nextSlide: 'toNext',
			prevSlide: 'toPrev',
			hideNextPrev: true,
			slideClass: 'unicorn',
			hasController: true,
			controllerId: 'unicornController',
			controllerPrefix: 'to',
		};
		var options = $.extend(defaults, options);
		$(this).addClass(options.slideClass+'1');
		var slideCount = $(this).children().length;			
		var current = 1;
		
		function animateSlider(current){
			if(!M.csstransitions) {
				var width = $(unicorn).parent().innerWidth;
				if(current == 1) {
					$(unicorn).animate({'margin-left': '0px'}, 1000, 'linear');
				} else if (current == 2){
					$(unicorn).animate({'margin-left': '-'+width+'px'}, 1000, 'linear');
				} else {
					var index = current - 1;
					width = width*index;
					$(unicorn).animate({'margin-left': '-'+width+'px'}, 1000, 'linear');
				}
			} else {
				//clear class
				$(unicorn).attr('class', '');
				//add current class to fire transition
				$(unicorn).addClass(''+options.slideClass+current+'');
				toggleNextPrev(current);
			}	
		}
		var testNext = 1;
		var testPrev = 1;
		function toggleNextPrev(current) {
			if(options.hideNextPrev) {						
					var nextSlide = options.nextSlide;
					var prevSlide = options.prevSlide;
					if (current == 1) {
						$('.'+prevSlide+'').hide();
						if(!testNext) {
							$('.'+nextSlide+'').show();
							testNext = 1;
						}
						testPrev = 0;
					} else if (current == slideCount) {
						$('.'+nextSlide+'').hide();
						if(!testPrev) {
							$('.'+prevSlide+'').show();
							testPrev = 1;
						}
						testNext = 0;
					} else {
						if(!testPrev) {
							$('.'+prevSlide+'').show();
							testPrev = 1;
						} else if (!testNext) {
							$('.'+nextSlide+'').show();
							testNext = 1;
						} 
					}
				}
				
			
		}
		toggleNextPrev(current);
		
		$('.'+options.nextSlide+'').click(function(e) {
			e.preventDefault();
			if(current == slideCount) {
				return false;
			} else {
				current++;
				toggleNextPrev(current);
				animateSlider(current);
			}			
		});
		
		$('.'+options.prevSlide+'').click(function(e){
			e.preventDefault();
			toggleNextPrev(current);
			if(current == 0) {
				return false;
			} else {
				current--;
				toggleNextPrev(current);
				animateSlider(current);
			}
		});
		
		if(options.hasController) {
			$('#'+options.controllerId+'').children().click(function(e){
				e.preventDefault();
				var slideTo = $(this).attr('class').split(options.controllerPrefix);
				slideTo = slideTo[1];
				if(current == slideTo) {
					return false
				} else {
					current = slideTo;
					toggleNextPrev(current);
					animateSlider(current);
				}				
			});
		}		
	};
	
	return this;
	
})(jQuery,Modernizr);