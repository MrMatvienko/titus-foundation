let offset = 0;
const sliderLine = document.querySelector(".gallery-memorial-project");

document
  .querySelector(".galery-button-next")
  .addEventListener("click", function () {
    offset = offset + 653;
    if (offset > 2612) {
      offset = 2612;
    }
    sliderLine.style.left = -offset + "px";
  });
document
  .querySelector(".galery-button-prev")
  .addEventListener("click", function () {
    offset = offset - 653;
    if (offset < 0) {
      offset = 0;
    }
    sliderLine.style.left = -offset + "px";
  });

let offset2 = 0;

const slider = document.querySelector(".project-gallery-list");

document
  .querySelector(".button-next-project")
  .addEventListener("click", function () {
    offset2 = offset2 + 1237;
    if (offset2 > 1237) {
      offset2 = 1237;
    }
    slider.style.left = -offset2 + "px";
  });

let currentIndex = 0;
const items = document.querySelectorAll(".project-gallery-item");

document
  .querySelector(".button-next-project")
  .addEventListener("click", function () {
    if (currentIndex < items.length - 1) {
      items[currentIndex].classList.remove("current");
      items[currentIndex].classList.add("prev");
      currentIndex++;
      items[currentIndex].classList.remove("next");
      items[currentIndex].classList.add("current");
      if (currentIndex < items.length - 1) {
        items[currentIndex + 1].classList.add("next");
      }
    }
  });
