
////////////////
// Variables
////////////////

const iconTopExpand = document.querySelector(".icon.topExpand"),
  iconBottomExpand = document.querySelector(".icon.bottomExpand"),
  topContent = document.querySelector(".topContent"),
  bottomContent = document.querySelector(".bottomContent"),
  playBtn = document.querySelector(".btnPlay"),
  musicGroups = document.querySelector(".swiper-wrapper.slider-two"),
  swipperWrapper = document.querySelector(".swiper-wrapper.slider-one"),
  imageBg = document.querySelector(".imageBg"),
  albumBg = document.querySelector(".albumBg"),
  wrapper = document.querySelector(".wrapper"),
  bodyBg = document.querySelector(".bodyBg"),
  next = document.querySelector(".swiper-button-next"),
  prev = document.querySelector(".swiper-button-prev");


////////////////
// Events
////////////////

// iconTopExpand.addEventListener("click", expandTop);
iconBottomExpand.addEventListener("click", expandBottom);
playBtn.addEventListener("click", playSong);

////////////////
// Functions
////////////////

function playSong() {
  if (playBtn.classList.contains("pause")) {
    playBtn.classList.remove("pause");
    document.querySelector(".swiper-slide-active audio").pause();
  } else {
    playBtn.classList.add("pause");
    document.querySelector(".swiper-slide-active audio").play();
  }
  progressBar();
}

function expandTop() {
  if (topContent.classList.contains("expand")) {
    topContent.classList.remove("expand");
  } else {
    topContent.classList.add("expand");

    //Swiper Music Goups
    var mySwiper2 = new Swiper(".swiper-container.slider-two", {
      // Optional parameters
      direction: "horizontal",
      slidesPerView: "auto",
      draggable: true
    });
  }
  albumSize();
}

function expandBottom() {
  if (bottomContent.classList.contains("expand")) {
    bottomContent.classList.remove("expand");
  } else {
    bottomContent.classList.add("expand");
  }
  albumSize();
  progressBar();
}

function albumSize() {
  const albumContent = document.querySelectorAll(".albumContent");

  if (
    topContent.classList.contains("expand") &&
    bottomContent.classList.contains("expand")
  ) {
    albumContent.forEach(function (el) {
      el.classList.add("small");
    });
  } else {
    albumContent.forEach(function (el) {
      el.classList.remove("small");
    });
  }
}

const songs = [
  {
    img: "https://www.bensound.com/bensound-img/acousticbreeze.jpg",
    artistName: "bensound.com",
    songName: "Acoustic Breeze",
    song: "https://stephenlaichaowen.github.io/assets/music/bensound-acousticbreeze.mp3",
    color: "#f5c63d"
  },
  {
    img: "https://www.bensound.com/bensound-img/anewbeginning.jpg",
    artistName: "bensound.com",
    songName: "A New Beginning",
    song: "https://stephenlaichaowen.github.io/assets/music/bensound-anewbeginning.mp3",
    color: "#afc5c3"
  },
  {
    img: "https://www.bensound.com/bensound-img/creativeminds.jpg",
    artistName: "bensound.com",
    songName: "Creative Minds",
    song: "https://stephenlaichaowen.github.io/assets/music/bensound-creativeminds.mp3",
    color: "#74c2dd"
  },
  {
    img: "https://www.bensound.com/bensound-img/cute.jpg",
    artistName: "bensound.com",
    songName: "Cute",
    song: "https://stephenlaichaowen.github.io/assets/music/bensound-cute.mp3",
    color: "#a3b8b0"
  },
  {
    img: "https://www.bensound.com/bensound-img/goinghigher.jpg",
    artistName: "bensound.com",
    songName: "Going Higher",
    song: "https://stephenlaichaowen.github.io/assets/music/bensound-goinghigher.mp3",
    color: "#38736d"
  },
  {
    img: "https://www.bensound.com/bensound-img/happyrock.jpg",
    artistName: "bensound.com",
    songName: "Happy Rock",
    song: "https://stephenlaichaowen.github.io/assets/music/bensound-happyrock.mp3",
    color: "#a4b1b2"
  },

  {
    img: "https://www.bensound.com/bensound-img/hey.jpg",
    artistName: "bensound.com",
    songName: "Hey",
    song: "https://stephenlaichaowen.github.io/assets/music/bensound-hey.mp3",
    color: "#8098ce"
  },
  {   
    img: "https://www.bensound.com/bensound-img/memories.jpg",
    artistName: "bensound.com",
    songName: "Memories",
    song: "https://stephenlaichaowen.github.io/assets/music/bensound-memories.mp3",
    color: "#1a91bd"
  }
];
console.log(songs);

