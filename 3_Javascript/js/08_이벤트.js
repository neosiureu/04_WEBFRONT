// 인라인 이벤트 모델 확인

function check1(btn) {
  // 호출될 당시 this의 인자를 받음 
  console.log(btn);

  // 매개변수 btn == 클릭한 버튼 this 자체를 의미

  //버튼 클릭할 때마다 색바꾸기


  // 1) background 색 자체를 얻어오기
  const bgColor = btn.style.backgroundColor;

  // 2) 버튼이 클릭 될 때마다 yello와 pink를 바꿈

  if (bgColor == 'yellow') {
    btn.style.backgroundColor = "pink";

  }

  else {
    btn.style.backgroundColor = 'yellow';

  }
}


// // 고전 이벤트 모델 확인
// // 아이디가 test1-1인 요소를 얻어와 test1a라는 변수에 저장
// const test1a = document.querySelector("#test1-1");

// // 고전이벤트 모델 작성법

// // 요소.이벤트리스너 = 이벤트 핸들러

// test1a.onclick = function () {
//   alert('고전 이벤트 모델 확인 버튼 클림 됨');

// };



// 고전 이벤트 모델 제거
// 아이디가 test1-2버튼 클릭 시 test1-1의 onclick이벤트리스너의 이벤트핸들러 제거

document.querySelector('#test1-2').onclick = function () {
  // 기존 onclick의 이벤트핸들러, 즉 함수를 null로 덮어 씌움
  test1a.onclick = null;
  alert('이벤트 제거 됨');
}

// #test1-3요소를 얻어와 test1c라는 변수에 저장한다
const test1c = document.querySelector('#test1-3');

//  #test1-3요소가 클릭될 시 배경색을 빨강으로

test1c.onclick = function(){
  test1c.style.backgroundColor = "red";
}


// 나중에 이렇게 잘못 작성하면 원치 않는 동작

test1c.onclick = function(){  test1c.style.color = "white" }




const test2 = document.querySelector('#test2');

















// 표준 이벤트 모델로 모델을 작성한다
// 요소. addEvenetLister (이벤트의 종류를 str로 , handler 즉 함수 )


/*
✅ 문제 1-1. #test2 요소를 클릭할 때마다 투명도를 0.1씩 낮추고, 0이 되면 다시 1로 초기화하라
대상 요소:

<div id="test2">클릭</div>
요구 사항:

사용자가 이 녹색 상자를 클릭할 때마다 투명도(opacity)를 0.1씩 낮춰라.
투명도는 style.opacity로 조작할 수 있다.
맨 처음 클릭 시 투명도는 "" (빈 문자열)이므로 1로 간주하고 시작한다.
투명도가 0이 되면 다시 1로 초기화되어야 한다 (반복적으로 깜빡이듯 동작).
✅ 문제 1-2. #test2 요소를 클릭할 때마다 클릭 횟수를 표시하라
대상 요소:
동일한 #test2 요소

요구 사항:

이 요소를 클릭할 때마다 내부 텍스트(innerText)에 클릭 횟수를 숫자로 표시하라.
예: 처음 클릭하면 "1", 두 번째 클릭하면 "2"...
이 기능은 위의 투명도 조절 기능과 같은 요소에 동시에 적용되어야 한다.
즉, 하나의 요소에 두 개의 이벤트 리스너를 추가해야 한다 (표준 이벤트 모델 활용).

*/ 

const tester = document.querySelector('#test2');


tester.style.opacity=1
let curr= tester.style.opacity;

tester.addEventListener("click",function(e){
   console.log(curr);
   tester.style.opacity = curr;
   curr-=0.1;

   if(curr<=0){
    tester.style.opacity=1;
    curr=1;
   }

})


let cnt =0;
tester.addEventListener("click",function(e){
  tester.innerHTML = cnt++; 
}
)




const input3 = document.querySelector('#input3');
const box3 = document.querySelector('#box3');

input3.addEventListener("keyup",function(e){
  console.log(e);
  if(e.key=='Enter'){
    box3.style.backgroundColor = input3.value;
  }

})







