const hamburgerIcon = document.querySelector("#hamIcon");
const width = window.matchMedia("(max-width: 576px)");
const gotoTopBtn = document.querySelector("#goto-top");

// Show Hamburger mobile menu
const showHamMenu = () => {
  let menuList = document.querySelector("ul");
  menuList.classList.toggle("hide");
};

hamburgerIcon.addEventListener("click", showHamMenu);

// Show Goto Top Button
const showGotoToBtn = () => {
  if (
    document.body.scrollTop > 200 ||
    (document.documentElement.scrollTop && !width.matches)
  ) {
    gotoTopBtn.style.display = "flex";
  } else {
    gotoTopBtn.style.display = "none";
  }
};

window.addEventListener("scroll", showGotoToBtn);

// Scroll to top button
const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

gotoTopBtn.addEventListener("click", backToTop);