songs.forEach(el => {
  const template = `
    <div class="swiper-slide">     
      <audio src="${el.song}"></audio>
      <div class="albumContent">
        <div class="albumCover" style="background-color:${el.color}">
          <img src="${el.img}">
        </div>
        <p class="artistName">${el.artistName}</p>
        <p class="songName">${el.songName}</p>
      </div>
      <div class="playlistsContent">
        <div class="icon close"></div>
      </div>
    </div>
  `
  swipperWrapper.insertAdjacentHTML("beforeend", template);
})

var mySwiper = new Swiper(".swiper-container.slider-one", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  allowTouchMove: false,
  effect: "coverflow",

  coverflowEffect: {
    rotate: 40,
    slideShadows: false
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// Change Song & Album BG
next.addEventListener("click", changeSong);
prev.addEventListener("click", changeSong);

function changeSong() {
  if (playBtn.classList.contains("pause")) {
    document.querySelectorAll("audio").forEach(function (el) {
      el.pause();
    });
    document.querySelector(".swiper-slide-active audio").play();
  }
  changeBg();
  progressBar();
  closePlaylists();
  changeBgColor();
}

function changeBg() {
  albumBg.classList.add("animeBg");

  setTimeout(() => {
    imageBg.src = document.querySelector(
      ".slider-one .swiper-slide-active img"
    ).src;
  }, 300);

  setTimeout(() => {
    albumBg.classList.remove("animeBg");
  }, 700);
}

function changeBgColor() {
  var getColor = document.querySelector(
    ".slider-one .swiper-slide-active .albumCover"
  ),
    activeColor = getColor.style.backgroundColor;

  setTimeout(() => {
    bodyBg.style.backgroundColor = activeColor;
  }, 200);
}


// Add favourites & Playlist
const heart = document.querySelectorAll(".heart"),
  plus = document.querySelectorAll(".plus"),
  close = document.querySelectorAll(".close"),
  playlist = document.querySelectorAll(".playlist");

heart.forEach(function (el) {
  el.addEventListener("click", addFave);
});

plus.forEach(function (el) {
  el.addEventListener("click", openPlaylists);
});

close.forEach(function (el) {
  el.addEventListener("click", openPlaylists);
});

playlist.forEach(function (el) {
  el.addEventListener("click", addPlaylist);
});

function addFave(e) {
  if (e.currentTarget.classList.contains("fave")) {
    e.currentTarget.classList.remove("fave");
  } else {
    e.currentTarget.classList.add("fave");
  }
}

function openPlaylists(e) {
  if (
    e.currentTarget
      .closest(".swiper-slide-active")
      .classList.contains("open")
  ) {
    e.currentTarget
      .closest(".swiper-slide-active")
      .classList.remove("open");
  } else {
    e.currentTarget.closest(".swiper-slide-active").classList.add("open");
  }
}

function closePlaylists() {
  document.querySelector(".swiper-slide-active").classList.remove("open");
}

function addPlaylist(e) {
  if (e.currentTarget.classList.contains("selected")) {
    e.currentTarget.classList.remove("selected");
  } else {
    e.currentTarget.classList.add("selected");
  }
}

// Song Progress Bar

function formatTime(seconds) {
  minutes = Math.floor(seconds / 60);
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = Math.floor(seconds % 60);
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  return minutes + ":" + seconds;
}

function progressBar() {
  let songDuration = document.querySelector(".swiper-slide-active audio").duration
  let endTime = document.querySelector(".endTime")
  let songAudio = document.querySelector(".swiper-slide-active audio")
  let currentTime = document.querySelector(".currentTime")

  endTime.innerHTML = formatTime(songDuration)

  songAudio.ontimeupdate = function () {
    var progress = document.querySelector(".progress");
    progress.style.width =
      songAudio.currentTime * 100 / songDuration + "%";
    currentTime.innerHTML = formatTime(songAudio.currentTime);
  };
}

////////////////
// Call Functions
////////////////

changeBg();
progressBar();
changeBgColor();

wrapper.style.height = window.innerHeight + "px";

console.log(window.innerHeight);

