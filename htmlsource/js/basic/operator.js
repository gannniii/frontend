// 연산자
// 산술, 비교, 연결
let a = 4,
  b = 5;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); // 자바는 몫만 나옴
console.log("a % b = ", a % b);

// + : 연결 연산자 숫자 + 문자
let c = "3";
console.log("a + c = ", a + c);

// -, *, /, % : 문자와 숫자의 산술연산
console.log("\n-- 문자와 숫자의 산술연산");
console.log("a - c = ", a - c);
console.log("a * c = ", a * c);
console.log("a / c = ", a / c);
console.log("a % c = ", a % c);

// 비교 연산자 : ==(값 비교), !=(값 비교), ===(값과 타입 비교), !==(값과 타입 비교)
let d = "4";
console.log("a == d", a == d);
console.log("a === d", a === d);
console.log("a != d", a != d);
console.log("a !== d", a !== d);

// 단항 연산자 ++, --
