/**
 * 动画方法兼容性实现
 */
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame;
window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 1000 / 60);
  }

  window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}

/**
 * 创建基于canvas的轮播组件
 * @param {String} selector 选择器
 * @param {Object} options 配置项
 */
function createCarousel(selector, options) {
  let $ = (el) => {
    return document.querySelector(el)
  }
  let $all = (el) => {
    return document.querySelectorAll(el)
  }

  let container = $(selector);
  let containerWidth = container.offsetWidth;
  let containerHeight = container.offsetHeight;
  container.innerHTML = `<canvas id="canvas" width=${containerWidth} height=${containerHeight}>please update your browser</canvas>`;
  let ctx = $('#canvas').getContext('2d');
  let count = 0;
  let imgList = [];
  let drawList = [];
  for (let imgSrc of options.imgs) {
    let img = document.createElement('img');
    let imgObj = {
      src: img,
      startX: 0,
      startY: 0,
      move: this.startX--
    }
    imgList.push(imgObj);
    for (let img of imgList) {
      let x = img.startX;
      let timeoutFlag = true;
      Object.defineProperty(img, 'startX', {
        configurable: true,
        enumerable: true,
        get: function () {
          let currentX = x;

          if (x === 0 || x === containerWidth) {
            if (timeoutFlag) {
              timeoutFlag = false;
              setTimeout(function () {
                timeoutFlag = true;
                x -= 5;
              }, 2000)
            }
          } else if (-5 < x - 5 && x - 5 < 0) {
            x = 0;
          } else {
            x -= 5;
          }

          if (x <= -containerWidth) {
            x = containerWidth;
            if (imgList.length >= 2) {
              let maxIndex = Math.max(imgList.indexOf(drawList[0]), imgList.indexOf(drawList[1]));
              let minIndex = Math.min(imgList.indexOf(drawList[0]), imgList.indexOf(drawList[1]));
              let index = 0;
              if (maxIndex === imgList.length - 1 && minIndex === 0) {
                index = 1;
              } else if (maxIndex === imgList.length - 1) {
                index = 0;
              } else {
                index = maxIndex + 1;
              }

              let drawListIndex = drawList.indexOf(img);
              imgList[index].startX = containerWidth;
              drawList[drawListIndex] = imgList[index];
            }
          }
          return currentX;
        },
        set: function (newVal) {
          x = newVal;
        }
      })
    }
    img.src = imgSrc;
    img.onload = () => {
      count++;
      if (count === options.imgs.length) {
        if (imgList.length >= 2) {
          drawList.push(imgList[0], imgList[1]);
          drawList[1].startX = containerWidth;
        } else {
          drawList.push(imgList[0]);
        }

        function drawing() {
          ctx.clearRect(0, 0, containerWidth, containerHeight);
          for (let image of drawList) {
            ctx.drawImage(image.src, image.startX, image.startY);
          }

          requestAnimationFrame(drawing)
        }

        drawing();
      }
    }

  }
}

createCarousel('.x-canvas-carousel', {
  imgs: ['https://s2.ax1x.com/2019/10/09/uhjJDe.jpg', 'https://s2.ax1x.com/2019/10/13/uxGqHK.jpg', 'https://s2.ax1x.com/2019/10/13/uxJiHf.jpg']
});