export function handleNavbarAndBtnUp() {
  let navbar = document.getElementById("navbar");
  let up = document.getElementById("up");
  if (window.pageYOffset >= 500) {
    navbar.classList.add("navbar-change");
    up.classList.add("btn-up-visible");
  } else {
    navbar.classList.remove("navbar-change");
    up.classList.remove("btn-up-visible");
  }
}
