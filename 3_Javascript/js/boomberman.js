// js를 통해 수많은 css를 건드려야 한다
// 1) 키보드를 누를 때마다 해당 이미지를 움직인다. 
// 즉 css를 통해 위치를 계속 바꾼다  (transform translate라는 css속성이 있었음)



// x는 box에 img태그를 누적하여 문자열 자체를 태그를 통해 추가해야 함
// 그러면 이 cosnt man  = 의 함수는 더이상 유효하지 않다. 따라서 사람이 안 움직임





function bombCreate(){
  const man = document.querySelector("#boomberman");
  bomb.style.visibility = "visible";
  
  bomb.style.transform = man.style.transform;

}


document.addEventListener('keydown', function (e) {
  const man = document.querySelector("#boomberman");
  const bomb = document.querySelector("#bomb");


  let idx; // 임시적인 인덱스값을 저장한다
  // switch로 눌려진 키에 따라 행동하기

  console.log(e.key);

  switch(e.key){
    case 'ArrowLeft': idx=0; break;
    case 'ArrowDown': idx=1; break;
    case 'ArrowRight': idx=2; break;
    case 'ArrowUp': idx=3; break;
    case 'x': 
    case 'X': idx=4; break;
    default:  return;
  }

  if(idx===0){
    man.style.transform += 'translate(-10px, 0px)';
  }

  if(idx===1){
    man.style.transform += 'translate(0px, 10px)';
  }

  if(idx===2){
    man.style.transform += 'translate(5px, 0px)';
  }

  if(idx===3){
    man.style.transform += 'translate(0px, -10px)';
  }

  if(idx===4){
    bombCreate();
  }

  

}


)


// document.querySelector('#boomberman').addEventListener('keydown', (event) => {
//   const element = document.querySelector('#boomberman');


//   const arrowkeys  = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

//   if(!arrowkeys.includes(event.key)) return;
  
//   if (event.target.checked === true) {
//     element.animate(
//       {
//         transform: [
//           'translateX(0px)',
//           'translateX(300px)'
//         ]
//       },
//       {
//         duration: 500, // 밀리초 지정
//         fill: 'forwards', // 종료 시 속성을 지님
//         easing: 'ease' // 가속도 종류
//       }
//     );
//   } 
// });