// 함수표현식
const myFunc1 = function () {};
const myFunc2 = function name() {};

const showMessage = function () {
  console.log("안녕하세요");
};

showMessage();

const multiply = function (x, y) {
  console.log(`${x}, ${y}`);
};

multiply(35, 4);

const myFunc = function multiply2(x, y) {
  return x * y;
};

console.log(myFun3(6, 8));

const rec = function f(x) {
  if (x == 0) {
    console.log(x);
  } else {
    console.log(x);
    f(x - 1);
  }
};

rec(5);

// 함수 정의 방식 비교
// multiply4 vs myFunc3
// 호이스팅(hoisting) : 선언하기 전에 사용
// function name(){} / var 변수

console.log(multiply4(5, 6)); // 호이스팅 허용
console.log(myFunc4(3, 9));

// y = 5;
console.log(`y = ${y}`); // 호이스팅 허용

var y = 6;

function multiply4(x, y) {
  return x * y;
}

const mtFunc4 = function multiply2(x, y) {
  return x * y;
};
