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

skills.generateLogo();
const image1Container = document.querySelector(".projects__img--1");
const image2Container = document.querySelector(".projects__img--2");
const image3Container = document.querySelector(".projects__img--3");
const image4Container = document.querySelector(".projects__img--4");
const sections = document.querySelectorAll("section");
const content = document.querySelector(".content");

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

// sections[1].style.opacity = 0;
// sections[2].style.opacity = 0;
// navItem1.style.top = "32.5rem";
navItem2.style.top = "60%";
navItem3.style.top = "70%";
navItem4.style.top = "80%";
// addEventListener("resize", (e) => {
//   navItem2.style.top = 3.95 * (innerHeight / 80) + "vh";
//   navItem3.style.top = 3.95 * (innerHeight / 80) + "vh";
//   navItem4.style.top = 3.95 * (innerHeight / 80) + "vh";
// });

content.addEventListener("scroll", (e) => {
  const scrollMeasure = content.scrollHeight - content.scrollTop;
  const scrollTop = content.scrollHeight - scrollMeasure;
  const { height: sec1Height } = sections[0].getBoundingClientRect();
  console.log("scrollMeasure", scrollMeasure, "scroll top", content.scrollTop);

  // FADES
  /*
   sections[0].style.opacity = 1 - scrollTop / 100;
  if (scrollTop >= 325) sections[1].style.opacity = 1;
  else sections[1].style.opacity = 0;

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

  //Navbar scrolls
  // if (content.scrollTop < sec1Height) {
  //   if (content.scrollHeight === scrollMeasure) navItem2.style.top = "40vh";
  //   else
  //     navItem2.style.top =
  //       40 - scrollTop / ((content.scrollHeight - 4960) / 40) + "vh";
  // } else {
  //   navItem2.style.top = "0";
  // }

  // if (scrollMeasure <= 3750 && scrollMeasure >= 3050) {
  //   navItem3.style.top = 40 - (3750 - scrollMeasure) / 17.5 + "vh";
  // } else if (scrollMeasure > 3750) {
  //   navItem3.style.top = "40vh";
  // } else if (scrollMeasure < 3050) {
  //   navItem3.style.top = "0";
  // }

  // if (scrollMeasure <= 2635 && scrollMeasure >= 1915)
  //   navItem4.style.top = 40 - (2635 - scrollMeasure) / 18 + "vh";
  // else if (scrollMeasure > 2635) navItem4.style.top = "40vh";
  // else if (scrollMeasure < 1915) navItem4.style.top = "0";

  //Navbar check
  if (scrollMeasure <= content.scrollHeight && scrollMeasure >= 5085) {
    document.querySelector(".radio__inp--1").checked = true;
  } else if (scrollMeasure < 5085 && scrollMeasure >= 3150) {
    document.querySelector(".radio__inp--2").checked = true;
  } else if (scrollMeasure < 3150 && scrollMeasure >= 1980) {
    document.querySelector(".radio__inp--3").checked = true;
  } else if (scrollMeasure < 1980 && scrollMeasure >= 990) {
    document.querySelector(".radio__inp--4").checked = true;
  } else if (scrollMeasure < 990)
    document.querySelector(".radio__inp--4").checked = false;
});

nav.addEventListener("change", function (e) {
  const num = +e.target.dataset.section;
  const position = num ? content.scrollHeight - num : 0;
  content.scrollTo({
    top: position,
    behavior: "smooth",
  });
});
