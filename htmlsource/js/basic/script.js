// "use strict"

// alert("test")

// 줄바꿈이 있다면 세미콜론 생략가능

// 자바스크립트 변수
// 타입 없음
// let, const, var(예전방식)
// let : 변수 선언, var : 유연한 변수 선언 방식
let a = 3;
console.log(typeof a); // number
console.log(a);
a = "test"; // 문자열 - '', ""
console.log(typeof a) // string
console.log(a)

// Cannot redeclare block-scoped variable 'a'.
// const : 상수 선언
const b = 15;
console.log(b);
// b = 20;
// console.log(b); // TypeError: Assignment to constant(상수) variable.


{
    let a = 333;
    console.log("block-space", a)
}

// 변수 범위
// var : function scope
// let, const : function scope
function foobar() {
    var foo = 5;
    console.log(foo);
}
// console.log(foo); ReferenceError: foo is not defined

if(true) {
    var aa = 5;
    console.log(aa);
}
console.log(aa);

if(true) {
    let bb = 5;
    console.log("let block scope", bb);
}
// console.log("let block scope", bb); ReferenceError: bb is not defined