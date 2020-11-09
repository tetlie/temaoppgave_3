// -------- PROGRESSBAR

const progressBar = document.querySelector("#progressbar")
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll

window.addEventListener("scroll", () => {
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.height = `${Math.ceil(progress)}%`
});

// -------- MENY

let burgerButton = document.querySelector("#burger");
let nav = document.querySelector("nav");

let isOpen = false;

function visSkjulMeny() {
    if(isOpen) {
        nav.style.left = "-100vw";
    } else {
        nav.style.left = "0";
    }
    isOpen = !isOpen; // toggling-effekt
}

burgerButton.addEventListener("click", visSkjulMeny);