const isSafariBrowser =
  /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
const audio = {}; // 音效列表
const image = {}; // 图片列表

const audioList = [
  {
    name: "iGirl",
    url: "./assets/i_girl.mp3",
  },
  {
    name: "iBoy",
    url: "./assets/i_boy.mp3",
  },
  {
    name: "iLikeYouGirl",
    url: "./assets/i_like_you_girl.mp3",
  },
  {
    name: "iLikeYouBoy",
    url: "./assets/i_like_you_boy.mp3",
  },
  {
    name: "heartbeat",
    url: "./assets/heartbeat.mp3",
  },
  {
    name: "heartbeatHard",
    url: "./assets/heartbeat_hard.mp3",
  },
  {
    name: "heartbeatFast",
    url: "./assets/heartbeat_fast.mp3",
  },
];

const imgList = [{ name: "heart", url: "./assets/heart.png" }];

let audioLoadedCount = 0;
let imgLoadedCount = 0;
if (isSafariBrowser) {
  audioLoadedCount = audioList.length;
} else {
  loadAudio();
}
loadImage();

function checkAssetsLoad() {
  let audioLoaded = false;
  let imgLoaded = false;
  if (audioLoadedCount === audioList.length) {
    audioLoaded = true;
  }

  if (imgLoadedCount === imgList.length) {
    imgLoaded = true;
  }

  if (audioLoaded) {
    const tips = document.querySelectorAll(".load-tip");
    tips[0].style.display = "none";
    tips[1].style.display = "block";
    document.getElementById("start").style.display = "flex";
  }
}

function loadAudio() {
  if (isSafariBrowser) {
    for (let key in audio) {
      audio[key].play();
      audio[key].pause();
    }
  } else {
    audioList.forEach((source) => {
      const { name, url } = source;
      const ori = new Audio(url);
      audio[name] = ori;
      ori.addEventListener(
        "canplaythrough",
        () => ++audioLoadedCount && checkAssetsLoad()
      );
    });
  }
}

function loadImage() {
  imgList.forEach((source) => {
    const { name, url } = source;
    const ori = new Image();
    ori.addEventListener("load", () => ++imgLoadedCount && checkAssetsLoad());
    ori.addEventListener("error", function () {
      alert("image error");
    });
    ori.src = url;
    image[name] = ori;
  });
}
