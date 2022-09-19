import "./styles/main.scss";

import skills from "./icons";
import contactForm from "./contact";
import cryptozon from "./assets/cryptozon.png";
import forkify from "./assets/forkify.jpg";
import movie from "./assets/movie.jpg";
import tea from "./assets/tea.png";
import fsa from "./assets/icons/fsa.svg";
import arrow from "./assets/icons/arrow.svg";
import child from "./assets/icons/child.svg";
import github from "./assets/icons/github.svg";
import file from "./assets/icons/file.svg";
import linkedin from "./assets/icons/linkedin.svg";
import mobileTouch from "./assets/icons/setting.svg";
import franzresume from "./assets/franzresume.pdf";

// Load skills images
skills.generateLogo();

const sectionProjects = document.querySelector(".section-projects");
const sections = document.querySelectorAll("section");

const image1Container = document.querySelector(".projects__img--1");
const image2Container = document.querySelector(".projects__img--2");
const image3Container = document.querySelector(".projects__img--3");
const image4Container = document.querySelector(".projects__img--4");

const content = document.querySelector(".content");
const resumeDownload = document.querySelectorAll(".resume-download");
const mTouch = document.querySelectorAll(".touch");

const fsaIcon = document.querySelector(".fsa");
const arrowIcon = document.querySelector(".arrow");
const childIcon = document.querySelector(".child");

const labelTexts = document.querySelectorAll(".label-text");
const iconPath = document.querySelectorAll(".icon-path");

//socials elements
const githubIcon = document.querySelectorAll(".github");
const linkedinIcon = document.querySelectorAll(".linkedin");
const resumeIcon = document.querySelectorAll(".resume");

const navList = document.querySelector(".nav__list");
const navItem2 = document.querySelector(".nav__item--2");
const navItem3 = document.querySelector(".nav__item--3");
const navItem4 = document.querySelector(".nav__item--4");

// Loading asset/resources
image1Container.src = cryptozon;
image2Container.src = movie;
image3Container.src = tea;
image4Container.src = forkify;
fsaIcon.src = fsa;
childIcon.src = child;
arrowIcon.src = arrow;
githubIcon.forEach((el) => (el.src = github));
linkedinIcon.forEach((el) => (el.src = linkedin));
resumeIcon.forEach((el) => (el.src = file));
mTouch.forEach((el) => (el.src = mobileTouch));
resumeDownload.forEach((el) => (el.href = franzresume));

// Enables contact form functions
contactForm.run();

// Mobile Responsive Touch For Displaying Tools
sectionProjects.addEventListener("click", (e) => {
  if (innerWidth > 1000) return;
  const selected = e.target.closest(".projects__img-container");
  if (!selected) return;
  const selectedNum = selected.dataset.tools;
  const heading = document.querySelector(`.projects__heading-${selectedNum}`);
  const tools = document.querySelector(`.projects__tools--${selectedNum}`);
  const touch = document.querySelector(`.touch--${selectedNum}`);
  heading.style.color =
    getComputedStyle(heading).color === "rgb(0, 0, 0)"
      ? "#2d5bc4"
      : "rgb(0, 0, 0)";
  tools.style.opacity = getComputedStyle(tools).opacity === "0" ? "1" : "0";
  touch.style.opacity = getComputedStyle(touch).opacity === "0" ? "1" : "0";
});

// Scroll Animation for Fade In and Selected Navbar
sections[0].style.opacity = 1 - content.scrollTop / 100;
const obs = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    const secNum = entry.target.dataset.sec;
    if (entry.isIntersecting) {
      if (secNum > 1) entry.target.classList.remove("section-animate");
      if (+secNum === 5) {
        document.querySelector(`.radio__inp--${+secNum - 1}`).checked = false;
      } else document.querySelector(`.radio__inp--${secNum}`).checked = true;
    } else {
      if (secNum > 1) entry.target.classList.add("section-animate");
    }
  },
  {
    threshold: 0.3,
    root: content,
  }
);

for (let i = 0; i < sections.length; i++) {
  if (i !== 0) sections[i].classList.add("section-animate");
  obs.observe(sections[i]);
}

// Responsive Measurements for nav and last section
navItem2.style.top = "60%";
navItem3.style.top = "70%";
navItem4.style.top = "80%";
sections[4].style.marginBottom =
  innerHeight - sections[4].getBoundingClientRect().height - 50 + "px";
addEventListener("resize", (e) => {
  sections[4].style.marginBottom =
    innerHeight - sections[4].getBoundingClientRect().height - 50 + "px";
});

// Animation for navbar
content.addEventListener("scroll", (e) => {
  const { top: sec1Top } = sections[0].getBoundingClientRect();
  const { top: sec2Top } = sections[1].getBoundingClientRect();
  const { top: sec3Top } = sections[2].getBoundingClientRect();
  const { top: sec4Top } = sections[3].getBoundingClientRect();
  const { top: navListTop } = navList.getBoundingClientRect();
  if (innerWidth < 601) {
    if (sec1Top < -15) {
      labelTexts.forEach((label) => {
        label.style.opacity = 0;
        label.style.transform = "translateX(120%)";
        label.style.position = "absolute";
      });
      iconPath.forEach((ic) => {
        ic.style.fill = "#afafafaf";
      });
    } else {
      labelTexts.forEach((label) => {
        label.style.opacity = 1;
        label.style.position = "relative";
        label.style.transform = "translateX(0)";
      });
      iconPath.forEach((ic) => {
        ic.style.fill = "black";
      });
    }
  }

  if (sec2Top <= innerHeight && sec2Top > navListTop) {
    navItem2.style.top =
      (50 * (sec2Top - navListTop)) / (innerHeight - navListTop) + 10 + "%";
  } else if (sec2Top <= navListTop) navItem2.style.top = "10%";
  else if (sec2Top > navListTop && sec2Top > innerHeight)
    navItem2.style.top = "60%";

  if (sec3Top <= innerHeight && sec3Top > navListTop) {
    navItem3.style.top =
      (50 * (sec3Top - navListTop)) / (innerHeight - navListTop) + 20 + "%";
  } else if (sec3Top <= navListTop) navItem3.style.top = "20%";
  else if (sec3Top > navListTop && sec3Top > innerHeight)
    navItem3.style.top = "70%";

  if (sec4Top <= innerHeight && sec4Top > navListTop) {
    navItem4.style.top =
      (50 * (sec4Top - navListTop)) / (innerHeight - navListTop) + 30 + "%";
  } else if (sec4Top <= navListTop) navItem4.style.top = "30%";
  else if (sec4Top > navListTop && sec4Top > innerHeight)
    navItem4.style.top = "80%";
});

// Scroll to behavior with navbar
navList.addEventListener("change", function (e) {
  const num = +e.target.dataset.section;
  content.scrollTo({
    top:
      sections[num].getBoundingClientRect().top +
      content.scrollTop -
      navList.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

// Scroll to contact page with button
document.querySelector(".btn").addEventListener("click", function () {
  content.scrollTo({
    top:
      sections[4].getBoundingClientRect().top +
      content.scrollTop -
      navList.getBoundingClientRect().top +
      15,
    behavior: "smooth",
  });
  setTimeout(() => {
    document.querySelector(`.radio__inp--1`).checked = false;
    document.querySelector(`.radio__inp--2`).checked = false;
    document.querySelector(`.radio__inp--3`).checked = false;
    document.querySelector(`.radio__inp--4`).checked = false;
  }, 500);
});
