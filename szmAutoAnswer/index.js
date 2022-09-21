let qa = getCorrectQa();
let errorQa;
const errorTimesList = [0, 1, 2];
const errorTimes =
  errorTimesList[Math.floor(Math.random() * errorTimesList.length)];

const uid = setInterval(() => {
  if (!qa.length) {
    qa = getCorrectQa();
  } else {
    clearInterval(uid);
    if (errorTimes) {
      errorQa = getErrorQa();
      for (let i = 0; i < errorTimes; i++) {
        errorQa[Math.floor(Math.random() * errorQa.length)].checked = true;
      }
    }

    qa.forEach((el) => {
      el.checked = true;
    });
    const time = randomNumber(120000, 300000);
    setTimeout(() => {
      document.getElementById("confirm-btn").click();
      setTimeout(() => {
        document.getElementById("reload-btn").click();
      }, 3000);
    }, time);

    console.log("errorTimes", errorTimes);
    console.log("time", time);
  }
}, 2000);

function getCorrectQa() {
  return document.querySelectorAll(
    '.bui-panel-foot .bui-btn[data-iscorrectchoice="1"] input'
  );
}

function getErrorQa() {
  return document.querySelectorAll(
    '.bui-panel-foot .bui-btn[data-iscorrectchoice="0"] input'
  );
}

function randomNumber(startNumber, endNumber) {
  const choice = endNumber - startNumber + 1;
  return Math.floor(Math.random() * choice + startNumber);
}
