const btnParent = document.querySelector('.edit-container');
const update = document.querySelector('#updateBtn');
const exitBtn = document.querySelector('#exitBtn');
const menuName = document.querySelectorAll('.menu-name');
const menuPrice = document.querySelectorAll('.menu-price');
const ui = document.querySelector('.menu-container');

document.getElementById('updateBtn').addEventListener('click', () => {
  btnParent.classList.toggle('b-hidden', false);
  update.classList.toggle('b-hidden', true);

  for (let i = 0; i < menuName.length; i++) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = menuName[i].textContent.trim();

    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.value = parseInt(menuPrice[i].textContent);

    menuName[i].innerHTML = '';
    menuName[i].prepend(checkbox);
    menuName[i].append(nameInput);

    menuPrice[i].innerHTML = '';
    menuPrice[i].append(priceInput);
  }
});

document.getElementById('exitBtn').addEventListener('click', () => {
  btnParent.classList.toggle('b-hidden', true);
  update.classList.toggle('b-hidden', false);
  ui.classList.add('menu-container');

  for (let i = 0; i < menuName.length; i++) {
    // name input과 checkbox 제거
    const checkbox = menuName[i].querySelector('input[type="checkbox"]');
    const nameInput = menuName[i].querySelector('input[type="text"]');
    if (checkbox) checkbox.remove();
    if (nameInput) {
      menuName[i].textContent = nameInput.value;
    }

    // price input 제거
    const priceInput = menuPrice[i].querySelector('input[type="number"]');
    if (priceInput) {
      menuPrice[i].textContent = priceInput.value + '원';
    }
  }
});
const container = document.querySelector('.menu-container');


const li = document.createElement('li');
li.classList.add('menu');

const nameSpan = document.createElement('span');
nameSpan.classList.add('menu-name');
nameSpan.textContent = '생선가스'; 


const priceSpan = document.createElement('span');
priceSpan.classList.add('menu-price');
priceSpan.textContent = '8000원'; 

li.append(nameSpan, priceSpan);


