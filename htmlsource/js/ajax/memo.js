// post
// ajax : 비동기식
// fetch() : method를 사용하지 않으면 get 기본 방식임
// axios()

document.querySelector(".btn-danger").addEventListener("click", () => {
  // 사용자가 입력한 번호 가져오기
  const mno = document.querySelector('#remove [name="mno"]').value;
  console.log(mno);

  // delete
  fetch(`http://localhost:8080/memo/remove/${mno}`, {
    method: "delete",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data) alert("삭제 성공");
    });
});

document.querySelector(".btn-info").addEventListener("click", () => {
  // 사용자가 입력한 번호 가져오기
  const mno = document.querySelector('#get [name="mno"]').value;
  console.log(mno);

  // get()
  fetch(`http://localhost:8080/memo/read?mno=${mno}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.memoText);
      // 도착한 데이터를 content 안에 보여주기
      //   document.querySelector("#content").innerHTML = data.memoText;

      // 도착한 데이터를 form 안에 보여주기
      const form = document.querySelector("form");
      form.mno.value = data.mno;
      form.memoText.value = data.memoText;
    });
});

document.querySelector(".btn-success").addEventListener("click", () => {
  fetch("http://localhost:8080/memo/list")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const list = document.querySelector("#list");
      let result = "";

      data.forEach((memo) => {
        console.log(memo.memoText);

        result += `<li>${memo.memoText}</li>`;
      });
      list.innerHTML = result;
    });
});
