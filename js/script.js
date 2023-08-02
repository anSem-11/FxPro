document.addEventListener('DOMContentLoaded', () => {
  let swiper = document.querySelector('.swiper');

  // slider swiper inicialisation
  swiper && new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clicable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

  });

})