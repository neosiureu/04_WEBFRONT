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
  const nameDiv = document.getElementById("name-div")
  let selected;

  for (let i = 0; i < hobbyList.length; i++) {
    if (hobbyList[i].checked) {
      selected += hobbyList[i].value + " ";
    }
  }
  
  nameDiv.innerText = selected;
}



