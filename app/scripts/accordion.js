/*------------------------------------*\
  #ACCORDION
\*------------------------------------*/

$('.acc-btn').click(function(e){
  e.preventDefault();

  $(this)
    .next('.acc-panel')
    .not(':animated')
    .slideToggle(250);

  $(this)
    .find('.plus')
    .toggleClass('plus-active');
});
