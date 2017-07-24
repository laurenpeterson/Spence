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
        $rightDrawer = $('.drawer-right'),
        $titleList = $('.title-list li');


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
      $resSection.toggleClass('lower-panel-show');
      // $('html, body').animate({
      //     scrollTop: $resSection.offset().top
      // }, 1000);
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


    //Fade in animation
    var $animEls = $('.ls-animate');

    $(window).scroll(function() {
      var currentPos = $(this).scrollTop();
      var center = $(this).outerHeight() / 3;

      $animEls.each(function(i) {
        if (currentPos >= center) {
          $(this).addClass('ls-animating');
        }
      });
    });

    $titleList.each(function(i){
      var $this = $(this);
      setTimeout(function(){ 
        $('.title-active').removeClass('title-active').addClass('title-deactivated');
        $this.addClass('title-active'); 
      }, (i * 3000))
    });

    $('.portfolio-card').click(function(e){
      e.preventDefault();
      $('.modal-wrap').show();
      $('body').addClass('modal-active');

      var index = $(this).index() - 1;
      $('.portfolio-card-expanded').eq(index).show();
      // console.log('')
    });

    var closeModal = function() { 
      $('body').removeClass('modal-active');
      $('.portfolio-card-expanded').hide();
    }

    $('.modal-wrap').click(function(e) {
      // e.preventDefault();
      var container = $('.portfolio-card-expanded');
      console.log('beep');
      
      // if the target of the click isn't the container or a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
        console.log('boop');
        $(this).hide();
        closeModal();
      }
    })

    $('.icon-cancel').click(function(){
      $('.modal-wrap').hide();
      closeModal();
    })


  });

})(window, document, jQuery);