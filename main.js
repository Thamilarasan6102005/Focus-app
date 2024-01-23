import Timer from "./timer.js";

new Timer(document.querySelector(".timer"));

const toggler = document.getElementById("darkmode-toggle");
const mode = document.getElementById("modeBG");
const timer = document.getElementById("timer");
const pomoBtn = document.getElementById("timer_btn-pomodoro");
const breakBtn = document.getElementById("timer_btn-break");
const meditateBtn = document.getElementById("timer_btn-meditate");

toggler.addEventListener("click", function onClick(event) {
  mode.classList.remove("mediMode");
  mode.classList.remove("pomoMode");
  mode.classList.remove("breakMode");
  mode.classList.toggle("darkMode");
  mode.classList.toggle("lightMode");
  timer.classList.toggle("timerDarkTheme");
  timer.classList.toggle("timerLightTheme");
  // console.log("10");
});

pomoBtn.addEventListener("click", function onclick(event) {
  mode.classList.remove("breakMode");
  mode.classList.remove("mediMode");
  mode.classList.add("pomoMode");
});

breakBtn.addEventListener("click", function onclick(event) {
  mode.classList.remove("mediMode");
  mode.classList.remove("pomoMode");
  mode.classList.add("breakMode");
});

meditateBtn.addEventListener("click", function onclick(event) {
  mode.classList.remove("pomoMode");
  mode.classList.remove("breakMode");
  mode.classList.add("mediMode");
});
