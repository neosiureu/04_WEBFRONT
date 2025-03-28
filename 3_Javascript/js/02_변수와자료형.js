console.log(1234);
// console.log() => 괄호사이 값을 브라우저 콘솔에 print 
console.log('JS는 홑따옴표 가능')
// console이 출력하는게 어디 파일에 있는 것으로 인해 일어났는지 알려줌


// 변수의 선언: 메모리에 공간 할당 및 그에대한 이름 붙이기

/*
변수종류 변수명;
var        ?
let         ?
const       ?
*/


var number1;
// [작성법] => 변수명 = 값
number1 = 10;
console.log(number1);

var number2 = 20;
console.log(number2);


console.log((number1 + number2) * 2);
// 간단한 계산정돈 해줘


number1 = 300;
number2 = 400;
// 변수에 대입한 값 변경하기. number1과 number2에 300을 재대입

// 변경된 값을 출력할 수 있다 다만 문자열과 특정형을 +해도 그저 이어쓰게 된다

console.log("number1의 값 " + number1);
console.log("100" + 100);


// 2) 문자열과 같이 다른 자료형을 보고싶다면 
// 형변환을 막기 위해 log 내부 콤마를 쓰면 독립적 출력 가능

console.log("number1 : ", number1, "number2 :", number2);

/*
100100으로 문자열로 연결되는 것과 콤마를 통해 제대로 구분된 것은 형태의 색 자체가 다르다
진짜 숫자면 파란색, 문자열은 검은색 취급
 */






// var 대 let 대 const의 차이

/* 1) var 변수선언시 중복되는 변수명으로 선언이 가능하다 
먼저 선언된 변수
-> 먼저 선언된 변수에 나중에 선언된 이름이 똑같은 변수가 덮어씌워진다
*/


var menu = "삼겹살";
console.log("menu: " + menu);
// 같은 menu라는 변수로 선언

var menu = "초밥";
console.log("menu: " + menu);
// 변수명이 중복되어 덮어씌워지면 이전 내용은 다 날아감


/*2) let은  중복이 안되는 var형*/

let number3 = 25;

number3 = 35;

console.log(number3);

/*3) 상수, 또는 자바에서의 final같은 개념의 변수라면 const 사용*/

const pi = 3.141592;

// 선언과 동시에 반드시 초기화, 재대입 절대 불가
// 재대입을 해도 빨간줄이 안 뜸. 콘솔창에만 뜰 뿐

// pi=2.71;

/**
 02_변수와자료형.js:89 Uncaught TypeError: Assignment to constant variable.
    at 02_변수와자료형.js:89:3
*/

// 상수의 법칙에 어긋난다는 말일듯









/*

let const는 블록레벨 
let과 const를 통해 변수를 선언하면 중괄호 내부에서만 유효하다
이를 블록레벨 스코프라 한다


즉 코드 블록 내부에서 선언한 변수 let const는 
해당 블록 외부에서는 모름

*/

let foo1 = 123;
const foo2 = 456;

// 이렇게 선언하면 전역변수. js내에서 중괄호 내에 포함된 것이 아니기 때문

{ // 중괄호를 치면 블록레벨의 선언
  let num1 = 789;
  const num2 = 0;
  //  이렇게 선언해야 비로소 지역변수
}



console.log(foo1);
console.log(foo2);

// console.log(num1);
// console.log(num2);
// -> 둘 다 block level scope이기에 블록 밖에서는 접근 불가



/* 함수레벨 스코프를 갖는 var
var 키워드로 선언된 변수는 함수 내 어디서든 접근 가능
var로 선언된 변수가 있는 함수 전체에서 유효. 중괄호는 무관
*/

var test1 = 123;

{
  var test2 = 456;
  // 외부에서 console하면 let에서는 접근 불가 => 이거는 가능
}


console.log(test1);
console.log(test2); // 이것도 출력 됨
// 일반블록은 무시하는 함수레벨스코프 var

function example() { // 이렇게 함수형태로 만들어진 코드블록은 함수레벨 scope
  var test3 = '함수레벨 var 테스트';
  console.log(test3)

}

// 그냥 {}말고 함수 {}는 확실히 다른 영역

// console.log(test3);
/*
test3은 함수 블록에서만 유효하다. 
즉 일반 블록레벨만 무시할 뿐 함수레벨 블록은 무시하지 못함
즉 함수레벨로 중괄호가 묶여있으면 var고 뭐고 무조건 그 안에서만 보이는 지역변수
*/

example();





function example2() {
  if (true) {
    var x = 10; //여기서 선언되었다 해도 그냥 중괄호는 무시, 
    // 다만 함수중괄호 내에서만 가능. 
    // 즉 x는 블록 내에서 선언되었으나 함수레벨 스코프를 가진 var임
  }
  console.log(x)

}

example2();



/*
호이스팅(Hoisting)
호이스팅은 JavaScript에서 변수와 함수의 선언이 해당 스코프의 최상단으로 끌어올려지는 동작을 말함

호이스팅은 변수의 선언만 끌어올려지며,
변수의 초기화는 호이스팅되지 않음 *


var, let, const 변수들은 각기 다른 방식으로 호이스팅됨

*/

