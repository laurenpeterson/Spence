(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure

  $(function () {
      // document is ready
    var $drawerTrigger = $('.open-trigger'),
        $closeSpan = $('.open-trigger span'),
    		$fullImg = $('.full-img'),
    		$textToggle = $('.slide-trigger'),
        $resTrigger = $('.resume-trigger'),
        $resSection = $('.resume-panel'),
        $rightDrawer = $('.drawer-right'),
        $titleList = $('.title-list li');


    $drawerTrigger.click(function(e){
    	e.preventDefault();
    	var drawerWidth = $rightDrawer.outerWidth();
    	if (!$(this).children('span').hasClass('icon-cancel')) {
    		$fullImg.css('left', - drawerWidth);
    		$closeSpan.addClass('icon-cancel fa fa-times');
    	} else {
    		$fullImg.css('left', '0');
    		$closeSpan.removeClass('icon-cancel fa fa-times');
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

    // // initialize skrollr if the window width is large enough
    // var initSkrollr = function() {
    //   if (!isMobile && $(window).width() > 767) {
    //     setTimeout(function() {
    //       skrollr.init({
    //         forceHeight: false,
    //         smoothScrolling: false,
    //         mobileDeceleration: 0.004
    //       }); 

    //       // skrollr.menu.init(sk);
    //     }, 1500);
    //   }
    // }

    // initSkrollr();


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

    // hero title animation
    $titleList.each(function(i){
      var $this = $(this);
      setTimeout(function(){ 
        $('.title-active').removeClass('title-active').addClass('title-deactivated');
        $this.addClass('title-active'); 
      }, (i * 3000))
    });

    // Portfolio Modal
    var $card = $('.portfolio-card'),
        $modal = $('.modal-wrap'),
        $body = $('body'),
        $expandedCard = $('.portfolio-card-expanded'),
        $closeX = $('.icon-cancel');

    $card.click(function(e){
      e.preventDefault();
      $modal.show();
      $body.addClass('modal-active');

      var index = $(this).index();
      $expandedCard.eq(index).show();
      // console.log('')
    });

    var closeModal = function() { 
      $body.removeClass('modal-active');
      $expandedCard.hide();
    }

    $modal.click(function(e) {
      // e.preventDefault();
      // var container = $('.portfolio-card-expanded');
      console.log('beep');
      
      // if the target of the click isn't the container or a descendant of the container
      if (!$expandedCard.is(e.target) && $expandedCard.has(e.target).length === 0) 
      {
        console.log('boop');
        $(this).hide();
        closeModal();
      }
    })

    $closeX.click(function(){
      $modal.hide();
      closeModal();
    })


  });

})(window, document, jQuery);