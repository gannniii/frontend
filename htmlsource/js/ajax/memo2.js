// axios를 이용한 비동기 처리
// axios.get().then().catch().finally()
// axios.post().then().catch().finally()
// axios.put().then().catch().finally()
// axios.delete().then().catch().finally()

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;

  if (form.mno.value) {
    axios
      .put("http://localhost:8080/memo/update", form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  } else {
    axios
      .post("http://localhost:8080/memo/new", form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        // 서버에서 보낸 데이터 가져오기
        console.log(res.data);
      });
  }
});

document.querySelector(".btn-danger").addEventListener("click", () => {
  // 사용자가 입력한 번호 가져오기
  const mno = document.querySelector('#remove [name="mno"]').value;
  console.log(mno);

  // delete
  axios.delete(`http://localhost:8080/memo/remove/${mno}`).then((res) => {
    console.log(res);
    if (res) alert("삭제 성공");
  });
});

document.querySelector(".btn-info").addEventListener("click", () => {
  // 사용자가 입력한 번호 가져오기
  const mno = document.querySelector('#get [name="mno"]').value;
  console.log(mno);

  // get()
  axios.get(`http://localhost:8080/memo/read?mno=${mno}`).then((res) => {
    console.log(res.data.memoText);

    const form = document.querySelector("form");
    form.mno.value = res.data.mno;
    form.memoText.value = res.data.memoText;
  });
});

document.querySelector(".btn-success").addEventListener("click", () => {
  axios.get("http://localhost:8080/memo/list").then((res) => {
    const data = res.data;

    const list = document.querySelector("#list");
    let result = "";

    data.forEach((memo) => {
      console.log(memo.memoText);

      result += `<li>${memo.memoText}</li>`;
    });
    list.innerHTML = result;
  });
});
