(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure

  $(function () {
      // document is ready
    var $drawerTrigger = $('.open-trigger'),
    		$fullImg = $('.full-img'),
    		$textToggle = $('.slide-trigger'),
        $resTrigger = $('.resume-trigger'),
        $resSection = $('.resume-panel'),
        $rightDrawer = $('.drawer-right');


    $drawerTrigger.click(function(e){
    	e.preventDefault();
    	var drawerWidth = $rightDrawer.outerWidth();
    	if (!$(this).hasClass('icon-cancel')) {
    		$fullImg.css('left', - drawerWidth);
    		$drawerTrigger.addClass('icon-cancel');
    	} else {
    		$fullImg.css('left', '0');
    		$drawerTrigger.removeClass('icon-cancel');
    	}
    });

    $resTrigger.click(function(e){
      e.preventDefault();
      $resSection.addClass('lower-panel-show');
      $('html, body').animate({
          scrollTop: $resSection.offset().top
      }, 1000);
    });

    // smooth scroll from CSS Tricks
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    // Mobile Detection test

    var isMobile = false;
 
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
      //on desktop
    } else {
      //on mobile
      isMobile = true;
    }

    // initialize skrollr if the window width is large enough
    var initSkrollr = function() {
      if (!isMobile && $(window).width() > 767) {
        setTimeout(function() {
          skrollr.init({
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004
          }); 

          // skrollr.menu.init(sk);
        }, 1500);
      }
    }

    initSkrollr();
  });

})(window, document, jQuery);