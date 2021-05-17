$(function () {
  var n = {
    x: -1,
    y: -1
  };
  $(document).mousemove(function (i) {
    n.x = i.pageX, n.y = i.pageY
  });
  var i = function () {
    return "hsla(" + n.y / $(window).height() * 360 + ", 70%, 50%, 1)"
  };
  $("a").hover(function () {
    var n = i();
    $(this).css("background-color", n)
  }, function () {
   $(this).css("background-color", "")
  })
  
});
