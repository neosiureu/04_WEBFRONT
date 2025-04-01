// name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn1 (name){
  console.log(`1번: Hello ${name}!`); 
}

fn1('이주원');


function fn2 (num1, num2){
  console.log(`두수의합은 ${num1+num2}`)
}

fn2(3,5);


const fn3=(num1, num2)=>
 /* {  
  return*/   num1*num2
  /* }*/


console.log(`두수의곱은 ${fn3(3,5)};`)



const fn4=(num1, num2)=>{  
  if(num1>num2){
    console.log('첫번째 숫자가 더 큽니다');
  }

  else{console.log('두번째 숫자가 더 크거나 같습니다.');
  } 
};

fn4(7,5);




const printLength = (str) => {
  console.log(`문자열의 총 개수는 ${str.length}`);
}

printLength('아라아아아아라라라아아');



// const fn6 = (str, cycle) => {
//   for(let i=0; i<cycle; i++){
//     console.log(` ${str} ` );
//     console.log('\n'); 
//   }
// }

// fn6('아악', Number(10));



function reapeatString(str,num){
  let result="6번문제 출력:";

  for(let i=0; i<num;i++){
    result += str;
  }

  console.log (result);
}

reapeatString("hello ",3);




// const fn7 = (num) => {
//   if(num%2==0){
//     return true;
//   }
//   return false;
// }

// console.log(fn7(15));

function isEven(num){
  return num%2 ===0;
}

console.log("7번 문제 출력", isEven(4));
console.log("7번 문제 출력", isEven(9));



const fn8 = (num1, num2, num3) => {
   return Math.max(num1,num2,num3);
}

console.log ("8번문제 출력" ,fn8(1,20,3));




tmparr = [42,40,49];

const fn9 = numarr => {
  return numarr[0]
}

console.log(fn9(tmparr));




const fn10 = numarr => {
  // let sum=0;
  // let avg =0;
  // for(let i=0; i<numarr.length; i++){
  //   sum+=numarr[i]
  // }


  // js내장함수: reduce
  let sum = numarr.reduce((acc,curr) => { return acc+curr} );


 avg = sum/(numarr.length);
 return { "합계": sum, "평균": avg };
}


/* 
=> JS내장 배열메서드, 배열의 모든 요소를 순회하며 하나의 결과값을 누적하여 반환


acc = accumulator(누산기) => 이전 콜백 호출에서 반환된 값, 즉 누적된 값

curr = currentValue => 현재 배열 요소의 값

가령 배열이 [1,2,3,4,5]이면

reduce 메서드에 들어갔을 때 

첫 반복 시 acc=0 curr=1 

=> 두번째 반복일 때 acc는 0+1을 지니고 있음 

=> 다음 콜백 수행 시 acc=1 curr=2 

=> 세번째 반복일 때 acc는 1+2를 지니고 있음

=> ....


*/

console.log(fn10(tmparr));






// function fn (num1, num2){
//   return num1*10+num2*20;
// }

// const fn11 =  (num1, num2, fn) => {
//   return (fn (num1,num2));
// }

// console.log(fn11(7,8,fn) );






function calculator(a,b,operation){
  return operation(a,b);
}

function add(x,y){
  return x+y;
}

function minus(x,y){
  return x-y;
}

console.log('11번: ', calculator(5,3,add));
console.log('11번: ', calculator(5,3,minus));

// 꼭 const로 함수이름을 따로 저장하지 않고 
// 그냥 함수를 써도 인자로 넣을 수 있더라.






// const flast = function fnlast (hi){
//   console.log(hi);

// }

// const fn12 = (names,flast) => {
//   console.log(`${names} 입니다. \n`);
//   flast;
// }



// fn12('이주원',flast('안녕하세요'));



function greet(name,callback){
  callback(name);

}

function sayHello(name){
  console.log(`12번: Hello, ${name}`)
}

function sayGoodby(name){
  console.log(`12번: Bye, ${name}`)
}

greet('길동', sayHello);
greet('영희', sayGoodby);