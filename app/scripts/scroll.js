/*------------------------------------*\
  #SCROLL
\*------------------------------------*/

var pxScrolled= 500;

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= pxScrolled) {
      $("body").addClass("scrolled");
  } else {
      $("body").removeClass("scrolled");
  }
});
