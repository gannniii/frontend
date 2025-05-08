// post
// ajax : 비동기식
// fetch() : method를 사용하지 않으면 get 기본 방식임 - 브라우저 함수
// axios() : 라이브러리 포함해야 함

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;

  let mno = form.mno.value;

  if (mno) {
    // 폼 데이터 가져온 후 객체 생성
    let data = {
      mno: mno,
      memoText: form.memoText.value,
    };

    fetch("http://localhost:8080/memo/update", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } else {
    let data = {
      memoText: form.memoText.value,
    };

    fetch("http://localhost:8080/memo/new", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
});

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
