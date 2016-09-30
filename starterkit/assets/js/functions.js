// smooth scroll
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 60 // 60 is based on nav
	    }, 420, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

// Mobile menu
var isActive = false;
$('.hamburger-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
		$('#menu-overlay').hide();
	}
	else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
		$(this).addClass('active');
		$('#menu-overlay').show();
	}

	isActive = !isActive;
});

// Menu overlay
$('#content').prepend('<div id="menu-overlay"></div>');
$('#menu-overlay').on('click', function() {
		$('body').removeClass('menu-open');
		$('a.hamburger-menu').removeClass('active');
		$(this).hide();
	});

// Menu item selected
$('nav ul li a, #main-nav ul li a').click(function () {
	$(this).addClass('active');
	$(this).parent().siblings().children().removeClass('active');
});


// Modal
$('#modal-overlay').hide();

// btn trigger
$('.modal-btn').click(function () {
	$('#modal-projecten').addClass('modal-active');
	$('#modal-overlay').fadeIn();
});

// modal exit
$('#modal-overlay, .modal-exit').click(function(){
	$('.modal').removeClass('modal-active');
	$('#modal-overlay').hide();
});
