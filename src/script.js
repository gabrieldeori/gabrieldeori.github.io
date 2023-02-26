const C_ACTIVE = 'active';

function adjustVHForAnyBrowser() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

adjustVHForAnyBrowser();

const burguerButton = document.querySelector('.burger_button');
const dropDownMenu = document.querySelector('.dropdown_menu');

burguerButton.addEventListener('click', function() {
  burguerButton.classList.toggle(C_ACTIVE);
  dropDownMenu.classList.toggle(C_ACTIVE);
});
