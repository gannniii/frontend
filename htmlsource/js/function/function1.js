// 함수 == 자바의 메소드
// 함수 생성
function name(params) {
  // 해야할 일들
}

// 1. 매개변수가 없는 함수
function showMessage() {
  console.log("안녕");
}

// 함수 호출
showMessage();

// 2. 매개변수가 있는 함수
function multiply(x, y) {
  console.log(`${x}, ${y}`);
}

multiply();
multiply(1);
multiply(1, 3);

function multiply2(x, y) {
  return x * y;
}

console.log(multiply2());
console.log(multiply2(5, 3));
console.log(multiply2);

// 매개변수 기본값
function multiply3(x, y) {
  return x * y;
}

console.log(multiply2());
console.log(multiply2(5, 3));
console.log(multiply2);
