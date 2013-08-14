$(document).ready(function() {
  window.mySwipe = Swipe(document.getElementById('slider'), {
    startSlide: 0,
    speed: 600,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, elem) {},
    transitionEnd: function(index, elem) {}
  });
});