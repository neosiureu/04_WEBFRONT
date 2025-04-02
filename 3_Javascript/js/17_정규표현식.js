// 정규표현식 객체생성 + 확인하기

document.querySelector('#btn1').addEventListener('click', ()=>{
  
  // const regExp1 = new RegExp1('script'); 클래스 이름에 1이 붙어서 안됐음
  const regExp1 = new RegExp('script'); 

  // script와 일치하는 문자열이 있는지 검사하는 정규 표현식

  const regExp2 = /java/;

  // java라는 문자열과 일치하는 문자열이 있는지 검사하는 정규표현식

  // 확인하기
  const str1= "저희는 지금 javascript를 공부하고 있습니다";
  const str2= "jsp도 곧 할겁니다";
  const str3= 'java, java, java';



  console.log(regExp1.test(str1));
  // boolean test(string) 함수

  console.log(regExp2.exec(str1));

  // 객체 exec(string) 함수


  console.log(regExp2.test(str2));
  console.log(regExp2.exec(str2));

  console.log(regExp2.test(str3));
  console.log(regExp2.exec(str3));


} );



// 이제 진짜 메타문자를 이용하여 btn2를 통해 정규표현식을 확인할 것
document.querySelector('#btn2').addEventListener('click',()=>{
  const div1 = document.querySelector('#div1');

  const regExp1 = /[abcd]/; 

  div1.innerHTML += "/[abcd]/,apple :  "+ regExp1.test('apple')+"<hr>";
  div1.innerHTML += "/[abcd]/,ssbss :  "+ regExp1.test('ssbss')+"<hr>";
  div1.innerHTML += "/[abcd]/,qwerty :  "+ regExp1.test('qwerty')+"<hr>";


  const regExp2 = /^group/; // group으로 시작하는 문자열이니?
  div1.innerHTML += ' /^group/,group100: ' + regExp2.test('group100') +"<hr>";
  div1.innerHTML += ' /^group/,100group: ' + regExp2.test('100group') +"<hr>";

  // $ 달러

  const regExp3 = /group$/; //문자열의 끝이 group인지 확인
  div1.innerHTML += ' /group$/,group100: ' + regExp3.test('group100') +"<hr>";
  div1.innerHTML += ' /group$/,100group: ' + regExp3.test('100group') +"<hr>";

})









// 이름 유효성 검사

document.querySelector('#inputName').addEventListener('keyup',(e)=>{
  // 결과를 출력할 태그를 얻어온다

  const span = document.getElementById('inputNameResult');
  // 한글 두글자에서 다섯글자인 정규 표현식 객체 만들기
  const regExp = /^[ㄱ-힣]{2,5}$/;


  //빈칸은 아닌지 검사한다
  if( e.target.value.length ==0 )/*모든 이벤트 객체 중 현재 이벤트가 일어나는 대상*/  
  {
    span.innerText = '';
    return; 
  }

  // 정규표현식부터 
  if(regExp.test(e.target.value)) {
    // true가 나와 result에 전달해도 되는 경우
    span.innerText = '유효한 이름 형식입니다.'
    span.style.color = 'green';
    span.style.fontWeight = 'bold';
  }

  else{
    // false가 나와 전달하면 안되는 경우
    span.innerText = '유효하지 않습니다..'
    span.style.color = 'red';
    span.style.fontWeight = 'bold';

  }


})




// 주민등록번호 유효성 검사하기

document.getElementById('inputPno').addEventListener('keyup', (e)=>{
  const span = document.getElementById('inputPnoResult')
  // 주민번호 치는 칸

  if(e.target.value.length==0){
    span.innerText = '주민번호를 작성해주세요:'
    span.classList.remove('confirm','error');
    return;
  }

  // 숫자(6) 대쉬 숫자(7) (123456-1010101 형식이니까)

  const regExp = /^\d{6}-\d{7}$/;
   // -가 특수문자였다면 좀 더 복잡했겠지만 그냥 문자임

  if(regExp.test(e.target.value)){
    span.innerText = '유효한 주민번호 형식입니다.';
    // span.classList.add('confirm');
    // //이전에 유효하지 않았던 색이 있었다면 그를 없앤다
    // span.classList.remove('error');


    //const span = document.getElementById('inputPnoResult')
  // 주민번호 치는 칸
    span.classList.toggle('confirm', true);
    span.classList.toggle('error', false);

  }

  else{
    span.innerText = '유효하지 않은 형식입니다..';
    span.classList.add('error');
    //이전에 유효하지 않았던 색이 있었다면 그를 없앤다
    span.classList.remove('confirm');
  }

 


})


