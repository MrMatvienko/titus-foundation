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
