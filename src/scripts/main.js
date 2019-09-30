AOS.init(); // initialize animate on scroll

// https://michalsnik.github.io/aos/

var $cursor = $('.cursor');


function moveCursor(e) {
  $cursor.addClass('is-moving');
  $cursor.css({"top": e.pageY, "left": e.pageX});

  clearTimeout(timer2);

   var timer2 = setTimeout(function() {
       $cursor.removeClass('is-moving');
   }, 300);
}

$(window).on('mousemove', moveCursor);