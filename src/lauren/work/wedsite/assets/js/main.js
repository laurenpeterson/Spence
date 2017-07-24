$(document).ready(function(){
	$('.slick').slick({
	  slidesToShow: 1,
	  //autoplay: true,
	  autoplaySpeed: 5000,
	  arrows: false
	});

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	var $nav = $('nav');
	var navHeight = $nav.outerHeight();
	var stickyNavTop = $nav.offset().top;  
	// console.log(navHeight);
	  
	var stickyNav = function(){  
		var scrollTop = $(window).scrollTop();  
		       
		if (scrollTop > stickyNavTop) {   
		    $nav.addClass('sticky');  
		    $('.hero-img').css('margin-top', navHeight);
		} else {  
		    $nav.removeClass('sticky');   
		    $('.hero-img').css('margin-top', '0');
		}  
	};  
	  
	stickyNav();  
	  
	$(window).scroll(function() {  
	    stickyNav();  
	});  
 

});