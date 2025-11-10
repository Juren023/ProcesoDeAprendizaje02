let btn = document.getElementById("toggleBtn");
let menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("activeToggle");
});