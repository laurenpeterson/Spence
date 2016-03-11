(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure

  $(function () {
      // document is ready
    var $drawerTrigger = $('.open-trigger'),
    		$fullImg = $('.full-img'),
    		$drawer = $('.side-drawer'),
    		$textToggle = $('.slide-trigger');


    $drawerTrigger.click(function(e){
    	e.preventDefault();
    	var drawerWidth = $drawer.outerWidth();
    	if (!$(this).hasClass('icon-cancel')) {
    		$fullImg.css('left', - drawerWidth);
    		$drawerTrigger.addClass('icon-cancel');
    	} else {
    		$fullImg.css('left', '0');
    		$drawerTrigger.removeClass('icon-cancel');
    	}

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