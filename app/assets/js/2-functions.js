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
$('.hamburger-menu, #menu-overlay').on('click', function() {
	if (isActive) {
		$('body').removeClass('is-menu-open');
	}
	else {
		$('body').addClass('is-menu-open');
	}

	isActive = !isActive;
});


// Menu item selected
$('.header-nav__item, .mobile-nav__item').click(function () {
	$(this).addClass('is-active');
	$(this).siblings().removeClass('is-active');
});


// Modal
// $('#modal-overlay').hide();

// btn trigger
// $('.modal-btn').click(function () {
// 	$('#modal-projecten').addClass('modal-active');
// 	$('#modal-overlay').fadeIn();
// });

// modal exit
// $('#modal-overlay, .modal-exit').click(function(){
// 	$('.modal').removeClass('modal-active');
// 	$('#modal-overlay').hide();
// });
