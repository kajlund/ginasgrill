const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);
};

const menu = selectElement('#menu');
const year = selectElement('#thisYear');
year.innerHTML = new Date().getFullYear();
const btnMenuToggle = selectElement('#btn-menu-toggle');
btnMenuToggle.addEventListener('click', () => {
  menu.classList.toggle('activated');
  btnMenuToggle.classList.toggle('activated')
});

// Nav items
document.querySelectorAll('.list-link').forEach(item => {
  item.addEventListener('click', event => {
    btnMenuToggle.classList.toggle('activated');
    menu.classList.toggle('activated');
  });
});

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverFlowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});