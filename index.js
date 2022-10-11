let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");
const hamburger = document.querySelector(".burger");
const nav_bar = document.querySelector(".nav-bar");
const nav = document.querySelector("header");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

let lastScrollY = window.scrollY

window.addEventListener("scroll", (e) => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden")
    hamburger.classList.remove("active");
    nav_bar.classList.remove("active");
  } else {
    nav.classList.remove("nav--hidden")
  }
  lastScrollY = window.scrollY
})

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    nav_bar.classList.remove("active");
    return
  }
  hamburger.classList.add("active");
  nav_bar.classList.add("active");
})

document.querySelectorAll(".nav-link").forEach(n => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_bar.classList.remove("active");
  })
})

window.addEventListener("scroll", reveal);

reveal();