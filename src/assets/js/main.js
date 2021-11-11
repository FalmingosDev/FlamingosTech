var $ = jQuery.noConflict();
$(document).ready(function(){
		$('.bxslider').bxSlider({
			mode: 'fade',
			moveSlides: 1,
			slideMargin: 40,
			infiniteLoop: true,
            auto: true,
			slideWidth: 450,
			minSlides: 3,
			maxSlides: 3,
			speed: 2000,
		});
	});
$(document).ready(function(){
		$('.text-slide').bxSlider({
			mode: 'fade',
			moveSlides: 1,
			slideMargin: 40,
			infiniteLoop: true,
            auto: true,
			slideWidth: 600,
			minSlides: 3,
			maxSlides: 3,
			speed: 2000,
		});
	});