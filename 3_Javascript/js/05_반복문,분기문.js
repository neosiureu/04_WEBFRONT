function check1(){
  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;


  // 목적은 while문을 통해 
  // 그만 입력하고싶다고 할 때까지 무한으로 주문받기

  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  // 다만 각 음식의 주문 개수를 count할 수 있어야 한다
  // 주문할 때마다 개수가 ++되므로 let

  // prompt를 통해 입력된 값을 일시적으로 저장한다??
  let input; // 초기값은 undefined

  // js의 두종류의 이퀄 연산자
  // == (값이 동일한 경우의 비교 연산자)
  // === (동일 비교 연산자: 값도 자료형도 모두 같은거)

  // undefined == null이라고 하면 둘 다 값이 없으므로 사실상 동일하게 인식

  // undefined === null이라고 해야 진짜 자료형까지 같은지 비교


  // 따라서 ===또는 !==를 써서 완전 같은지 다른지를 비교할 수 있다/


  while (input !== null) {
    // 취소를 누르기 전까지 계속 반복
    input = prompt("메뉴번호를 입력하세요:");

    switch (input) {
      case "1": gCount++; break;
      case "2": rCount++; break;
      case "3": dCount++; break;
      case null: /* 취소했다면 */ alert("주문완료"); break;
      default: alert("메뉴에 작성된 번호만을 입력하셔야 합니다.");

    }

    alert(`김밥: ${gCount}, 라면: ${rCount}, 돈까스: ${dCount} `);

    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);

    alert(`총가격: ${sum}원`);
  }

}



function startGame(){
  
  const answer = Math.floor(Math.random()*200)+1;

  // 정답 시도 횟수 세기 위한 변수 선언
  let count = 0;
  // prompt에 출력할 문자열

  let str = "1부터 200사이의 숫자 입력";
  // 재할당을 가능하게 하기 위함

  while(true){

    let input = prompt(str);
    // 제일 처음에는 

    if(input==null) { // 취소 클릭 시 
      alert("게임 포기");
      break;
    }

    // 숫자 입력 후 확인 클릭 시 
    const value = Number(input); // 입력받은 값은 비교를 위해 숫자여야 함

    // 숫자가 아닌 문자열과 같이 잘못 입력한 경우는 
    // 가령 abc가 들어가버리면 value가 NAN이 들어감.
    
    //NAN이라는 값은 오류 문장이라 사실 isNaN이라는 함수가 있어서 판단 가능

    if( isNaN(value) ){
      alert('숫자만 입력해 주세요');
      continue;
    }

    if(value <1 || value > 200){ // 범위 초과
      alert('1~200사이 값만 작성해주세요');
      continue;
    }

    // 정답을 맞추기 위한 시도를 했기 때문에 count를 1증가
    count++;
    // 정답인 경우:
    if(value === answer){
      alert(`정답 ! ${answer} / 시도횟수 : ${count}  `);
      break;
    }

    // 정답이 아닌 경우

    if(value < answer){
      str = `${value}를 입력하셨습니다. [UP] 하세요. / 시도횟수 : ${count} `;
    }

    else{
      str = `${value}를 입력하셨습니다.  [DOWN] 하세요. / 시도횟수 : ${count} `;
    }


  }
  

}
