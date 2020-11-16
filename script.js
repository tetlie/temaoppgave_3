// -------- PROGRESSBAR

const progressBar = document.querySelector("#progressbar")
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll

window.addEventListener("scroll", () => {
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.height = `${Math.ceil(progress)}%`
});

// -------- MENY

let menuButton = document.querySelector("#menu--icon");
let nav = document.querySelector("nav");

let menuIsOpen = false;

function visSkjulMeny() {
    if(menuIsOpen) {
        nav.style.left = "-100vw";
        menuButton.style.backgroundColor = "none"

    } else {
        nav.style.left = "0";
        menuButton.style.backgroundColor = "black"
    }
    menuIsOpen = !menuIsOpen; // toggling-effekt
}

menuButton.addEventListener("click", visSkjulMeny);

// -------- MENY

let fnBtn = document.querySelectorAll(".footnote--inline");
let fnDiv = document.querySelector("#footnote--list");
let fnIsOpen = false;

function visSkjulFootnote() {
    if(fnIsOpen) {
        fnDiv.style.bottom = "-100vh";
    } else {
        fnDiv.style.bottom = "0";
    }
    fnIsOpen = !fnIsOpen; // toggling-effekt
}

fnBtn.forEach( el => {
    addEventListener("click", visSkjulFootnote);
});