window.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.app__container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,

    },
  });

  const swiper2 = new Swiper('.expertise__container', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,

    },
  });
}, false);