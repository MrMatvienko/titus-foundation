document.addEventListener("DOMContentLoaded", function () {
  const projectLinkWrapper = document.querySelector(".project-link-wraper");
  const dropdownIcon = projectLinkWrapper.querySelector(".vector-icon-down");
  const dropdownList = projectLinkWrapper.querySelector(".header-project-list");

  dropdownIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownList.classList.toggle("show");
    if (dropdownIcon.classList.contains("rotated")) {
      dropdownIcon.classList.remove("rotated");
    } else {
      dropdownIcon.classList.add("rotated");
    }
  });
  document.addEventListener("click", function () {
    if (dropdownList.classList.contains("show")) {
      dropdownList.classList.remove("show");
      dropdownIcon.classList.remove("rotated");
    }
  });

  dropdownList.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactHeader = document.querySelector(".contact-wraper");
  const dropIcon = contactHeader.querySelector(".icon-down");
  const adressList = contactHeader.querySelector(".header-address");

  dropIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    adressList.classList.toggle("show");
    if (dropIcon.classList.contains("rotated")) {
      dropIcon.classList.remove("rotated");
    } else {
      dropIcon.classList.add("rotated");
    }
  });
  document.addEventListener("click", function () {
    if (adressList.classList.contains("show")) {
      adressList.classList.remove("show");
      dropIcon.classList.remove("rotated");
    }
  });

  adressList.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

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

//-------------Link---Project---Book----------------//

document.querySelectorAll(".header-project-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetIndex = Array.from(items).indexOf(targetElement);

      if (targetIndex > -1) {
        items[currentIndex].classList.remove("current");
        if (currentIndex > targetIndex) {
          items[currentIndex].classList.add("next");
          items[targetIndex].classList.remove("prev");
        } else {
          items[currentIndex].classList.add("prev");
          items[targetIndex].classList.remove("next");
        }
        items[targetIndex].classList.add("current");

        currentIndex = targetIndex;

        const offset = currentIndex * 1237;
        document.querySelector(".project-gallery-list").style.left =
          -offset + "px";
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
