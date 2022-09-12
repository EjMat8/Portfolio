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
const githubIcon = document.querySelector(".github");
const linkedinIcon = document.querySelector(".linkedin");
const resumeIcon = document.querySelector(".resume");

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
githubIcon.src = github;
linkedinIcon.src = linkedin;
resumeIcon.src = file;
skills.generateLogo();

sections[1].style.opacity = 0;
sections[2].style.opacity = 0;
// navItem1.style.top = "32.5rem";
navItem2.style.top = "40vh";
navItem3.style.top = "40vh";
navItem4.style.top = "40vh";

content.addEventListener("scroll", (e) => {
  sections[0].style.opacity = 1 - content.scrollTop / 100;
  console.log(content.scrollTop);
  // FADES
  if (content.scrollTop >= 325) sections[1].style.opacity = 1;
  else sections[1].style.opacity = 0;

  if (content.scrollTop >= 1910)
    sections[1].style.opacity = 1 - (content.scrollTop - 1910) / 100;

  if (content.scrollTop >= 2400) sections[2].style.opacity = 1;
  else sections[2].style.opacity = 0;

  //Navbar scrolls
  if (content.scrollTop < 710) {
    if (content.scrollTop === 0) navItem2.style.top = "40vh";
    else navItem2.style.top = 40 - content.scrollTop / 17.75 + "vh";
  } else {
    navItem2.style.top = "0";
  }
  if (content.scrollTop >= 1900 && content.scrollTop <= 2643) {
    navItem3.style.top = 40 - (content.scrollTop - 1900) / 18.575 + "vh";
  } else if (content.scrollTop < 1900) {
    navItem3.style.top = "40vh";
  } else if (content.scrollTop > 2643) {
    navItem3.style.top = "0";
  }

  //Navbar check
  if (content.scrollTop >= 0 && content.scrollTop <= 575) {
    document.querySelector(".radio__inp--1").checked = true;
  }
  if (content.scrollTop > 575 && content.scrollTop <= 2400) {
    document.querySelector(".radio__inp--2").checked = true;
  }
  if (content.scrollTop > 2400) {
    document.querySelector(".radio__inp--3").checked = true;
  }
});

nav.addEventListener("change", function (e) {
  const num = +e.target.dataset.section;
  const position = num ? content.scrollHeight - num : 0;
  console.log(content.scrollHeight);
  content.scrollTo({
    top: position,
    behavior: "smooth",
  });
});
