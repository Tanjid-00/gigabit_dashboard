const navBtn = document.querySelector("#navBtn");
const menuItems = document.querySelector(".navItems");
const weatherDiv = document.querySelector("#weather");
const leftDiv = document.querySelector(".leftDiv");

navBtn.addEventListener("click", () => {
  menuItems.classList.toggle("expand");
  leftDiv.classList.toggle("expandEffect");
});
