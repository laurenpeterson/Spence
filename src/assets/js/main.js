(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure

  $(function () {
      // document is ready
    var $drawerTrigger = $('.drawer-link'),
    		$fullImg = $('.full-img'),
    		$textToggle = $('.slide-trigger'),
        $resTrigger = $('.resume-trigger'),
        $resSection = $('.resume-panel');


    $drawerTrigger.click(function(e){
    	e.preventDefault();
      var drawerType = $(this).data('drawer-type');
      var $currentDrawer = $('.' + drawerType + '-drawer');
    	var drawerWidth = $currentDrawer.outerWidth();
    	if (!$(this).hasClass('icon-cancel') && drawerType == "about") {
    		$fullImg.css('left', - drawerWidth);
        $currentDrawer.addClass('active-drawer');
    		$(this).addClass('icon-cancel');
    	} else if (!$(this).hasClass('icon-cancel') && drawerType == "resume"){
        $fullImg.css('left', drawerWidth);
        $currentDrawer.addClass('active-drawer');
        $(this).addClass('icon-cancel');
      } else {
    		$fullImg.css('left', '0');
        setTimeout( function() {
          $currentDrawer.removeClass('active-drawer');
        }, 300);
    		$(this).removeClass('icon-cancel');
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