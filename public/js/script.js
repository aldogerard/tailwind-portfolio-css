// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("translate-x-96");
  navMenu.classList.toggle("opacity-0");
});

// Navbar Fixed
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const backToTop = document.querySelector("#to-top");
  if (scrollY > 1) {
    return header.classList.add("navbar-fixed"), backToTop.classList.remove("scale-0");
  }
  return header.classList.remove("navbar-fixed"), backToTop.classList.add("scale-0");
});

// Klick Di Luar Hamburger

// window.addEventListener("click", (e) => {
//   if (e.target !== navMenu && e.target !== hamburger) {
//     hamburger.classList.remove("hamburger-active");
//     navMenu.classList.add("translate-x-96");
//     navMenu.classList.add("opacity-0");
//   }
// });

// Dark Mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindah Toggle sesuai local storage
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Navbar Fixed
// window.onscroll = () => {
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };
