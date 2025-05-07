// 년월일 가져오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  // 어제 날짜 구하기
  const today = new Date();
  console.log(today);

  // 년월일 분리 => 요소 안에 보여주기
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 월 : 0부터 시작
  const day = today.getDate() - 1; // 어제

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

document.querySelector("button").addEventListener("click", () => {
  // 사용자가 입력한 년월일 가져오기
  const targetDt = txtYear.value + selMon.value + selDay.value;

  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=76a38373a9560604d88a458d22e71b9f&targetDt=${targetDt}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.boxOfficeResult);
      console.log(data.boxOfficeResult.dailyBoxOfficeList);

      const boxList = data.boxOfficeResult.dailyBoxOfficeList;

      let list = ``;
      boxList.forEach((movie) => {
        // 순위, 영화명
        // 1(🔼 1) 승부

        // console.log(movie.rank);
        // console.log(movie.rankInten);
        // console.log(movie.movieNm);

        list += `${movie.rank} 위`;

        const rankInten = parseInt(movie.rankInten);

        if (rankInten > 0) {
          list += "(🔼";
        } else if (rankInten < 0) {
          list += "(🔽";
        } else {
          list += "( ";
        }
        list += `${movie.rankInten} ) `;

        list += `<a href='#' onclick = 'javascript:movieInfo(${movie.movieCd})'>${movie.movieNm}</a>`;
        list += `<br>`;
      });
      console.log(list);
      document.querySelector("#rank").innerHTML = list;
    });
});

// 영화상세정보
const movieInfo = (movieCd) => {
  console.log(movieCd);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=76a38373a9560604d88a458d22e71b9f&movieCd=${movieCd}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.movieInfoResult.movieInfo);
      const movieInfo = data.movieInfoResult.movieInfo;
      console.log(movieInfo);

      // 결과변수
      let result = "<ul>";

      // 영화제목 movieNm
      const movieNm = movieInfo.movieNm;
      // 영어제목 monieNmEn
      const movieNmEn = movieInfo.movieNmEn;
      // 상영시간 showTm
      const showTm = movieInfo.showTm;
      // 감독 directors.peopleNm
      // directors[0].peopleNm;
      // 배우 actors.peopleNm

      result += `<li>영화제목 : ${movieNm}</li>`;
      result += `<li>영어제목 : ${movieNmEn}</li>`;
      result += `<li>상영시간 : ${showTm} 분</li>`;

      //   감독
      let directorNm = movieInfo.directors.map((director) => director.peopleNm).join(", ");
      //   movieInfo.directors.forEach((director) => {
      //     console.log(director);
      //     console.log(director.peopleNm);
      //     directorNm += director.peopleNm + ", ";
      //   });

      result += `<li>감독 : ${directorNm}</li>`;

      //   배우
      let actorNm = "";
      movieInfo.actors.forEach((actor) => {
        actorNm += actor.peopleNm + ", ";
      });

      result += `<li>배우 : ${actorNm}</li>`;
      result += `</ul>`;

      document.querySelector("#info").innerHTML = result;
    });
};
