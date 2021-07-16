let btn = document.querySelector("#btn");
let slidebar = document.querySelector(".slidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function() {
    slidebar.classList.toggle("active");
}

searchBtn.onclick = function() {
    slidebar.classList.toggle("active");
}