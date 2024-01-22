import Timer from "./timer.js";

new Timer(document.querySelector(".timer"));

const toggler = document.getElementById("darkmode-toggle");
const mode = document.getElementById("modeBG");
const timer = document.getElementById("timer");

toggler.addEventListener("click", function onClick(event) {
  mode.classList.toggle("darkMode");
  mode.classList.toggle("lightMode");
  timer.classList.toggle("timerDarkTheme");
  timer.classList.toggle("timerLightTheme");
  console.log("10");
});
