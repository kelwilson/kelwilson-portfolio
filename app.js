const menu = document.querySelector(".menu");
const desktopNav = document.querySelector(".desktop-nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  desktopNav.classList.toggle("active");
});

document.querySelectorAll("menu-bar").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("active");
    desktopNav.classList.remove("active");
  })
);

