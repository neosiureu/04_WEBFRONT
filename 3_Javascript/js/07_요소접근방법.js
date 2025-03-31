function classTest() {

  const divs = document.getElementsByClassName('cls-test');

  /*> 접근 자체는 get으로도 가능


    배열로 넘어오긴 하지만 진짜 배열은 아니고 nodeList라는 이상한 형태로 가져옴
    배열처럼 index, length등의 속성은 가지고 있으나 메서드는 없다.

    JS배열에서는 pop() push() map() filter()등이 있지만 
    nodeList에서는 유사배열이기 때문에 이런 기능을 쓸 수없다.

    특히 HTMLCollection, NodeList는 유사배열 */

  console.log(divs);

  // divs 중 각 인덱스에 대해 배경색을 변경할 수 있다
  divs[0].style.backgroundColor = 'rgb(114,203,80)';
  divs[1].style.backgroundColor = 'blue';
  divs[2].style.backgroundColor = 'deepPink';



}


function tagNameTest() {
  // 태그명으로 요소에 접근해라

  const taglist = document.getElementsByTagName("li");
  console.log(taglist);

  for (let i = 0; i < taglist.length; i++) {
    console.log(taglist[i].innerText)
    taglist[i].style.backgroundColor = taglist[i].innerText;

  }

}


function nameTest() {
  const hobbyList = document.getElementsByName("hobby");
  let str = ' ';
  let cnt = 0;




  for (let i = 0; i < hobbyList.length; i++) {
    // checkbox와 radio의 전용 속성 => .checked 메서드
    // 요소가 체크 되어 있다면 true 또는 false를 반환하는 메서드

    // 심지어 true false를 직접 설정도 가능
    // 요소.checked = true; 요소.unchecked = false;


    if (hobbyList[i].checked) {

      str += hobbyList[i].value + " ";
      cnt++;
    }
  }

  document.getElementById("name-div").innerHTML
    = `${str} <br> <br> 선택된 취미 개수 ${cnt} `;

  nameDiv.innerText = str;

  /*
  요소.innerHTML: HTML태그를 포함하여 문자열 등을 실제 HTML 요소로 해석함
  
  요소.innerText: 텍스트 내용만 요소 컨텐츠 내부에 직접 출력 (html 태그들은 무시)
   */

  /*HTMLCollection: 
-> 동적 컬렉션으로 DOM 변경 시 자동 업데이트
-> getElementByTagName(), getElementByClassName()



NodeList:
-> 정적 컬렉션으로 DOM에서 변경이 무관 
처음에 NodeList로 값을 얻어왔으면 DOM에서의 변화에 상관 없이 그냥 끝 
getElementByName(), querySelectAll()
*/



}




function cssTest() {

  // target-div라는 속성값이 "css-div"인 요소에 접근한다


  const container = document.querySelector("[target-div= 'css-div']");
  container.style.border = "10px solid red";

  // 첫번째 자식 div에 접근하여 내용을 css선택자로 선택하여 값 변경되었다고 변경하기

  const div1 = document.querySelector("[target-div='css-div'] > div");
  div1.innerText = "css선택자로 선택하여 값이 변경되었다";

  const div2 = document.querySelector("[target-div='css-div'] > div:last-child");
  div2.innerText = "첫번째 요소가 아니라서 querySelector로 안 됨"

  // 모든 자식 div를 한번에 선택하여 배열로 얻어오기

  const divList = document.querySelectorAll("[target-div='css-div'] > div");

  console.log(divList);

  // index를 이용한 단일 접근

  divList[0].style.fontFamily = "궁서";
  divList[1].style.fontSize = "20px";


  for (let i = 0; i < divList.length; i++) {
    // 여기서 함수를 대입해야 함 => 익명함수의 형태

    divList[i].onclick = function () { alert(`${i} 번째 요소입니다`) }


  }

}


// 카카오톡 채팅 화면 만들기

function readValue() {

  // 1) 채팅이 출력되게 될 배경 요소는? chatting-bg
  const bg = document.querySelector('#chatting-bg');

  //2) 채팅에 칠 하얀색 입력칸 input요소는? user-input이라는 id

  const input = document.querySelector('#user-input');

  // 예외상황 => 아무것도 입력 안하고 엔터 쳤는데 입력하면 아무것도 안생겨야 함
  // 공백 역시 메시지를 쓰지 않은 것과 동치


  // case1) 진짜로 안 적은 경우
  // case2) 공백만 적은 경우

  // 자바스크립트 내장 객체 중
  // 문자열.trim => 좌우공백을 없앰

  if(input.value.trim().length ==0){
    // 공백만 적은 경우 
    alert('채팅의 내용을 입력해주세요.');
    input.value = ''; 
    // 원래 있던 빈 문자열을 삭제하는 법

    input.focus();
    // input에 해당하는 공간에 커서를 활성화하는 함수
    // focus내장함수
    return; 
  }

  bg.innerHTML += `<p><span>${input.value}</span></p>` ; 
  input.value = ''; 

  // css가 아닌 htnl모양으로 넣어야 하므로 이러한 모양

  bg.scrollTop = bg.scrollHeight;
  input.value ='';
  input.focus();
}

/*id가 user-input인 input요소에서 키가 올라오는 동작을 감지할 수 있다
그런데 그 키가 엔터키이면 readValue라는 함수를 호출하겠음
*/

document.querySelector('#user-input')
.addEventListener
('keyup', function(e){  
  if(e.key == 'Enter'){
    // 엔터가 눌러지고 떼어졌을 때
    readValue();
  }
  


});




/*>keyup 

버튼이면 click, 키보드이면 keyup keydown 등 eventListener는 다양

다만 눌러지던 키가 떼어졌을 때만 이 함수가 발동함

딱 1회만 인식해서 발동함

> keydown

버튼을 누르고 있으면 1회 발동하고 끝나는게 아니라 계속 인식

 */


