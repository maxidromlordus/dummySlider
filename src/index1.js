// array with images name
const arr = [
  "gora_vershina-1.jpg",
  "gora_vershina-2.jpg",
  "gora_vershina-3.jpg",
  "gora_vershina-4.jpg",
  "gora_vershina-5.jpg",
  "gora_vershina-6.jpg",
  "gora_vershina-7.jpg",
  "gora_vershina-8.jpg",
  "gora_vershina-9.jpg",
  "gora_vershina-10.jpg",
  "gora_vershina-11.jpg",
];

const imageText = document.getElementById("img-num");
const imageContainer = document.getElementById("img-container");
const imageWindow = document.getElementById("img-window");
const imageView = document.createElement("img");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const dotsWrapper = document.querySelector(".dots-wrapper");
const imgWindowWidth = window.getComputedStyle(imageWindow).width;
imageContainer.style.width = 100 * arr.length + "%";

const displayImage = function (arr) {
  let offset = 0;
  let currentPosition = 1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    //adding slides to wrapper
    const slideImg = `<img src="./images/${arr[i]}">`;
    const slide = document.createElement("div"); //
    slide.innerHTML = slideImg;
    imageContainer.appendChild(slide);

    //adding dots to dots wrapper
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.innerHTML = "<span>&#8226;</span>";
    dotsWrapper.appendChild(dot);
    count += 1;
  }

  let displayCount = count;
  if (displayCount < 10) {
    displayCount = `0${displayCount}`;
  }

  //dots event-listener
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // change button style
      dots.forEach((dot) => {
        dot.classList.remove("active-dot");
      });
      dot.classList.add("active-dot");
      console.log("clicked on dot № " + index);
      offset = +imgWindowWidth.slice(0, imgWindowWidth.length - 2) * index;
      imageContainer.style.transform = `translateX(-${offset}px)`;
      // text changes
      currentPosition = index + 1;
      imageText.innerText =
        index < 10
          ? `Image 0${index + 1} of ${displayCount}`
          : `Image ${index + 1} of ${displayCount}`;
    });
  });

  imageText.innerText =
    currentPosition < 10
      ? `Image 0${currentPosition} of ${displayCount}`
      : `Image ${currentPosition} of ${displayCount}`;

  leftButton.addEventListener("click", () => {
    console.log("clicked left");

    if (offset === 0) {
      offset =
        +imgWindowWidth.slice(0, imgWindowWidth.length - 2) * (arr.length - 1);
      currentPosition = count;
      imageText.innerText =
        currentPosition < 10
          ? `Image 0${currentPosition} of ${displayCount}`
          : `Image ${currentPosition} of ${displayCount}`;
      dots.forEach((dot, index) => {
        console.log(index + 1, currentPosition);
        dot.classList.remove("active-dot");
        if (currentPosition === index + 1) {
          dot.classList.add("active-dot");
        }
      });
    } else {
      offset -= +imgWindowWidth.slice(0, imgWindowWidth.length - 2);
      currentPosition -= 1;
      imageText.innerText =
        currentPosition < 10
          ? `Image 0${currentPosition} of ${displayCount}`
          : `Image ${currentPosition} of ${displayCount}`;
      dots.forEach((dot, index) => {
        console.log(index + 1, currentPosition);
        dot.classList.remove("active-dot");
        if (currentPosition === index + 1) {
          dot.classList.add("active-dot");
        }
      });
    }
    imageContainer.style.transform = `translateX(-${offset}px)`;
  });

  rightButton.addEventListener("click", () => {
    console.log("clicked right");
    if (
      offset ===
      +imgWindowWidth.slice(0, imgWindowWidth.length - 2) * (arr.length - 1)
    ) {
      offset = 0;
      currentPosition = 1;
      imageText.innerText =
        currentPosition < 10
          ? `Image 0${currentPosition} of ${displayCount}`
          : `Image ${currentPosition} of ${displayCount}`;

      dots.forEach((dot, index) => {
        console.log(index + 1, currentPosition);
        dot.classList.remove("active-dot");
        if (currentPosition === index + 1) {
          dot.classList.add("active-dot");
        }
      });
    } else {
      offset += +imgWindowWidth.slice(0, imgWindowWidth.length - 2);
      currentPosition += 1;
      imageText.innerText =
        currentPosition < 10
          ? `Image 0${currentPosition} of ${displayCount}`
          : `Image ${currentPosition} of ${displayCount}`;
      dots.forEach((dot, index) => {
        console.log(index + 1, currentPosition);
        dot.classList.remove("active-dot");
        if (currentPosition === index + 1) {
          dot.classList.add("active-dot");
        }
      });
    }
    imageContainer.style.transform = `translateX(-${offset}px)`;
  });
};

displayImage(arr);
//   imageContainer.appendChild(imageView);
