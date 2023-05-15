/*-----------------SHOW MENU--------------*/
const $navMenu = document.querySelector(".nav-menu"),
  $navClose = document.querySelector(".nav-close"),
  $navToggle = document.querySelector(".nav-toggle");

if ($navToggle) {
  $navToggle.addEventListener("click", () => {
    $navMenu.classList.add("show-menu");
  });
}

if ($navClose) {
  $navClose.addEventListener("click", () => {
    $navMenu.classList.remove("show-menu");
  });
}

/*-----------------REMOVE  MENU MOBILE--------------*/

const $navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  $navMenu.classList.remove("show-menu");
};

$navLink.forEach((el) => el.addEventListener("click", linkAction));

/*-----------------CHANGE BACKGROUND HEADER---------------*/

const scrollHeader = () => {
  const $header = document.getElementById("header");
  window.scrollY >= 50
    ? $header.classList.add("bg-header")
    : $header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*-----------------SCROLL SECTIONS ACTIVE LINK---------------*/

const $sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  $sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*-----------------SCROLL UP---------------*/

const scrollUp = () => {
  const $scrollUP = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? $scrollUP.classList.add("show-scroll")
    : $scrollUP.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*-----------------SCROLL UP---------------*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home-data, .footer-content, .footer-logo, .footer-description`);
sr.reveal(`.home-tree-1`, { origin: "left", delay: 800 });
sr.reveal(`.home-tree-2`, { origin: "right", delay: 800 });
sr.reveal(`.home-img`, { delay: 800 });
sr.reveal(`.category-card, .items-card`, { interval: 100 });
sr.reveal(`.about-img, .about-data, .footer-img-2`, { origin: "left" });
sr.reveal(`.party-img, .party-data, .footer-img-1`, { origin: "right" });
