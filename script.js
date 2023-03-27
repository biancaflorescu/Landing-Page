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

// Form
const form = document.getElementById("form");
const nameEl = document.getElementById("form-name");
const emailEl = document.getElementById("form-email");
const messageEl = document.getElementById("form-message");

const checkName = () => {
  let valid = false;

  const min = 3,
    max = 25;

  const username = nameEl.value.trim();

  if (!isRequired(username)) {
    showError(nameEl, "Name cannot be empty.");
  } else if (!isBetween(username.length, min, max)) {
    showError(nameEl, `Name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be empty.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Incorrect email type.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkMessage = () => {
  let valid = false;

  if (!isRequired(messageEl.value)) {
    showError(messageEl, "Message cannot be empty.");
  } else {
    showSuccess(messageEl);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  console.log(formField);
  // add the error class
  input.classList.remove("success");
  input.classList.add("error");

  // show the error message
  const error = formField.querySelector(".error-message");
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  input.classList.remove("error");
  input.classList.add("success");

  // hide the error message
  const error = formField.querySelector(".error-message");
  error.textContent = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isUsernameValid = checkName(),
    isEmailValid = checkEmail(),
    isMessageValid = checkMessage();

  let isFormValid = isUsernameValid && isEmailValid && isMessageValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    nameEl.value = "";
    emailEl.value = "";
    messageEl.value = "";

    nameEl.classList.remove("success");
    emailEl.classList.remove("success");
    messageEl.classList.remove("success");
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "form-name":
        checkName();
        break;
      case "form-email":
        checkEmail();
        break;
      case "form-message":
        checkMessage();
        break;
    }
  })
);
