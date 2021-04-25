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

  // var swiper2 = new Swiper('.swiper-container2', {
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   // init: false,
  //   // pagination: {
  //   //   el: '.swiper-pagination2',
  //   //   clickable: true,
  //   // },
  //   // breakpoints: {
  //   //   640: {
  //   //     slidesPerView: 2,
  //   //     spaceBetween: 20,
  //   //   },
  //   //   768: {
  //   //     slidesPerView: 4,
  //   //     spaceBetween: 40,
  //   //   },
  //   //   1024: {
  //   //     slidesPerView: 5,
  //   //     spaceBetween: 50,
  //   //   },
  //   // }
  // });

  var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    direction: getDirection(),
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }