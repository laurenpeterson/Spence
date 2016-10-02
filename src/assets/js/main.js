(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure

  $(function () {
      // document is ready
    var $drawerTrigger = $('.open-trigger'),
    		$fullImg = $('.full-img'),
    		$textToggle = $('.slide-trigger'),
        $resTrigger = $('.resume-trigger'),
        $resDrawerTrigger = $('.resume-drawer-trigger'),
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

    $resDrawerTrigger.click(function(e){
      e.preventDefault();
      $resDrawerTrigger.addClass('lower-panel-show');
      $('html, body').animate({
          scrollTop: $resDrawerTrigger.offset().top
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

    $textToggle.click(function(){
    	$(this).toggleClass('trigger-on').next('p').slideToggle();
      // var fullImgHeight = $fullImg.outerHeight();
      // setTimeout( function() {
      //   var drawerHeight = $drawer.outerHeight();
      //   if (drawerHeight > fullImgHeight) {
      //     $fullImg.css('height', drawerHeight);
      //   } else {
      //     $fullImg.css('height', '100%');
      //   }

      // }, 400);
    });




  });

})(window, document, jQuery);