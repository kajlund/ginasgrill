const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);
};

const menu = selectElement('#menu');
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

