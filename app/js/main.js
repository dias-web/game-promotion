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

  //custom select

  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownWrapper.querySelectorAll('.dropdown__item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__hidden');

    dropDownBtn.addEventListener('click', function (e) {

      // Клик по кнопке. Открыть / закрыть select
      dropDownList.classList.toggle('dropdown__list--visible');

      if (dropDownList.classList.contains('dropdown__list--visible')) {
        dropDownBtn.classList.add('dropdown__button--rotate');
      } else {
        dropDownBtn.classList.remove('dropdown__button--rotate');
      };
    });

    // Выбор элемента списка. Запомнить выбранное  значение. Закрыть дропдаун 
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation(); // прекращает дальнейшую передачу текущего события
        dropDownBtn.innerText = this.innerText;
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownList.classList.remove('dropdown__button--rotate');
      });
    });

    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownList.classList.remove('dropdown__button--rotate');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownList.classList.remove('dropdown__button--rotate');
      }
    })

  });

}, false);