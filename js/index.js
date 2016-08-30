(function($){
  $(function(){

    $('.parallax').parallax();

    $('a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space