// --------------------------------------------------------------------------------- Mobile Nav Show & Hide ******
let toggleBtn = document.getElementById("toggle-btn");
let mobNav = document.getElementById("mob-nav");
let sections = document.getElementsByTagName("section");
let navLinks = document.getElementsByClassName("nav-link");

// Add/remove .show class which show/hide the Mobile Nav
toggleBtn.addEventListener("click", function () {
  mobNav.classList.toggle("show");
});

// Auto Close Mobile Nav When Link is Clickec
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    mobNav.classList.toggle("show");
  });
}

// --------------------------------------------------------------------------------- Desktop Nav Have Border Bottom After 100px Scroll ******
let header = document.getElementsByTagName("header");

// if Scrolled Area is greater than 300px the Border will appear, else will not appear
document.addEventListener("scroll", function () {
  if (scrollY > 300) {
    header[0].style.borderBottom = "2px solid #CCC";
  } else if (scrollY < 300) {
    header[0].style.borderBottom = "none";
  }
});

// --------------------------------------------------------------------------------- Updated Date in Footer Copyrights ******

let dateSpan = document.getElementById("datenow");
let year = new Date().getFullYear();
console.log(year);
dateSpan.textContent = year;

// --------------------------------------------------------------------------
if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}