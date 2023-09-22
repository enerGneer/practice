// **`문제 설명`**

// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.

// 입력된 값에 따라 알맞은 문구를 띄워주세요

// 18이하면 "조금 춥네요"

// 19~23이면 "날씨가 좋네요"

// 24이상이면 "조금 덥습니다"

// **`입력 인자`**

// - num은 10~30까지의 자연수

// **`주의 사항`**

// - && 연산자가 필요합니다.

function temperature(number) {
  if (number >= 24) {
    console.log("조금 덥습니다");
  } else if (number >= 19) {
    console.log("날씨가 좋네요");
  } else {
    console.log("조금 춥네요");
  }
}

temperature(13); // "조금 춥네요"
temperature(23); // "날씨가 좋네요"
temperature(27); // "조금 덥습니다"
