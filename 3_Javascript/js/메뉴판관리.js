const btnParent = document.querySelector('.edit-container');
const update = document.querySelector('#updateBtn');
const addMenu = document.querySelector('#updateBtn');
const deletMenu = document.querySelector('#deletMenu');
const exitBtn = document.querySelector('#exitBtn');
const menuName = document.querySelectorAll('.menu-name');
const menuPrice = document.querySelectorAll('.menu-price');
const li = document.querySelector('.menu');
const ui = document.querySelector('.menu-container');


const check1 = document.createElement('input');
const check2 = document.createElement('input');
const check3 = document.createElement('input');
const check4 = document.createElement('input');
const priceInput1 = document.createElement('input');
const priceInput2 = document.createElement('input');



/*  <li class="menu">
        <span> <class class="menu-name"> </class></span>
        <span class="menu-price">/span>
      </li> 
*/

check1.type = "checkbox";
check2.type = "checkbox";
priceInput1.type = "number";
priceInput2.type = "number";



console.log(menuPrice[0].innerHTML);
console.log(menuPrice[1].innerHTML);



document.getElementById('updateBtn').addEventListener('click', () => {
  btnParent.classList.toggle('b-hidden', false);
  update.classList.toggle('b-hidden', true);

  check3.value = menuName[0].textContent.trim();
  check4.value = menuName[1].textContent.trim();

  priceInput1.value = parseInt(menuPrice[0].textContent);
  priceInput2.value = parseInt(menuPrice[1].textContent);

  menuName[0].innerHTML = '';
  menuName[0].prepend(check1);
  menuName[0].append(check3);
  menuName[1].innerHTML = '';
  menuName[1].prepend(check2);
  menuName[1].append(check4);

  menuPrice[0].innerHTML = '';
  menuPrice[0].append(priceInput1);
  menuPrice[1].innerHTML = '';
  menuPrice[1].append(priceInput2);



});

document.getElementById('exitBtn').addEventListener('click', () => {

  btnParent.classList.toggle('b-hidden', true);
  update.classList.toggle('b-hidden', false);

  ui.classList.add('menu-container');

  check1.remove();
  check2.remove();
  check3.remove();
  check4.remove();

  priceInput1.remove();
  priceInput2.remove();

  menuName[0].textContent = check3.value;
  menuName[1].textContent = check4.value;

  menuPrice[0].textContent = priceInput1.value;
  menuPrice[0].textContent += '원';
  menuPrice[1].textContent = priceInput2.value;
  menuPrice[1].textContent += '원';

})

/*


    // 1. div에 대한 요소를 생성

    const row = document.createElement('div');
    // 태그만 달랑 생성된 상태

    // 2. row요소에 class를 추가
    row.classList.add('row');


    // 3. input 요소 생성하기

    const input  = document.createElement('input');

    // 4. input에 타입을 number로 추가하기

    // input.type = "number";
    // 또는 함수를 이용 => setAttribute();
    input.setAttribute('type','number');


    // 여기까지 하면 <input type = "number">를 한 것

    // 사실 input.setAttribute('class','클래스명')을 해도 되긴 함 classList안해도 됨

    // 5. 클래스 'input-number'추가하기
    input.classList.add('input-number');
    // <input type = "number" class='input-number>를 한것과 동치  ;


    // 6. span으로 x만들기
    const span = document.createElement('span'); // <span></span>

    //7. span태그에 클래스에 'remove-row'추가하기
    span.classList.add('remove-row');
    // <span class='remove-row'></span>

    // 8. span사이사이에 &times를 넣는 것=> 요소로 해석이 되어야 하므로 innerhtml

    span.innerHTML = '&times;';

    // <span class='remove-row'> &times</span>



    row.append(input,span);


    /*
    <div class="row">
        <input type="number" class="input-number">
        <span class="remove-row" >&times</span>
      </div>
      이것이 완성 됨
    */

// 아직 그 부모에 append하지 않아서 역시 아무것도 안 보이는 상태

// 10. 완성된 div.row를 container의 마지막 자식으로 추가하기

//container.append(row);

