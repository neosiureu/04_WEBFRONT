const creatBox = document.querySelector('#createBox');
// 버튼에 대한 태그에 대한 값

const container = document.querySelector('.container');
// 바깥 div에 대한 값


// createBox버튼 클릭 시 div.box요소를 생성하여 
/*  즉
{<div class="box">
<input type="text">
</div>
이거를 생성하여
container의 마지막 자식으로 추가 }*/

creatBox.addEventListener('click',()=>{
  // 먼저 해당하는 div요소를 가져와야 복사를 하든말든 함
  const box = document.createElement("div");
  //1.  div태그 자체를 html파일 내에 만들어서 box라는 변수에 담음
  console.log(box);


  // 2. div요소만 만든거지 뭘 한건 아님. box클래스에 이 div를 추가하면 된다
  box.classList.add("box");
  // div에 classList를 가지고 와서 추가하면 
  // <div class = "box"></div>

  //3. container의 마지막 자식으로 새로 지금 만든 div요소를 추가해야 


  container.append(box);
  // container에 box라는 참조변수가 가리키는 값을 append하겠다


  // 4. input요소 생성

  const input = document.createElement("input");
  // 여기까지 하면 <input>만 만들어진거
  input.type = "text";
  // 이렇게 하면 <input type="text">

  // 5. 생성된 input을 box의 마지막 자식으로 추가한다.add
  box.append(input);

  // container는 html파일의 div의 이름 => 세가지 클래스를 가지고 있음
  

});

console.log(container.classList);

/**
 요소.classList: 요소의 클래스 목록으로  클래스의 존재여부 확인, 추가, 제거 등이 가능 
 
 1) 요소.classList
 요소의 클래스 목록이 그대로 배열 형식으로 반환
 
 2) 요소.classList.contains('클래스명')
 인자로 들어온 클래스가 있으면 true, 없으면 false를 반환

 3) 요소.classList.add('클래스명')
 인자로 들어온 클래스를 추가

 
 4) 요소.classList.remove('클래스명')
  인자로 들어온 클래스를 제거

 */




  // innnerHTML로 요소 추가하기

  const innerHTMLBox = document.querySelector('#innerHTMLBox')

  innerHTMLBox.addEventListener('click',()=>{
    // 마지막에야 넣을 수 있겠지. 지금같이 하면 근데 처음에도 가능한가?

    container.innerHTML += "<div class = 'box'> <input type='text'> </div>"


  })

