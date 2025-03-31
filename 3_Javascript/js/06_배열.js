// 배열의 선언과 사용

function check1() {

  const arr1 = new Array(); // 빈 0칸의 배열
  const arr2 = new Array(3); // 빈 3칸의 배열

  const arr3 = []; // 빈 0칸의 배열
  const arr4 = ["사과", "바나나", "딸기"];

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);


  // 배열.length => 배열에 있는 칸 수 
  // 또는 저장된 데이터 수


  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);


  // 배열의 인덱스
  // 배열명[index] => 배열의 해당 인덱스에 존재하는 데이터를 반환
  console.log('arr4[0]', arr4[0]);
  console.log('arr2[0]', arr2[0]);


  // 배열명[index] = 값;
  // 해당 인덱스에 값 대입

  arr2[0] = 100;
  arr2[1] = "점심뭐먹지";
  arr2[2] = true;
  arr2[3] = 0.5;

  console.log(arr2.length);
  console.log("arr2: ", arr2);

  // arr1은 0칸짜리 배열이었다.

  arr1[0] = '가';
  arr1[1] = "나";
  arr1[2] = '다';

  console.log("arr1: ", arr1);

  // 중간에 값을 건너뛰면?

  arr1[5] = "바";


  console.log("arr1: ", arr1);

  // 원하는 index에 값을 마음대로 추가할 수 있다
  // 중간에 건너뛴 index는 빈칸으로 채워짐



}

function check2(){
  //배열과 for문
  // for문을 이용하여 배열 요소를 초기화
  const arr = [];

  for(let i=0; i<3; i++ ){
    arr[i] = i*10;
  }
  console.log(arr);

}



function check3(){
  // 결과를 출력할 span태그
  const menuResult  = document.getElementById("menuResult");


  // 점심메뉴로 초기화 된 배열을 생성

  const menu = ['제육볶음', '돈까스', 
    '파스타', '순대국', '닭갈비', '초밥', 
    '삼겹살', '알탕', '햄버거', '피자', '백반'];

  // 메뉴 배열 index범위 내에서 난수를 생성

  const randomNumber 
  = Math.floor(Math.random() * menu.length);

// 버림을 하여 0부터 10까지의 난수 값을 생성하기 위함 


// 난수번째 index 요소를 화면에 출력

menuResult.innerText= menu[randomNumber];

// span 사이에 들어갈거니까



}