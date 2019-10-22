(function($) {

	document.oncontextmenu = function(e) {
		e = e || window.event;
		if (/^img$/i.test((e.target || e.srcElement).nodeName)) return false;
	};
	

	$('body').on('click', function(e) { 
		if( e.which == 2 ) {e.preventDefault ? e.preventDefault() : e.returnValue = false;}
	 });
	 


    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 500) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		// Mobile Menu JS  //
		$(function(){
			$('#nav').slicknav({
				'label' : '',
				'prependTo': '.mobile-menu',
				
			});
		});


		// Porgress Bar JS  //
		$('.progress.two .progress-bar').each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 3s'
			});
			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 500);
		});
	
		
		if ($.fn.onePageNav) {
			$('#nav').onePageNav({
				currentClass: 'current',
				scrollSpeed: 1000,
				easing: 'easeInOutQuart'
			});
		}
				
		// Wow JS //
		var wow = new WOW(
		{
			boxClass:     'wow',      
			animateClass: 'animated', 
			offset:       0,          
			mobile:       true,     
			live:         true,      
			callback:     function(box) {
			},
			scrollContainer: null 
		  }
		);
		wow.init();
		
		// Isotop JS //
		$(window).on('load', function() {
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });

					$('.works-menu ul li').on('click', function() {
                    $(".works-menu ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeOutCirc',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
		});
	});
	
})(jQuery);

