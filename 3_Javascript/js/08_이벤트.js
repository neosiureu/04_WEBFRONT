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



// // 고전 이벤트 모델 제거
// // 아이디가 test1-2버튼 클릭 시 test1-1의 onclick이벤트리스너의 이벤트핸들러 제거

// document.querySelector('#test1-2').onclick = function () {
//   // 기존 onclick의 이벤트핸들러, 즉 함수를 null로 덮어 씌움
//   test1a.onclick = null;
//   alert('이벤트 제거 됨');
// }

// // #test1-3요소를 얻어와 test1c라는 변수에 저장한다
// const test1c = document.querySelector('#test1-3');

// //  #test1-3요소가 클릭될 시 배경색을 빨강으로

// test1c.onclick = function(){
//   test1c.style.backgroundColor = "red";
// }


// // 나중에

// test1c.onclick = function(){  test1c.style.color = "white" }




// const test2 = document.querySelector('#test2');

















// 표준 이벤트 모델로 모델을 작성한다
// 요소. addEvenetLister (이벤트의 종류를 str로 , handler 즉 함수 )


test2. addEventListener("click", function(){
  // 투명도는 1에 가까울수록 불투명. 0에 가까울수록 투명.
  
  // 0.1씩 감소

  // 현재 test2요소의 투명도를 확인

  let curr
   = test2.style.opacity;

   // 맨처음에는 투명도가 빈 문자열과 같이 나온다
   console.log(curr);

   // 빈문자열이 나옴 => 1이어야 함

    if (curr==''){
      test2.style.opacity =1;
      curr = 1;
    } // 일종의 초기화 과정
  
    test2.style.opacity = curr - 0.1;

    if(test2.style.opacity == 0){
      test2.style.opacity = 1;

    }
})

let count= 0;
test2.addEventListener("click",function(){
  count++; 
  // 표준 이벤트 모델의 이벤트 핸들러 내부에서의 this
  // 여기서 this 역시 이벤트가 발생한 요소인 test2라는 말


  this.innerText = count;

})




const input3 = document.getElementById("input3")
const box3=document.getElementById("box3")

input3.addEventListener('keyup', function(e){  
  if(e.key == 'Enter'){
    // 엔터가 눌러지고 떼어졌을 때
   box3.style.backgroundColor = input3.value;
   // value와 inenrText의 차이

   // placeholder는 글자가 아니니까 
   // 태그 사이에 껴있는 것이 아닌 셈

  }
});




box3.addEventListener("click", function(e){
  // e.target : 이벤트가 발생한 요소, 즉 this의 다른말
  alert(`배경색: ${e.target.style.backgroundColor}`);
})






