// 문자열.toLowerCase() => 문자열이 영어면 전부 소문자로
// 문자열.toUpperCase() => 전부 대문자로


/*

const key1 = document.querySelector('.key:nth-child(1)');
const key2 = document.querySelector('.key:nth-child(2)');
const key3 = document.querySelector('.key:nth-child(3)');
const key4 = document.querySelector('.key:nth-child(4)');




document.addEventListener('keydown', function (e) {

  if (e.key.toUpperCase() == 'Q') {
    key1.style.backgroundColor = "pink";
  }

  if (e.key.toUpperCase() == 'W') {
    key2.style.backgroundColor = "pink";
  }

  if (e.key.toUpperCase() == 'E') {
    key3.style.backgroundColor = "pink";
  }
  
  if (e.key.toUpperCase() == 'R') {
    key4.style.backgroundColor = "pink";
  }
}
);


document.addEventListener('keyup', function (e) {
if(key1.style.backgroundColor=="pink"){
  key1.style.backgroundColor = "white";
}

if(key2.style.backgroundColor== "pink"){
  key2.style.backgroundColor = "white";
}

if(key3.style.backgroundColor=="pink"){
  key3.style.backgroundColor = "white";
}
  

if(key4.style.backgroundColor=="pink"){
  key4.style.backgroundColor = "white";
}
  
});
*/


/*

const keys = document.querySelectorAll(".key");

console.log(keys);


// document로 해야해? div는 일종의 박스형이며 입력에 대한 박스가 아니기 때문

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  let idx; // 임시적인 인덱스값을 저장한다
  // switch로 눌려진 키에 따라 행동하기

  switch(e.key.toLowerCase()){
    case 'q': idx=0; break;
    case 'w': idx=1; break;
    case 'e': idx=2; break;
    case 'r': idx=3; break;
    default:  return;
  }

  // idx와 일치하는 keys배열의 요소 배경색을 변경하겠다.

  keys[idx].style.backgroundColor = "deepPink";



//    case 'q': keys[0].style.backgroundColor = 'pink'; 를 하지 않기 위해

}

)






document.addEventListener('keyup', function (e) {
  // console.log(e.key);

  let idx; // 임시적인 인덱스값을 저장한다
  // switch로 눌려진 키에 따라 행동하기

  switch(e.key.toLowerCase()){
    case 'q': idx=0; break;
    case 'w': idx=1; break;
    case 'e': idx=2; break;
    case 'r': idx=3; break;
    default:  return;
  }

  // idx와 일치하는 keys배열의 요소 배경색을 변경하겠다.

  keys[idx].style.backgroundColor = "white";
//    case 'q': keys[0].style.backgroundColor = 'pink'; 를 하지 않기 위해

}

)


*/


const keys = document.querySelectorAll(".key");

// 키보드 이벤트 감지 핸들러 함수

function changeKeyColor(  e, color
  /*이벤트 종류에서 키가 어떻게 되어야하는지, 배경색이 무슨 색인지 */
) {
  

  const keyMap = {'q':0, 'w':1, 'e':2, 'r':3}
  // 맵 자료구조와 같이 설정한 JS기본객체 keyMap

  

  const idx = keyMap[e.key.toLowerCase()]

  // keyMap의 인자에는 [키]가 들어오면 값이 나옴
  // 만약 keyMap중에 없는 값을 입력했을 때 idx는 undifined

  if(idx!= undefined){
    keys[idx].style.backgroundColor = color;
    // 매개변수로 전달받은 color의 색으로 keys[idx]요소의 배경을 바꿈
  }



}

// 키가 눌렸을 때 실행
document.addEventListener('keydown', (e) => changeKeyColor(e, "deepPink"));


// document.addEventListener('keydown', () ,function(e){ changeKeyColor(e)});와 같은 것
document.addEventListener('keyup', (e) => changeKeyColor(e, "white"));
