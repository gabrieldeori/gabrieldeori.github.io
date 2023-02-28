const C_ACTIVE = 'active';

const burguerButton = document.querySelector('.burger_button');
const dropDownMenu = document.querySelector('.dropdown_menu');

burguerButton.addEventListener('click', function() {
  burguerButton.classList.toggle(C_ACTIVE);
  dropDownMenu.classList.toggle(C_ACTIVE);
});
