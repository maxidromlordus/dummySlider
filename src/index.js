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
const imageView = document.createElement("img");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

const displayImage = function (arr) {
  let currentPosition = 1;
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    count += 1;
  }
  let displayCount = count;
  if (displayCount < 10) {
    displayCount = `0${displayCount}`;
  }
  imageText.innerText =
    currentPosition < 10
      ? `Image 0${currentPosition} of ${displayCount}`
      : `Image ${currentPosition} of ${displayCount}`;
  imageView.src = `./images/${arr[currentPosition - 1]}`;

  leftButton.addEventListener("click", () => {
    console.log("clicked left");
    if (currentPosition === 1) {
      currentPosition = count;
      imageText.innerText =
        currentPosition < 10
          ? `Image 0${currentPosition} of ${displayCount}`
          : `Image ${currentPosition} of ${displayCount}`;
      imageView.src = imageView.src = `./images/${arr[currentPosition - 1]}`;
    } else if (currentPosition > 1) {
      currentPosition -= 1;
      imageText.innerText =
        currentPosition < 10
          ? `Image 0${currentPosition} of ${displayCount}`
          : `Image ${currentPosition} of ${displayCount}`;
      imageView.src = imageView.src = `./images/${arr[currentPosition - 1]}`;
    }
  });

  rightButton.addEventListener("click", () => {
    console.log("clicked right");
    if (currentPosition === count) {
      currentPosition = 1;
      imageText.innerText =
        currentPosition < 10
          ? `Image 0${currentPosition} of ${displayCount}`
          : `Image ${currentPosition} of ${displayCount}`;
      imageView.src = imageView.src = `./images/${arr[currentPosition - 1]}`;
    } else if (currentPosition < count) {
      currentPosition += 1;
      imageText.innerText =
        currentPosition < 10
          ? `Image 0${currentPosition} of ${displayCount}`
          : `Image ${currentPosition} of ${displayCount}`;
      imageView.src = imageView.src = `./images/${arr[currentPosition - 1]}`;
    }
  });
};

displayImage(arr);
imageContainer.appendChild(imageView);
