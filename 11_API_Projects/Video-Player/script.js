const URL =
  "https://raw.githubusercontent.com/bikashthapa01/myvideos-android-app/master/data.json";

let videos = [];
let main = document.querySelector("main");

fetchData();
swiper();

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

async function fetchData() {
  let response = await fetch(URL);
  let data = await response.json();

  // fetch first all data from json
  for (movie in data) {
    // separate all videos and push into the new array called videos
    for (let i = 0; i < data[movie].length; i++) {
      videos.push(data[movie][i].videos);
    }
  }

  // // now loop and get all data from videos array;
  videos.forEach((video) => {
    for (vid in video) {
      // console.log(video[vid]);
      createCards(
        video[vid].title,
        video[vid].subtitle,
        video[vid].thumb,
        video[vid].sources[0]
      );

      
    }
  });
}

function createCards(title, subtitle, thumb, videoUrl) {
  let swiperWrapperDiv = document.querySelector(".swiper-wrapper");
  let card = document.createElement("div");

  // console.log("url =" ,videoUrl)
  card.classList.add("card", "swiper-slide");

  card.innerHTML = `
            <div class="img-container">
              <img
                src="${thumb}"
                alt="title"
              />
            </div>
            <div class="contents">
              <h3 id="title">${title}</h3>
              <p id="subtitle">${subtitle}
              </p>
            </div>
            <div class="view-more-btn">
              <button id="watch">Watch</button>
            </div>
`;

  let watchBtn = card.querySelector('#watch');
  watchBtn.addEventListener('click',(e) => {
   playVideo(videoUrl);
  })
  swiperWrapperDiv.appendChild(card);
}


function playVideo(videoUrl) {
   let popupDiv = document.querySelector(".popup-video");
   popupDiv.style.display = "block";
   let video = document.querySelector('.popup-video video');
   video.src = `${videoUrl}`;

   let i = document.querySelector('.popup-video i');
   i.addEventListener('click',(e)=> {
    popupDiv.style.display = 'none';
    video.pause();
    video.currentTime = 0;
   })
}

