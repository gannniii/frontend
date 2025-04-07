// 조건문
// true : true 자료들, 0 제외 숫자, '문자', [], {}
// false : false 자료들, 0, '', null, undefiend, NaN

const date = new Date();
console.log(date); // 2025-04-07T01:06:44.943Z(ISO 8601 표준 표현 방법)
const hour = date.getHours();

if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

// NaN(Not a Number)
console.log("\n=== isNaN()");
console.log(isNaN("12"));
console.log(isNaN("abc"));

// "12" => 12
// Number() :문자숫자 => 숫자
console.log("\n=== Number()");
const num1 = Number("23");
console.log("type", typeof num1);
console.log(Number("abc"));
console.log("78.45", Number(78.45));
console.log("Number('78 45 55')", Number("78 45 55"));

// parseInt()
const num2 = parseInt("33");
console.log(typeof num2);
console.log(parseInt("abc"));

console.log(parseInt(78.45));

if (isNaN(Number("123"))) {
  console.log("문자");
} else {
  console.log("숫자");
}

console.log("\n=== switch");
let day = "";
switch (date.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log("오늘은 " + day);
