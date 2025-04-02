document.getElementById('btn1').addEventListener('click',()=> {
  
  
  setTimeout(function(){

    alert('3초 뒤에 출력되는게 성공');

  } , 3000);

});


// window.setInterval() => 일단 나중에도 쓸거라 전역에 저장할 예정
let interval;



// 현재 시간을 문자열로 반환시키는 함수를 생성하는 흐름


// js 내장객체

function currentTime(){
  const now  = new Date();

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if(hour<10) hour = '0'+hour;
  if(min<10) min = '0'+min;
  if(sec<10) sec = '0'+sec;


  return  ` ${hour} : ${min} : ${sec}` ; 
  // 시분초가 나올 떄 1의자리인 경우에는 앞에 0이 없음. 보기가 불편함!!

}




function clockFn(){
  const clock = document.getElementById('clock');
  clock.innerText = currentTime();

 interval= setInterval(function() {clock.innerText = currentTime()} , 1000 );

}

clockFn();

document.getElementById("stop").addEventListener('click',()=>{
  clearInterval(interval);
})










