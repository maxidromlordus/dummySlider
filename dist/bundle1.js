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
    var dotsWrapper = document.querySelector(".dots-wrapper");
    var imgWindowWidth = window.getComputedStyle(imageWindow).width;
    imageContainer.style.width = 100 * arr.length + "%";

    var displayImage = function displayImage(arr) {
      var offset = 0;
      var currentPosition = 1;
      var count = 0;

      for (var i = 0; i < arr.length; i++) {
        //adding slides to wrapper
        var slideImg = "<img src=\"./images/".concat(arr[i], "\">");
        var slide = document.createElement("div"); //

        slide.innerHTML = slideImg;
        imageContainer.appendChild(slide); //adding dots to dots wrapper

        var dot = document.createElement("div");
        dot.classList.add("dot");
        dot.innerHTML = "<span>&#8226;</span>";
        dotsWrapper.appendChild(dot);
        count += 1;
      }

      var displayCount = count;

      if (displayCount < 10) {
        displayCount = "0".concat(displayCount);
      } //dots event-listener


      var dots = document.querySelectorAll(".dot");
      dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
          // change button style
          dots.forEach(function (dot) {
            dot.classList.remove("active-dot");
          });
          dot.classList.add("active-dot");
          console.log("clicked on dot № " + index);
          offset = +imgWindowWidth.slice(0, imgWindowWidth.length - 2) * index;
          imageContainer.style.transform = "translateX(-".concat(offset, "px)"); // text changes

          currentPosition = index + 1;
          imageText.innerText = index < 10 ? "Image 0".concat(index + 1, " of ").concat(displayCount) : "Image ".concat(index + 1, " of ").concat(displayCount);
        });
      });
      imageText.innerText = currentPosition < 10 ? "Image 0".concat(currentPosition, " of ").concat(displayCount) : "Image ".concat(currentPosition, " of ").concat(displayCount);
      leftButton.addEventListener("click", function () {
        console.log("clicked left");

        if (offset === 0) {
          offset = +imgWindowWidth.slice(0, imgWindowWidth.length - 2) * (arr.length - 1);
          currentPosition = count;
          imageText.innerText = currentPosition < 10 ? "Image 0".concat(currentPosition, " of ").concat(displayCount) : "Image ".concat(currentPosition, " of ").concat(displayCount);
          dots.forEach(function (dot, index) {
            console.log(index + 1, currentPosition);
            dot.classList.remove("active-dot");

            if (currentPosition === index + 1) {
              dot.classList.add("active-dot");
            }
          });
        } else {
          offset -= +imgWindowWidth.slice(0, imgWindowWidth.length - 2);
          currentPosition -= 1;
          imageText.innerText = currentPosition < 10 ? "Image 0".concat(currentPosition, " of ").concat(displayCount) : "Image ".concat(currentPosition, " of ").concat(displayCount);
          dots.forEach(function (dot, index) {
            console.log(index + 1, currentPosition);
            dot.classList.remove("active-dot");

            if (currentPosition === index + 1) {
              dot.classList.add("active-dot");
            }
          });
        }

        imageContainer.style.transform = "translateX(-".concat(offset, "px)");
      });
      rightButton.addEventListener("click", function () {
        console.log("clicked right");

        if (offset === +imgWindowWidth.slice(0, imgWindowWidth.length - 2) * (arr.length - 1)) {
          offset = 0;
          currentPosition = 1;
          imageText.innerText = currentPosition < 10 ? "Image 0".concat(currentPosition, " of ").concat(displayCount) : "Image ".concat(currentPosition, " of ").concat(displayCount);
          dots.forEach(function (dot, index) {
            console.log(index + 1, currentPosition);
            dot.classList.remove("active-dot");

            if (currentPosition === index + 1) {
              dot.classList.add("active-dot");
            }
          });
        } else {
          offset += +imgWindowWidth.slice(0, imgWindowWidth.length - 2);
          currentPosition += 1;
          imageText.innerText = currentPosition < 10 ? "Image 0".concat(currentPosition, " of ").concat(displayCount) : "Image ".concat(currentPosition, " of ").concat(displayCount);
          dots.forEach(function (dot, index) {
            console.log(index + 1, currentPosition);
            dot.classList.remove("active-dot");

            if (currentPosition === index + 1) {
              dot.classList.add("active-dot");
            }
          });
        }

        imageContainer.style.transform = "translateX(-".concat(offset, "px)");
      });
    };

    displayImage(arr); //   imageContainer.appendChild(imageView);
  }, {}]
}, {}, [1]);