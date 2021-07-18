window.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.app__container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });
}, false);