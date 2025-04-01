
/*
const boxes = document.querySelectorAll(".box");
const colors = document.querySelectorAll(".color-input")

let idx;



changeButton.addEventListener("click", function (e) {

  // console.log(boxes);
  // console.log(colors);

  for (let idx = 0; idx < colors.length; idx++) {
    boxes[idx].style.backgroundColor
      = colors[idx].value;
  }

});
*/


const boxList = document.querySelectorAll(".box");
const inputList =document.querySelectorAll(".color-input")

document.querySelector('#changeButton')
.addEventListener(
"click",function(){
  for(let i=0; i<boxList.length; i++){
    boxList[i].style.backgroundColor = inputList[i]
    .value;
  }
}
)



document.addEventListener('keydown', function (e) {
  


})