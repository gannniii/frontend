// 함수선언방식으로 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성 후 테스트
function add(a, b) {
  return a + b;
}

console.log("3 + 4 = " + add(3, 4));

// 함수표현식으로 1번 변경
const add2 = fun;

// 1 ~ 10까지 더하는 작업을 함수 표현식으로 작성

// 숫자를 인자로 받아서 3의 배수 찾기
// 3의 배수라면 박수 출력, 아니라면 통과

// 4번 개선(3의 배수라면 박수 출력, 아니라면 통과)
//  + 9의 배수인 경우 박수 x 2 출력

// 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
// 과목은 2과목이라 하고, 두 과목 합해서 120점 이상이면 합격
// 한 과목이 40점 미만이면 과락으로 불합격
function pass(outline, law) {
  const jumsu = (outline = law);

  if (outline >= 40 && law >= 40 && jumsu >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}

pass(40, 80);
pass(30, 90);
