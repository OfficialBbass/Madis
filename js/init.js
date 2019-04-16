(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
 
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
  }); // end of document ready
})(jQuery); // end of jQuery name space
