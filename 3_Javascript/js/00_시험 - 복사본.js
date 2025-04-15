const boxList = document.querySelector(".box");
const inputList =document.querySelector(".color-input")
const textList =document.querySelector(".text-input")
const text = document.querySelector(".text-origin")
const height = document.querySelector(".height-input")
const width = document.querySelector(".width-input")
const justice = document.querySelector(".justice")
const align = document.querySelector(".align")

const left = document.getElementsByName("left");
const mid = document.getElementsByName("mid");
const right = document.getElementsByName("right");

const up = document.getElementsByName("up");
const heightMid = document.getElementsByName("heightMid");
const down = document.getElementsByName("down");



document.querySelector('#changeButton')
.addEventListener(
"click",function(){
    boxList.style.backgroundColor = inputList.value;
    boxList.style.color = textList.value;
    boxList.innerHTML = text.value;
    boxList.style.height= height.value;
    boxList.style.width= width.value;

}
)



