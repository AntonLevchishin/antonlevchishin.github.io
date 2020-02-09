var menu = $("#menu-header");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 100 ) {
      $(menu).css("background-color", "white");
      $(menu).find('a').css("color", "#515769");
      $(menu).css("border-bottom", "1px solid #f3f4f5");
      $(menu).find('.header__wrap-logo').css("background-image", "url(img/logo-dark.png)");
    } else if ( top <= 200 ) {
      $(menu).css("background-color", "transparent");
      $(menu).find('a').css("color", "white");
      $(menu).css("border-bottom", "1px solid rgba(255, 255, 255, 0.2)");
      $(menu).find('.header__wrap-logo').css("background-image", "url(img/logo.png)");
    }
  });

