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
