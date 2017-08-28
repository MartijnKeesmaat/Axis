var items = $(".home-slide");
var animating = false;
    $(window).scroll(function() {
        clearTimeout($.data(this, 'scrollTimer'));
        if (!animating) {
            $.data(this, 'scrollTimer', setTimeout(function() {
                items.each(function(key, value) {
                    if ($(window).scrollTop() < $(value).offset().top+120 && $(window).scrollTop() > $(value).offset().top-120 ) {
                        animating = true;
                        $('body').animate( { scrollTop: $(value).offset().top + 'px' }, 250);
                        setTimeout(function() { animating = false; }, 300);
                        return false;
                    }
                });
            }, 200));
        }
    });


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});


// ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.scroll-reveal', {
  duration: 1200,
  scale: 1
});
sr.reveal('.reveal-hero', { duration: 2000 }, 50);
sr.reveal('.reveal-footer', { duration: 2000 }, 50);
sr.reveal('.reveal-tags', {
  duration: 1200,
  scale: 1
}, 200);

sr.reveal('.reveal-highlight--gallery', {
  duration: 1200,
  scale: 1
}, 300);

sr.reveal('.reveal-highlight--mockup-left', {
  duration: 1200,
  scale: 1
}, 500);

sr.reveal('.reveal-header', {
  duration: 1200,
  scale: 1
}, 300);


// Nav activate

if($('#hero-unit').length == 1){
$(function() {
    var body = $("body");
    var offsetHeight = document.getElementById('hero-unit').offsetHeight - 50;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= offsetHeight) {
            body.removeClass('preHeader').addClass("scrolledPastHeader");
        } else {
            body.removeClass("scrolledPastHeader").addClass('preHeader');
        }
    });
});
};


if($('#hero-circle').length == 1){
  var elementPosition = $('#hero-circle').offset();

  $(window).scroll(function(){
    if($(window).scrollTop() + 10 > elementPosition.top){
      $('#hero-circle').addClass('fixScroll')
    } else {
      $('#hero-circle').removeClass('fixScroll');
    }
  });
}

var navActive = true;

$('.hero-unit__circle .hamburger-link').click(function(e) {
  e.preventDefault();

	if (navActive) {
    $(this).parent().addClass('navigation--is-active');
    $('body').addClass('body-navigation--is-active');
    $('.hamburger').addClass('hamburger--is-active');

    setTimeout(function(){
      $(".hero-unit__nav a").each(function(i,el) {
        var $this = $(this);
        setTimeout(function() {
          $this.addClass('hero-unit__nav-link--is-active');
        }, i*300); // milliseconds
      });
    }, 300);
	}
	else {
    $(this).parent().removeClass('navigation--is-active');
    $('body').removeClass('body-navigation--is-active');
    $('.hamburger').removeClass('hamburger--is-active');
    $('.hero-unit__nav a').removeClass('hero-unit__nav-link--is-active');
	}

	navActive = !navActive;
});





var footerText = $('.footer__title-backdrop');
var footerCounter = 0;

$('.footer__social__link img').mouseenter(function(){
  if (footerCounter == 0) {
    footerText.text('Klik op deze');
  } else if(footerCounter == 1){
    footerText.text('Of deze');
  } else if(footerCounter == 2){
    footerText.text('Deze kan');
  } else if(footerCounter == 3){
    footerText.text('En die daar');
  } else if(footerCounter == 4){
    footerText.text('Goede keuze');
  } else if(footerCounter == 5){
    footerText.text('Okee..');
  } else if(footerCounter == 6){
    footerText.css("fontSize", "11rem").text('Ga je nog ergens op klikken');
  } else if(footerCounter == 7){
    footerText.text('Kom op..').css( "fontSize", "13rem" );
  } else if(footerCounter == 8){
    footerText.text('Nou begint het saai te worden').css( "fontSize", "10rem" );
  } else if(footerCounter == 9){
    footerText.text('Kan je echt geen keuze maken?');
  } else if(footerCounter == 10){
    footerText.text('Laat me je helpen').css( "fontSize", "11rem" );;
  } else if(footerCounter == 11){
    footerText.text('Alsjeblieft :)').css( "fontSize", "12rem" );;
    var link = "mailto:mpkeesmaat@gmail.com"
     window.location.href = link;
  }

  footerCounter ++;
  console.log(footerCounter);

});
