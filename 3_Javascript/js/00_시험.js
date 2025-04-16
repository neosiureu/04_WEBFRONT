
document.querySelector('#changeButton')
.addEventListener(
"click",function(){
    const box = document.querySelector(".box");
    // const textList = document.querySelector(".textList");
    const textColor = document.querySelector(".text-color");
    const height = document.querySelector(".height-input");
    const width = document.querySelector(".width-input");
    const backgroundColorInput = document.querySelector(".backgound-color-input");
    const textOrigin = document.querySelector(".text-origin");
    const bold = document.querySelector("[name='bold']:checked")
    const garo = document.querySelector("[name='garo']:checked")
    const sero = document.querySelector("[name='sero']:checked")
    const size= document.querySelector(".size")





    box.style.backgroundColor = backgroundColorInput.value;
    box.style.color = textColor.value;
    box.style.height= height.value +"px";
    box.style.width= width.value +"px";
    box.innerHTML=textOrigin.value;
    box.style.fontWeight = bold.value;
    box.style.justifyContent = garo.value;
    box.style.alignItems=sero.value;
    box.style.fontSize=size.value+"px";

}
)



