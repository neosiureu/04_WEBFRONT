// 요소.remove(): 요소를 제거할 수 있다

// 계속 사용할 버튼 두개를 전역으로 생성

const addBtn = document.querySelector('#add');
const calcBtn = document.querySelector('#calc');

const container = document.querySelector('.container');
// 동적으로 만들어진 요소를 추가로 덧붙여야 하는 최종적인 대상 요소

addBtn.addEventListener('click',()=>{


  /* <div class="row">
        <input type="number" class="input-number">
        <span class="remove-row" >&times</span>
      </div> 
       이걸 추가하고싶다
  */

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

    container.append(row);













    //클릭된 x버튼의 부모 요소를 제거한다. span의 부모인 row를 없앨 수 있다.
    // 1) span의 클릭이 일어나면 부모요소 자체를 없애겠다
    span.addEventListener('click',(e)=>{
      // 현재 이벤트가 발생한 요소만 딱 정하려고 함
      
      // 2) 현재 x버튼에 클릭이라는 이벤트가 발생했을텐데 그 중 클릭된 x버튼만 한정으로 없애려고
      // 그 target에 대한 부모 요소를 탐색

      const parent = e.target.parentElement  // span태그가 target. 그 부모는 parentElement
      // 즉 이것이 row

      // 3) 부모 요소를 제거

      parent.remove();
    })


})









// 계산버튼 클릭 시 

calcBtn.addEventListener('click',() => {
  // 화면상의 모든 인풋 클래스를 다 얻어옴
  // 1) 모든 클래스가 input-number인 요소 얻어오기
  const numbers= document.querySelectorAll(".input-number");

  // 2) 반복문을 통해 모든 요소에 접근하여 value를 얻어와 
  // => 문자이므로 Number로 바꿔서 다 더해
 
  
  // 합계를 누적할 변수 sum
  let sum =0;

  for(let i=0; i<numbers.length; i++){
    sum+= Number(numbers[i].value);
  }

  // 3) for문 끝난 지점에 alert로 결과 출력
  alert('결과: ' + sum);


})