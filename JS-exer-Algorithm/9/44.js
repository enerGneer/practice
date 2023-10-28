// 회원가입을 하는 사람들에게 본인 인증을 위한 인증번호를 만들려고 합니다.

// 함수를 실행할 때마다 4자리의 랜덤 숫자가 나올 수 있도록 만들어 주세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 코드를 입력후 random() 을 이용하면 4자리의 랜덤 숫자가 나와야 합니다.
// - random() 객체를 이용해야 합니다.

function random() {
  console.log(String(Math.floor(Math.random() * 10000)).padStart(4, "0"));
}
