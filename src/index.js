import "./styles/main.scss";

import skills from "./icons";

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

skills.generateLogo();
const image1Container = document.querySelector(".projects__img--1");
const image2Container = document.querySelector(".projects__img--2");
const image3Container = document.querySelector(".projects__img--3");
const image4Container = document.querySelector(".projects__img--4");
const sections = document.querySelectorAll("section");
const content = document.querySelector(".content");
const resumeDownload = document.querySelectorAll(".resume-download");

// const projectIcon = document.querySelector(".project-icon");
// const skillIcon = document.querySelector(".skill-icon");
// const aboutIcon = document.querySelector(".about-icon");

const fsaIcon = document.querySelector(".fsa");
const arrowIcon = document.querySelector(".arrow");
const childIcon = document.querySelector(".child");

//socials
const githubIcon = document.querySelectorAll(".github");
const linkedinIcon = document.querySelectorAll(".linkedin");
const resumeIcon = document.querySelectorAll(".resume");
const mTouch = document.querySelectorAll(".touch");

const nav = document.querySelector(".nav__list");

const navItem2 = document.querySelector(".nav__item--2");
const navItem3 = document.querySelector(".nav__item--3");
const navItem4 = document.querySelector(".nav__item--4");

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
// sections[1].style.opacity = 0;
// sections[2].style.opacity = 0;
// navItem1.style.top = "32.5rem";

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

const navList = document.querySelector(".nav__list");
navItem2.style.top = "60%";
navItem3.style.top = "70%";
navItem4.style.top = "80%";
sections[4].style.marginBottom =
  innerHeight - sections[4].getBoundingClientRect().height - 50 + "px";
addEventListener("resize", (e) => {
  sections[4].style.marginBottom =
    innerHeight - sections[4].getBoundingClientRect().height - 50 + "px";
});
content.addEventListener("scroll", (e) => {
  // FADES
  // sections[0].style.opacity = 1 - content.scrollTop / 100;
  // if (content. >= 325) sections[1].style.opacity = 1;
  // else sections[1].style.opacity = 0;
  /*
  if (scrollTop >= 1910)
    sections[1].style.opacity = 1 - (scrollTop - 1910) / 100;

  if (scrollTop >= 2300) sections[2].style.opacity = 1;
  else sections[2].style.opacity = 0;

  if (scrollTop >= 2950)
    sections[2].style.opacity = 1 - (scrollTop - 2950) / 100;

  if (scrollTop >= 3440) sections[3].style.opacity = 1;
  else sections[3].style.opacity = 0;

  if (scrollTop >= 3900)
    sections[3].style.opacity = 1 - (scrollTop - 3900) / 100;

  if (scrollTop >= 4200) sections[4].style.opacity = 1;
  else sections[4].style.opacity = 0;*/
  // if(scrollTop)
});
const labelTexts = document.querySelectorAll(".label-text");
const iconPath = document.querySelectorAll(".icon-path");
content.addEventListener("scroll", (e) => {
  const { top: sec1Top } = sections[0].getBoundingClientRect();
  const { top: sec2Top } = sections[1].getBoundingClientRect();
  const { top: sec3Top } = sections[2].getBoundingClientRect();
  const { top: sec4Top } = sections[3].getBoundingClientRect();
  const { top: sec5Top } = sections[4].getBoundingClientRect();
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

  // console.log(
  //   "Nav Top: ",
  //   navListTop,
  //   "\n",
  //   "Inner Height",
  //   innerHeight,
  //   "\n",
  //   "Section 1: ",
  //   sec1Top,
  //   "\n",
  //   "Section 2: ",
  //   sec2Top,
  //   "\n",
  //   "Section 3: ",
  //   sec3Top,
  //   "\n",
  //   "Section 4: ",
  //   sec4Top,
  //   "\n",
  //   "Section 5: ",
  //   sec5Top,
  //   "\n"
  // );
  sections[0].style.opacity = 1 - content.scrollTop / 100;

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

nav.addEventListener("change", function (e) {
  const num = +e.target.dataset.section;
  content.scrollTo({
    top:
      sections[num].getBoundingClientRect().top +
      content.scrollTop -
      navList.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

document.querySelector(".btn").addEventListener("click", function () {
  content.scrollTo({
    top:
      sections[4].getBoundingClientRect().top +
      content.scrollTop -
      navList.getBoundingClientRect().top +
      15,
    behavior: "smooth",
  });
});
