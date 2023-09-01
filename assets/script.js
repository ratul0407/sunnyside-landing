"use strict";
const hamburger = document.querySelector(".hamburger");
const toggle = document.querySelector(".toggle");
hamburger.addEventListener("click", () => {
  toggle.classList.toggle("hidden");
  toggle.classList.add("flex");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !toggle.classList.contains("hidden")) {
    toggle.classList.add("hidden");
  }
});
