// tap-content 보여주기 : show 클래스명
// 메뉴선택 : orange

// Products 클릭 + 첫번째 tap-content
// Information 클릭 + 두번째 tap-content
// Shipping 클릭 + 세번째 tap-content

// const tabs = document.querySelectorAll(".tap-button");
// const contents = document.querySelectorAll(".tap-content");

// tabs.forEach((tab, index) => {
//   tab.addEventListener("click", () => {
//     tabs.forEach((t) => t.classList.remove("orange"));

//     tab.classList.add("orange");

//     contents.forEach((content) => content.classList.remove("show"));

//     contents[index].classList.add("show");
//   });
// });

const tabBtns = document.querySelectorAll(".tap-button");
const tabContents = document.querySelectorAll(".tap-content");

// tabBtns[1].classList.remove("orange");
// tabBtns[2].classList.remove("orange");
// tabContents[1].classList.remove("show");
// tabContents[2].classList.remove("show");
// tabBtns[0].classList.add("orange");
// tabContents[0].classList.add("show");

tabBtns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    tabBtns.forEach((item) => item.classList.remove("orange"));
    e.target.classList.add("orange");
    tabContents.forEach((element) => {
      element.classList.remove("show");
    });
    tabContents[idx].classList.add("show");
  });
});
