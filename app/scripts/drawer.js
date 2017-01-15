/*------------------------------------*\
  #MOBILE NAV
\*------------------------------------*/

$('body').prepend('<div class="overlay-body drawer-nav__trigger"></div>');

// Mobile menu
var isActive = false;
$('.drawer-nav__trigger').on('click', function() {
	if (isActive) {
		$('body').removeClass('drawer-active');
	}
	else {
		$('body').addClass('drawer-active');
	}

	isActive = !isActive;
});
