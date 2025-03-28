// input1과 2와 결과라는 변수를 구해온다


const number1 = document.getElementById("input1");
// 아이디를 이용해 문서내에서 
// 인자로 들어온 키와 같은경우만 number1에 저장

// document = html 문서내에서
// get= 얻다
// element = html내 요소
// byId: 아이디가 일치하는 것만

console.log(number1);

// html에서 얻어오고 그냥 끝이지.
//  number1은 바뀌는 경우가 없음. 
// 따라서 const타입을 변수삼아 get하곤 함



const number2 = document.getElementById("input2");
console.log(number2);

const result = document.getElementById("calcResult");
console.log(result);













function plusFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  // 각 태그에는 수많은 요소가 있는데 
  // input요소.value라고 하면 input요소에 작성된 값을 얻어온다는 말

  console.log(value1, value2);

  // -> input요소에 작성된 값은 무조건적으로 문자열이라 
  // 더해봐야 이어쓰기 됨

  /*
  타입이 어떤 타입이라도 무조건 문자열로만 수집됨
  
  따라서 함수 내에서 형변환을 해야 한다
  
  
  

  [해결방법]
  문자열을 숫자로 변경하는 코드 추가
  숫자만 작성된 문자열을 진짜 숫자타입으로 바꾸려면 캐스팅하는 함수를 써야
  Number(문자로된숫자) => 진짜 숫자가 됨 */

  console.log(Number(value1) + Number(value2));
  /*를 js코드에 추가한다.
  두 수의 합을 아이디가 "calcResult"인 요소 (result변수) 의 내부글자로 대입하기 */

  result.innerText = Number(value1) + Number(value2);
}


function minusFn() {
  const value1 = number1.value;
  const value2 = number2.value;


  result.innerText = Number(value1) - Number(value2);

}


// function mulFn() {
//   const value1 = number1.value;
//   const value2 = number2.value;


//   result.innerText = Number(value1) * Number(value2);

// }

function multiFn() {
  const value1 = number1.value;
  const value2 = number2.value;


  result.innerText = Number(value1) * Number(value2);

}


function divFn() {
  const value1 = number1.value;
  const value2 = number2.value;


  result.innerText = Number(value1) / Number(value2);

}


function modFn() {
  const value1 = number1.value;
  const value2 = number2.value;


  result.innerText = Number(value1) % Number(value2);

}







const num1 = document.getElementById("num1");



const num2 = document.getElementById("num2");


const num3 = document.getElementById("num3");

const res = document.getElementById("total");



function totalFn(){
  const value1 = num1.value;
  const value2 = num2.value;
  const value3 = num3.value;
  res.innerText = Number(value1) + Number(value2)+Number(value3) ;

}

