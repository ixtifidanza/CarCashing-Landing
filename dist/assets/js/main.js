var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    effect: 'fade',
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

$(function () {

$('[data-scroll]').on('click', function(event) {
    event.preventDefault(); 

    var elementId = $(this).data('scroll');
    var elementOffset = $(elementId).offset().top;


    $('html, body').animate({
      scrollTop: elementOffset -70
    }, 1000);
  });
});


(function($) {
  "use strict";

  var $navbar = $("#navbar"),
      y_pos = $navbar.offset().top,
      height = $navbar.height();

  $(document).scroll(function() {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > y_pos + height) {
          $navbar.addClass("navbar-fixed").animate({
              top: 0,
          });
      } else if (scrollTop <= y_pos) {
          $navbar.removeClass("navbar-fixed").clearQueue().animate({
              top: "0"
          }, 100);
      }
  });

})(jQuery, undefined);

window.onscroll = function(){
  scrollFunction()
}
function scrollFunction(){
  var sn = document.getElementById("navbar");
     if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        sn.style.top = "0"
     }
     else{
        sn.style.top = "-45px"
     }
}

var modal = $('.modal');
var modalClose = $('.modal-close');
var modalBtn = $('#modalBtn');
var overlay = $('.overlay');
var body = $('.body')


modalBtn.on('click', function (e) {
  e.preventDefault();
  modal.css('opacity', '1');
  modal.css('transform', 'translateY(5%)');
  overlay.addClass('open');
  body.css('overflow-y', 'hidden');
});

modalClose.on('click', function (e) {
  e.preventDefault();
  modal.css('opacity', '0');
  modal.css('transform', 'translateY(-100%)');
  overlay.removeClass('open');
  body.css('overflow-y', 'scroll');
});








