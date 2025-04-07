// 콜백함수 : 함수를 함수의 인자로 전달, 전달됨 함수가 나중에 호출
function showOK() {
  console.log("동의");
}
function showCancle() {
  console.log("취소");
}
function ask(question, yes, no) {}

ask("동의하십니까?", showOK, showCancle);

const foo = function (func) {
  func;
};

foo(() => console.lo("함수를 인자로 전달하기"));

function callTenTimes(callback) {
  for (let index = 0; index < 5; index++) {
    callback();
  }
}
const callback = () => console.log("함수 호출");

callTenTimes(callback);

// JS 내장함수
// setTimeout() : 비동기식
// console.log("시작");
// setTimeout(() => {
//   console.log("3초가 지났음");
// }, 3000);
// console.log("마무리");

// 2초 간격으로 호출
// setInterval(() => {
//   console.log("안녕");
// }, 2000);

// parseFloat() ; string => float
console.log("parseFloat()");
console.log(parseFloat("10"));
console.log(parseFloat("10.55"));
console.log(parseFloat("10.55%"));

// encodeURI
console.log(encodeURI("http://localhost:8080/basic/info.html?name=홍길동"));
console.log(encodeURIComponent("http://localhost:8080/basic/info.html?name=홍길동"));

// decodeURI
console.log(decodeURI("http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99"));
console.log(
  decodeURIComponent("http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99")
);
