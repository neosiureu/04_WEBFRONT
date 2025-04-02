// Node가 무엇인지 콘솔에 표시

document.querySelector('#btn1').addEventListener('click',()=>{
  const test = document.querySelector('#test'); //ul태그내 모든 리스트
  console.log(test);

  // #test의 모든 자식 노드 얻어오기

  // 요소.childNodes => 배열

  const list = test.childNodes;
  console.log(list);

  console.log(list[3]);



  // 1. 부모노드 찾기 (요소.parentNode)

  // li1의 부모 노드가 무엇인지 찾아 배경색을 바꾼다

  list[3].parentNode.style.backgroundColor = "pink";


  // 2. 첫번째 자식노드 찾기 (요소.firstChild)
  // #test(ul)의 첫번째 자식 노드 찾기

  console.log(test.firstChild);


 // 3. 마지막 자식노드 찾기 (요소.lastChild)
  // #test(ul)의 마지막 자식 노드 찾기

  console.log(test.lastChild);

  // 4. 원하는 인덱스에 존재하는 자식 노드를 찾아 배경색을 핑크로
  // 요소.childNodes[index]

  test.childNodes[9].style.backgroundColor = 'yellow';

  // 5. 이전 또는 다음 형제의 노드를 찾는다. 
  // 요소.previousSibling 또는 nextSibling

  
  // 탐색을 위한 코드는 연달아서 작성 가능

  // 9번의 다음다음 인덱스를 찾아봐

  console.log(test.childNodes[9].nextSibling.nextSibling);



  // test의 마지막 자식노드의 이전 형제 노드를 찾자

  console.log(test.lastChild.previousSibling);




  // 노드의 추가

  // 1. 마지막 자식 노드로 추가 (요소.appenChild(노드))

  // => list [li1]의 마지막 자식으로 "ZZZ"라는 TextNode를 추가한다

  list[11].appendChild( document.createTextNode('ZZZ') );

  // 2.마지막 자식노드로 추가하는 다른 방법 append의 이용 (
  // append ("내용")  vs  append (노드)  vs append (a,b,c)    )

  list[11].append("12345","abc", "가나다라마");

  // 3. 첫번째 자식으로 추가하기 (요소.prepend(내용, 노드, n개요소))
  list[11].prepend('오늘','점심','자고싶다');

  // 4.이전이나 다음 형제로 추가하는 방법
  // 요소.before() 요소.after() <- 역시 n개나 다른 노드가 들어갈 수 있음


  test.before('이전입니다', 'ㅋㅋ?');
  test.after('이후입니다', 'ㅎㅎ!');




})







document.querySelector('#btn2').addEventListener('click',()=>{

  // #test2 얻어오기

  const test2 = document.querySelector('#test2');


  // #test2의 모든 자식 요소 얻어오기 (children)

  console.log(test2.children);


  // #test2의 첫번쨰 자식 요소

  console.log(test2.firstElementChild);
  console.log(test2.lastElementChild);

  console.log(test2.parentElement);

  console.log(test2.nextElementSibling);
  console.log(test2.previousElementSibling);



})