const input1 = document.querySelector('#input1');
const btn1 = document.querySelector('#btn1');

// btn1을 클릭했을 때 input1에 있는 값을 읽어와 print1이라는 함수를 호출하는 문제


function print1(num, str) {
  // 단지 두 값을 전달받아 그 둘을 콘솔로 단순 출력

  console.log(`${num}은 ${str} 입니다. `);

}


btn1.addEventListener("click", function () {
  const value = input1.value;

  if (value.length == 0) {
    // value자체가 0이라는게 아니라 입력값 자체가 없다는 말
    console.log("값을 입력해주세요");
    return; // 함수 종료 후 호출한 곳으로 돌아 감. 
    // 호출한 곳이 그냥 클릭이 끝났으므로 그냥 끝내곘다는 말로 이해
  }

  let result; // 입력된 값이 0인지 양수인지 음수인지를 판별하여 저장

  if (Number(value) == 0) result = '0';
  // input에 들어오는 것은 무조건 string이라 진짜 같은지를 비교하는 ===은 안되고
  // 타입 검사는 안 하는 ==을 하려면 무조건 타입 변환이 일어나야


  else if (Number(value) > 0) result = "양수";
  else result = "음수";

  // 문제: 두 값을 입력받는데 그 값이 양수 음수 0이라고

  print1(value, result);

})


// 매개변수로 배열 전달하기



function arrayTest(arr, num) {
  // 매개변수로 전달받은 배열의 모든 요소를 출력
  for (let i = 0; i < arr.length; i++) {
    // arr[i]에 있는 값이 만약 멜론이라면 해당 요소에 있는 값을 딸기로 재대입

    if (arr[i] == '멜론') arr[i] = '딸기';
    num = 100;

    console.log(` ${i} 번 인덱스 값: ${arr[i]}  `)
  }
}

document.querySelector("#btn2a").addEventListener("click", function () {
  const arr = ['사과', ' 바나나', '멜론',]
  let x = 0;
  arrayTest(arr, x);
  //arrayTest(arr);

  // arr은 배열이므로 arrayTest함수에 전달인자로 arr을 전달하면 
  // arr에 지정한 주소만 보내서 함수를 수행하는 얕은복사 개념
  // 배열은 참조형이라서 같은 주소를 수정하면 그 값의 절대적인 값이 바뀐다.
  console.log(x);

  // x는 call by value로 
  // arr은 call by reference로
})


function btn2bfn(el) {
  // 매개변수 el (element): 이벤트가 발생한 곳은 클릭 이벤트 발생한 요소
  el.style.backgroundColor = "yellow";
}




function print2(Fn) {
  console.log(`a+b= ${Fn(3, 4)}`)
  // Fn자체를 호출하되 이는


}

// 매개변수로 함수 전달하기 
document.querySelector("#btn2c").addEventListener("click", function () {

  // 변수명이 곧 이 함수명. 즉 익명함수의 형태임에도 그 함수의 이름이 sumFn이 됨
  const sumFn = function (a, b) {
    return a + b;
    // 인자 둘을 더한 값을 가지고 호출한 곳으로 돌아간다.
  }

  // 내부에서 만든 함수를 다시 다른 함수의 인자로 전달
  print2(sumFn);

})

// function안에 함수를 만들겠다.



// 일단 버튼을 클릭 => 옆에 분홍 익명함수 내부로
// 그 내부에서 sumFn이 정의 
// 이후 print2를 호출하고 인자로 sumFn을 전달
// print2를 수행 => 매개변수로 전달받은 것을 호출하여 콘솔로 출력


// 역으로 Fn이 누군지 print2(Fn)의 근본을 찾아
//  맨 아래로 가서 sumFn이 뭔지 찾아 위로
// function(a,b)이 그 내용인데 그는 둘을 더해주는 기능을 함




// class가 arrow인 모든 요소를 얻기 위해 all을 이용한다

const arrowList =
  document.querySelectorAll(".arrow");

arrowList[0].addEventListener("click", () => {
  alert('화살표함수의 기본 함수 연습');

})


arrowList[1].addEventListener("click", e => { e.target.style.backgroundColor = "pink"; }

)


/* 이름이 이미 정의된 함수를 바꾼다.


 가령 function test (){}가 아니라

const test= () => {} 로 많이 하곤 한다.
  */


const twoNumberPlus = (otherFn) => {
  const input1 = Number(prompt("첫 번째 값"))
  const input2 = Number(prompt("두 번째 값"))

  alert(otherFn(input1, input2));
}

arrowList[2].addEventListener("click", () => {
  twoNumberPlus((a, b) => a + b);
  //  twoNumberPlus( (a,b) => {return a+b });
})




// 버튼이 클릭되니
// 익명함수 내에서 two라는 화살표 함수를 호출하고 그 인자가 함수임
// 실제 위에서 a+b가 




//return이 한줄이어도 object타입이면 중괄호를 생략할 수없음

function printObject(otherFn) {
  const obj = otherFn("홍길동", 20);

  console.log(`obj.name : ${obj.name}`);
  console.log(`obj.age : ${obj.age}`);
}


arrowList[3].addEventListener("click", () => {
  printObject((name, age) => {
    return { "name": name, "age": age };
  });

  // js객체가 리턴될 것 같으면 return을 생략하지 말자. 
})





//즉시 실행 함수
(() => {
  console.log('즉시 실행 함수입니다.');
}) ();