/*------------------------------------*\
  #TABBED PANEL
\*------------------------------------*/

$('.tab-list').on('click', '.tab-control', function(e){
  e.preventDefault();
  var $currentPanel = $(this).parent().siblings('.tab-panel.active');
  var $tab = $(this).closest('.tab-controls');
  var $tabId = $(this).attr('href');


	// tab control classes
	$($tab).find('.tab-control.active').removeClass('active');
	$(this).addClass('active');


	// hide current
	$($currentPanel).fadeOut(200, showNextPanel);


	// show next panel
  function showNextPanel(){
    $(this).removeClass('active');

    $(this).siblings('#'+$tabId).fadeIn(200, function(){
      $(this).addClass('active');
    });
  };
});
