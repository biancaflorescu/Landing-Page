// Navbar
const navList = document.getElementById("nav-list");
const navSelect = document.getElementById("nav-select");
const navButton = document.getElementById("nav-button");

function navToggle() {
  if (navList.style.display === "flex") {
    navList.style.display = "";
    navSelect.style.display = "";
    navButton.style.display = "";
  } else {
    navList.style.display = "flex";
    navSelect.style.display = "flex";
    navButton.style.display = "flex";
  }
}

// Carousel

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const slideNumber = document.getElementById("slide-number");

const prevButtonTablet = document.getElementById("slide-arrow-prev-tablet");
const nextButtonTablet = document.getElementById("slide-arrow-next-tablet");

const prevButtonMobile = document.getElementById("slide-arrow-prev-mobile");
const nextButtonMobile = document.getElementById("slide-arrow-next-mobile");

let numberOfPages = 1;

const goToNextPage = (prev, next) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;

  slideNumber.innerText = `0${++numberOfPages}`;

  prev.disabled = false;
  prev.classList.remove("disabled");

  if (numberOfPages === 4) {
    next.disabled = true;
    next.classList.add("disabled");
  }
};

const goToPrevPage = (prev, next) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;

  if (numberOfPages > 1) {
    slideNumber.innerText = `0${--numberOfPages}`;
    prev.disabled = false;
  }

  if (numberOfPages < 4) {
    next.disabled = false;
    next.classList.remove("disabled");
  }

  if (numberOfPages === 1) {
    prev.disabled = true;
    prev.classList.add("disabled");
  }
};

nextButton.addEventListener("click", () => {
  goToNextPage(prevButton, nextButton);
});

prevButton.addEventListener("click", () => {
  goToPrevPage(prevButton, nextButton);
});

nextButtonTablet.addEventListener("click", () => {
  goToNextPage(prevButtonTablet, nextButtonTablet);
});

prevButtonTablet.addEventListener("click", () => {
  goToPrevPage(prevButtonTablet, nextButtonTablet);
});

nextButtonMobile.addEventListener("click", () => {
  goToNextPage(prevButtonMobile, nextButtonMobile);
});

prevButtonMobile.addEventListener("click", () => {
  goToPrevPage(prevButtonMobile, nextButtonMobile);
});
