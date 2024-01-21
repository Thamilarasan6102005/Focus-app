import Timer from "./timer.js";

new Timer(document.querySelector(".timer"));

const toggler = document.getElementById("darkmode-toggle");
const mode = document.getElementById("modeBG");

toggler.addEventListener("click", function onClick(event) {
  mode.classList.toggle("darkMode");
  mode.classList.toggle("lightMode");
  console.log("10");
});
