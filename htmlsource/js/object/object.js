// 자바스크립트 객체
let tv = new Object();
console.log(tv); // {}

// 프로퍼티 생성
tv.color = "red";
tv.power = true;
tv.volume = 13;
tv.info = function () {
  console.log("색상 : ", this.color);
  console.log("볼륨 : ", this.volume);
  console.log("전원 : ", this.power);
};

tv.info();

let person = {
  name: ["bob", "smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  greeting: function () {
    console.log("Hi, I'm " + this.name[0] + ".");
  },
};

console.log(person);
console.log(person.age);
console.log(person["age"]);
console.log(person["name"]);
console.log(person["name"][0]);
person.greeting();

// age 변경
person.age = 20;

// 함수 추가
person.farewell = function () {
  console.log("bye!!!");
};

console.log(person);

// for..in : 객체출력
let output = "";
for (const key in person) {
  //   output += "▶ " + key + " : " + person[key] + "\n";
  output += `▶ ${key} : ${person[key]}\n`;
}
console.log(output);
