"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    // array with images name
    var arr = ["gora_vershina-1.jpg", "gora_vershina-2.jpg", "gora_vershina-3.jpg", "gora_vershina-4.jpg", "gora_vershina-5.jpg", "gora_vershina-6.jpg", "gora_vershina-7.jpg", "gora_vershina-8.jpg", "gora_vershina-9.jpg", "gora_vershina-10.jpg", "gora_vershina-11.jpg"];
    var imageText = document.getElementById("img-num");
    var imageContainer = document.getElementById("img-container");
    var imageWindow = document.getElementById("img-window");
    var imageView = document.createElement("img");
    var leftButton = document.getElementById("left");
    var rightButton = document.getElementById("right");

    var displayImage = function displayImage(arr) {
      var currentPosition = 1;
      var count = 1;

      for (var i = 0; i <= arr.length; i++) {
        var slideImg = "<img src=\"./images/".concat(arr[i], "\">");
        var slide = document.createElement("div");
        count += 1;
      }

      var displayCount = count;

      if (displayCount < 10) {
        displayCount = "0".concat(displayCount);
      }
    }; //     imageText.innerText =
    //       currentPosition < 10
    //         ? `Image 0${currentPosition} of ${displayCount}`
    //         : `Image ${currentPosition} of ${displayCount}`;
    //     imageView.src = `./images/${arr[currentPosition - 1]}`;
    //     leftButton.addEventListener("click", () => {
    //       console.log("clicked left");
    //       if (currentPosition === 1) {
    //         currentPosition = count;
    //         imageText.innerText =
    //           currentPosition < 10
    //             ? `Image 0${currentPosition} of ${displayCount}`
    //             : `Image ${currentPosition} of ${displayCount}`;
    //         imageView.src = imageView.src = `./images/${arr[currentPosition - 1]}`;
    //       } else if (currentPosition > 1) {
    //         currentPosition -= 1;
    //         imageText.innerText =
    //           currentPosition < 10
    //             ? `Image 0${currentPosition} of ${displayCount}`
    //             : `Image ${currentPosition} of ${displayCount}`;
    //         imageView.src = imageView.src = `./images/${arr[currentPosition - 1]}`;
    //       }
    //     });
    //     rightButton.addEventListener("click", () => {
    //       console.log("clicked right");
    //       if (currentPosition === count) {
    //         currentPosition = 1;
    //         imageText.innerText =
    //           currentPosition < 10
    //             ? `Image 0${currentPosition} of ${displayCount}`
    //             : `Image ${currentPosition} of ${displayCount}`;
    //         imageView.src = imageView.src = `./images/${arr[currentPosition - 1]}`;
    //       } else if (currentPosition < count) {
    //         currentPosition += 1;
    //         imageText.innerText =
    //           currentPosition < 10
    //             ? `Image 0${currentPosition} of ${displayCount}`
    //             : `Image ${currentPosition} of ${displayCount}`;
    //         imageView.src = imageView.src = `./images/${arr[currentPosition - 1]}`;
    //       }
    //     });
    //   };
    //   displayImage(arr);
    //   imageContainer.appendChild(imageView);

  }, {}]
}, {}, [1]);