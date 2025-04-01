// 문자열.toLowerCase() => 문자열이 영어면 전부 소문자로
// 문자열.toUpperCase() => 전부 대문자로


/*

const keys = document.querySelectorAll(".key");

// 키보드 이벤트 감지 핸들러 함수

function changeKeyColor(  e, color
  /*이벤트 종류에서 키가 어떻게 되어야하는지, 배경색이 무슨 색인지 
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
*/


const keys = document.querySelectorAll(".key");

document.addEventListener('keyup',function(e){
 
   console.log(e.key);

  let idx;
  switch (e.key.toUpperCase()){
    case 'Q':  idx=0;  break;

    case 'W': idx=1; break;
    
    case 'E': idx=2; break;
    
    case 'R': idx=3; break;
    default: return;

  }

  keys[idx].style.backgroundColor = 'white'; 


})


document.addEventListener('keydown',function(e){
 
  console.log(e.key);

 let idx;
 switch (e.key.toUpperCase()){
   case 'Q':  idx=0;  break;

   case 'W': idx=1; break;
   
   case 'E': idx=2; break;
   
   case 'R': idx=3; break;
   default: return;

 }

 keys[idx].style.backgroundColor = 'red'; 


})