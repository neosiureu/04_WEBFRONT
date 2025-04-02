let xIndex =0; //x좌표 방향대로 얼마만큼 이동했는지저장
let yIndex =0; //y좌표 방향대로 얼마만큼 이동했는지저장

/*다만 사람,폭탄등의 이미지는 전역으로 설정하면 DOM이 무너져서 안됨 */



document.addEventListener('keydown', function (e) {
  const boomberman = document.querySelector("#boomberman");
  const bomb = document.querySelector("#bomb");
  console.log(e.key);

  switch(e.key){
    
    case 'ArrowLeft': xIndex-=10;  break;
    case 'ArrowDown': yIndex+=10; break;
    case 'ArrowRight': xIndex+=10;  break;
    case 'ArrowUp': yIndex-=10; break;
    // man.style.transform += 'translate(-10px, 0px)'; 
    // 이렇게 하지 않고 전역변수의 좌표 값을 줘서 x좌표와 y좌표를 아래에서 전달하기로 함
    case 'x':  
    
    const box = document.querySelector('#box');

    box.innerHTML
    +=
    `<img src="../../images/bomb.png" class="bomb" 
    style="transform: translate(${xIndex}px, ${yIndex}px); 
    position:absolute>"`

    /*   document.getElementById("box").innerHTML
  +=`<img src="../../images/bomb.png" class="bomb" >`;*/
    break;
    case 'z': 
    explodeBomb();
    
    break;
    default:  alert('방향키, 또는 z,x만 가능함');

  }

  boomberman.style.transform = `translate(${xIndex}px,${yIndex}px)`;



}
)


const explodeBomb = () => {
  const bombs = document.querySelectorAll(".bomb");

  // js에서는 for of문이 존재, 마치 for each문같은 것으로
  // 배열같이 반복 가능한 객체의 요소를 순차적으로 순회하는 enhanced for의 일종

  for(let bomb of bombs){
    bomb.src = "../../images/boom.png";

  }

}




/*
function bombCreate(){
  const man = document.querySelector("#boomberman");
  const bomb = document.querySelector(".bomb");

  // bomb.style.visibility = "visible";
  const now= man.style.transform;
  
  document.getElementById("box").innerHTML
  +=`<img src="../../images/bomb.png" class="bomb" >`;

  const bombs = document.querySelectorAll('.bomb');
  const newboms = bombs[bombs.length-1]

  newboms.style.transform = now;
  newboms.style.visibility = "visible";

}

function bombing(){
  const bomb = document.querySelector(".bomb");
  let bombList = document.querySelectorAll('.bomb');
  console.log(bomb.length-1);
  for(let i=0; i<bombList.length; i++){
    bombList[i].className='boomm';
    bombList[i].src="../../images/boomm.png";
  }
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
    case 'z': 
    case 'Z': idx=5; break;
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

  if(idx===5){
    bombing();
  }

}


)

*/