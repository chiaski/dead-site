AOS.init(); // initialize animate on scroll

// https://michalsnik.github.io/aos/

var $cursor = $('.cursor');


// If cursor is moving

function moveCursor(e) {
    $cursor.addClass('is-moving');
    $cursor.css({
        "top": e.pageY,
        "left": e.pageX
    });

    clearTimeout(timer2);

    var timer2 = setTimeout(function () {
        $cursor.removeClass('is-moving');
    }, 300);
}

function enlargeCursor(e) {
    $cursor.removeClass('is-moving');
    $cursor.addClass('is-hovering');
}

function unenlargeCursor(e) {
    $cursor.removeClass('is-hovering');
}

$(window).on('mousemove', moveCursor);
$("a").on('mouseenter', enlargeCursor);
$("a").on('mouseleave', unenlargeCursor);

/*

$("#sayhello").mouseenter(function () {
    $("#landing").css("background-image", "url(assets/images/sayhello.jpg)");
    console.log("hello");
});

$("#clickdeveloph").mouseenter(function () {
    $("#landing").css("background-image", "url(assets/images/projects.jpg)");
    console.log("hello");
});

$("#clickchia").mouseenter(function () {
    $("#landing").css("background-image", "url(assets/images/chia.jpg)");
    $("#landing").css("background-size", "contain");
    console.log("hello");
});


$("#clickghc").mouseenter(function () {
    $("#landing").css("background-image", "url(assets/images/ghc.jpg)");
    $("#landing").css("background-size", "contain");
    console.log("hello");
});

$("#clickgtl").mouseenter(function () {
    $("#landing").css("background-image", "url(assets/images/gtl.jpg)");
    $("#landing").css("background-size", "contain");
    console.log("hello");
});



$("#clickmusic").mouseenter(function () {
    $("#landing").css("background-image", "url(assets/images/music.jpg)");
    $("#landing").css("background-size", "contain");
    console.log("hello");
});


$("a").mouseleave(function () {
    $("#landing").css("background-image", "url(assets/images/bg.gif)");
    $("#landing").css("background-size", "auto");
});


*/

/* PARALLAX */

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.landing-style-container').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    
    $('.portfolio-landing').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}


$(window).on('mousemove click', function (e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

});

moveBackground();



window.onscroll = function () {
    myFunction()
};

// Get the header
var header = document.getElementById("sticky-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

