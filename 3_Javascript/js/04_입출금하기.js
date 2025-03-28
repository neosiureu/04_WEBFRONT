// <!-- prompt사용하기 -->

function test() {
  const password = prompt("비밀번호를 입력하세요");
  console.log(password);

  // 확인버튼을 누를 시 내가 입력한 값이 문자열로 들어옴. 다만 취소를 누르면 null
  // 즉 다음과 같이 if문에 들어가기 좋음
  if (password == null) {
    alert("취소");


  }

  else {
    //확인버튼 눌렀을 시 

    if (password == '1234') {
      alert("비밀번호가 일치합니다")
    }
    else {
      alert("비밀번호가 다릅니다")
    }
  }
}


const output = document.getElementById("output");
// 잔액출력 : 잔액: 뒤에 있어야할 값 => 초기값 또는 변하는 돈의 값
const amount = document.getElementById("amount");
// 금액출력 :  금액: 뒤에 있어야할 값 => 초기값 또는 변하는 돈의 값
let balance = 10000; // 지속적으로 변해야
const pw = "1234";  // 불변


//1) 잔액부분에 일단 현재 balance의 값을 띄워준다

output.innerText = balance;

//  <h1>잔액 : <span id="output"></span> 원</h1> 에서 span 사이의 값

function deposit() {

  // 제일 먼저 input에 작성된 금액을 구해야 한다. 즉 금액: 뒤에
  console.log(amount.value.length)
  if (amount.value.length == 0) {
    alert('금액을 입력하고 다시 시도해 주세요')
  }
  else {
    // 구한 금액을 잔액에 누적하는 일
    balance += Number(amount.value);
    output.innerText = balance;
    amount.value = ' ';
  }

}


function withdrawal() {

  if (amount.value.length == 0) {
    alert('출력할 금액을 쓰고 다시 시도해 주세요');
  }

  else {
    const password = prompt("비밀번호를 입력하세요");
    console.log(password);

    // 확인버튼을 누를 시 내가 입력한 값이 문자열로 들어옴. 다만 취소를 누르면 null
    // 즉 다음과 같이 if문에 들어가기 좋음

    if (password == null) {
      alert("취소");

    }

    else {
      //확인버튼 눌렀을 시 

      if (password == '1234') {
        alert("비밀번호가 일치합니다")
        // output: 잔액 몇원
        // amount: 금액으로 입력


        // 사실  Number(amount.value)를 
        // 다른 money같은 const변수에 저장하는게 나음
        const money=Number(amount.value)

        if (Number(amount.value) > balance) {
          alert("잔액보다 많은 금액을 출력하려 합니다.")
          amount.value = ' ';
        }

        else {

          balance -= Number(amount.value);
          output.innerText = balance;
          amount.value = ' ';
          alert(money+"원이 출금되었습니다. 남은잔액 "+ balance) ;
          // 템플릿 리터럴
          // alert(`${Number(amount.value)} 원이 출금되었습니다. 남은잔액 ${balance}`);
          // 벡틱을 사용하여 문자열을 감싸고 ${}안에 진짜 변수가 들어와 동적으로 문자열 생성이 가능
        }
      }

      else {
        alert("비밀번호가 다릅니다")
        amount.value = ' ';
      }
    }

  }

}