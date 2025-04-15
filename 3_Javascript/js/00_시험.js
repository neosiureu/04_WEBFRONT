// 적용하기 위한 버튼부터 얻어와야 함 => 클릭되는 이벤트를 탐지한다.

const applyBtn = document.querySelector('#applyBtn');

applyBtn.addEventListener("click", function() {
  // input 요소들을 모두 얻어와라

  const boxWidth = document.querySelector('#box-width');
  const boxHeight = document.querySelector('#box-height');
  
  const fs = document.querySelector('#fs');

  const fw = document.querySelector("[name = 'fw'] : checked");


  const fontColor = document.querySelector('#box-font-color');
  const bgColor = document.querySelector('#box-bg-color');

  const row= document.querySelector("[name= 'align-row']:checked"); // 가로정렬
  const col= document.querySelector("[name= 'align-col']:checked"); // 세로정렬

  const content = document.querySelector("#content"); // 작성글

  const box = document.querySelector("#box"); // 박스 자체


  if(boxWidth.value.trim().length >0){
  // input들에 작성된 값에 따라 #box인 것들에 style 추가
  box.style.width= boxWidth.value + "px";

}

if(boxWidth.value.trim().length >0){
  box.style.width= boxWidth.value + "px";
}



  box.style.fontSize = fs.value + "px";

  box.style.fontWeight= fw.value; // = normal  = bold

  box.style.color = fontColor.value;

  box.style.backgroundColor = bgColor.value;

  box.style.justifyContent = row.value;
  box.style.alignItems  = col.value; 


  box.innerText = content.value;
  
  
});
