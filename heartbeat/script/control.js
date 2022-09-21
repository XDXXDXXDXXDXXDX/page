const home = document.getElementById("home");
const game = document.getElementById("game");
const dot = document.getElementById("dot");
const isMobile = getIsMobile();

document.getElementById("boy").addEventListener("click", () => {
  start();
  isSafariBrowser && loadAudio();
  audio.i = audio.iGirl;
  audio.iLikeYou = audio.iLikeYouGirl;
});

document.getElementById("girl").addEventListener("click", () => {
  start();
  isSafariBrowser && loadAudio();
  audio.i = audio.iBoy;
  audio.iLikeYou = audio.iLikeYouBoy;
});

let clickCount = 0;

let startEvent = "mousedown";
let endEvent = "mouseup";
if (isMobile) {
  startEvent = "touchstart";
  endEvent = "touchend";
}

let showLoveId;
let sayIId;
let heartbeatHardId;
let changeViewId;

let hasBeat = false;

dot.addEventListener(startEvent, (e) => {
  if (hasBeat) return;
  e.preventDefault();
  dot.classList.add("active");
  ++clickCount;

  showLoveId = setTimeout(() => {
    sayILikeYou();
    changeViewColor();
    audio.heartbeatFast.loop = true;
    audio.heartbeatFast.play();
    dot.classList.remove("active");
    audio.heartbeatHard.currentTime = 0;
    audio.heartbeatHard.pause();
    hasBeat = true;
  }, 4000);

  if (clickCount > 3) {
    audio.heartbeatHard.play();
    return 0;
  }

  audio.i.play();
  sayIId = setInterval(() => {
    audio.i.play();
  }, 1500);

  audio.heartbeat.play();
  heartbeatHardId = setTimeout(() => {
    audio.heartbeatHard.play();
  }, 1000);
});

dot.addEventListener(endEvent, () => {
  dot.classList.remove("active");
  if (!hasBeat) {
    audio.iLikeYou.currentTime = 0;
    audio.iLikeYou.pause();
  }

  audio.heartbeatHard.currentTime = 0;
  audio.heartbeatHard.pause();

  clearTimeout(heartbeatHardId);
  clearTimeout(showLoveId);
  clearTimeout(changeViewId);
  clearInterval(sayIId);
});

function getIsMobile() {
  return !!navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
}

function sayILikeYou() {
  clearInterval(sayIId);
  audio.iLikeYou.play();
  clickCount = 0;
}

function changeViewColor() {
  game.style.background = "var(--color-bg-white)";
  dot.style.backgroundImage = "url(./assets/heart.png)";
  dot.style.borderRadius = "0";

  setTimeout(() => {
    dot.style.width = "200px";
    dot.style.height = "200px";
    dot.classList.add("heartbeat");
  }, 2000);
}

function start() {
  home.style.opacity = 0;
  setTimeout(() => {
    home.style.display = "none";
    game.style.display = "flex";
  }, 1000);
}