// 1. var의 호이트팅

// : var로 선언된 변수는 "선언만" 한정으로 해당 스코프의 최상단으로 끌어올려진다.
// 다만 초기화는 원래 코드에서 하던대로 한다

console.log(a);

var a = 10;
/*a가 선언도 안됐는데 콘솔에 있어서 에러가 나지 않음. 
이 원인이 호이스팅
선언부에 해당하는 a라는 값이 맨 앞에 있기에 
메모리상에 a라는 공간이 처음부터 정의 된 셈 */

// -> 호이스팅 되어 var a라는 선언부는 최상단으로 올라간다
// -> 선언은 되어있으나 a에는 값이 대입되어있지 않음
// -> console의 출력 결과가 undefined. 
// 이는 정의는 되어있지만 초기화가 안되었을 때 나타나는 값

console.log(a);


// 2. let과 const의 호이스팅

//: let, const로 선언된 변수는 선언만 최상단으로 감
// 다만 var와는 달리 이 둘은  초기화가 진짜 되기 전에는 선언부만으로 사용 불가


// 그 이유는 tdg (temporal dead zone:  시간적 사망 공간)
// 코드 실행 과정에서 특정 시점까지 변수가 접근 불가능한 상태를 의미
// JS에서 let/const키워드로 선언된 변수가 초기화되기 전까지 접근할 수 없는 구간

// console.log(x);
let x =50;


// 02_변수와자료형.js:235 Uncaught ReferenceError: 
// Cannot access 'x' before initialization
/* 
뭔지는 아는데 초기화되기 전에는 접근할 수 없다는 의미

x라는 것이 위쪽으로 끌어올려진 상태이긴 하나 

TDZ라는 공간에 놓여 초기화 이전에는 접근 불가

접근하려고 하면 오류가 뜬다

*/


console.log(x);


// console.log(n);
const n=100;
console.log(n);

// -> let과 const는 var보다 예측 가능한 코드를 작성 가능
// 즉 undefined되는 경우도, 같은 이름 변수가 덮어씌워지는 경우도 절대 없으므로 이걸 쓰자




// JS자료형의 확인

// 그냥은 자동형변환돼서 안보이니 typeof라는 연산자를 사용하자

let undef; // 선언부
console.log("undef: " , undef, typeof undef);


// undefined: 선언만 되고 값이 대입 안된 것


const userName = "홍길동";

console.log("name: ",userName, typeof userName);

const phone = '010-1234-5678';

console.log("phone: ",phone, typeof phone);


const gender  = 'M'; // 한글자만 작성해도 char는 없으니 문자열

console.log("gender: ",gender, typeof gender);


// number 

const age=21;
const height =160.5;
const eyesight= 0.5;


console.log("age: ",age, typeof age);
console.log("height: ",height, typeof height);
console.log("eyesight: ",eyesight, typeof eyesight);


//boolean
const isTrue = true;
const isFalse = false;

console.log("isTrue: ",isTrue, typeof isTrue);
console.log("isFalse: ",isFalse, typeof isFalse);




// object는 객체이고 값을 여러개 저장할 수 있는 형태를 통틀어 말한다. 

// 가장 먼저 배열

const numbers=[10,20,30];

console.log("numbers: ",numbers, typeof numbers);

console.log("numbers 배열 값 중 0번째의 값: ", numbers[0], typeof numbers[0]);
console.log("numbers 배열 값 중 1번째의 값: ", numbers[1], typeof numbers[1]);
console.log("numbers 배열 값 중 2번째의 값: ", numbers[2], typeof numbers[2]);
console.log("numbers 배열 값 중 100번째의 값: ", numbers[100], typeof numbers[100]);

numbers[3] = 40;
console.log("numbers 배열 값 중 3번째의 값: ", numbers[3], typeof numbers[3]);


// 자바스크립트에서의 배열은 값 추가 및 삭제가 마음대로 가능
// 자바의 배열과는 달리 크기의 유연성



// 2) JS객체타입

// 값을 맵의 형식으로 여럿 지정하는 형태
// -> {K:V, K:V, ...}
// key => 값을 구분하는 이름으로 변수라고 생각하면 된다
// value => K에 대응되는 값으로 일종의 리터럴로 사고하자

const user = {id: "user01" , pw: "pass01" , userName: "홍길동"};

console.log("user", user, typeof user);


// 특히 js객체는 map의 형태이기에 자주 사용하게 되므로 항상 숙지!

// 객체에서 값을 얻어오는 법

// 방법1: 대괄호의 이용 변수명 ['key']

console.log(user['id']);



// 방법2: 변수명.key

console.log(user.id, user.pw, user.userName);




// 3) 함수 타입


const 변수명 = function() {};
// 함수의 이름을 '변수명'으로 바꾸는 익명함수

const sumFn = function (a,b) {return a+b};

// 함수 이름이 명시되지 않았으나 = 왼쪽에 있는 sumFn에 대입

// function sumFn(a,b){
//   return a+b;
// }

console.log("sumFn의 타입은", typeof sumFn);

console.log(sumFn(3,5));

// null의 정의

console.log("null의 타입은", typeof null);
