const pupils = document.querySelectorAll(".pupil");

window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    const rect = pupil.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.pageY - eyeCenterY, e.pageX - eyeCenterX);

    const distance = 3;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    pupil.style.transform = `translate(calc(5% + ${x}px), calc(100% + ${y}px))`;
  });
});

// mime fill code

let fill_percentage = 0;
const fill_level = document.querySelector("#fill_level");

const hand_1 = document.querySelector(".hand_trigger_1");

const intervalId = setInterval(() => {
  if (fill_percentage > 99) {
    alert("Wow! You're 100% a mime!");
    fill_percentage = 99;
  }
  fill_percentage = Math.max(fill_percentage - 0.1, 0);
  fill_level.style.height = 100 - fill_percentage + "%";
}, 20);

hand_1.addEventListener("click", (e) => {
  fill_percentage = Math.min(fill_percentage + 10, 100);
});

const hand_2 = document.querySelector(".hand_trigger_2");

hand_2.addEventListener("click", (e) => {
  fill_percentage = Math.min(fill_percentage + 10, 100);
});

// Baised off Source - https://stackoverflow.com/a/68864968
// Posted by Barmar, modified by community.
// Retrieved 2026-04-25, License - CC BY-SA 4.0

function getDateTime() {
  let date = new Date();
  let hour = date.getHours();
  if (hour >= 19) {
    document.getElementById("welcome_text").innerHTML = "Good Evening";
  } else if (hour >= 12) {
    document.getElementById("welcome_text").innerHTML = "Good Afternoon";
  } else if (hour >= 6) {
    document.getElementById("welcome_text").innerHTML = "Good Morning";
  } else {
    document.getElementById("welcome_text").innerHTML = "Good Night";
  }
}
getDateTime();

// end source

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent =
    `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

// text shadow movement
const text_cont = document.querySelector(".mime_move_text");
const SHADOW_MAX = 20; // max shadow distance in px

// smooth clamp using tanh
function smoothClamp(val, max) {
  return max * Math.tanh(val / max);
}

window.addEventListener("mousemove", (e) => {
  const rect = text_cont.getBoundingClientRect();
  // distance from mouse to element center
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;

  // normalize across screen
  const rawX = (dx / window.innerWidth) * SHADOW_MAX * 2;
  const rawY = (dy / window.innerHeight) * SHADOW_MAX * 2;

  // flip direction and smooth clamp
  const xShadow = smoothClamp(-rawX, SHADOW_MAX);
  const yShadow = smoothClamp(-rawY, SHADOW_MAX);
  text_cont.style.textShadow = `${xShadow}px ${yShadow}px 15px rgba(255, 0, 0, 0.6)`;
});
