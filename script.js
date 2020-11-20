// -------- PROGRESS-BAR

const progressBar = document.querySelector("#progressbar")
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = `${progress}%`
});

// -------- MENU

let menuButton = document.querySelector("#menu--icon");
let inMenuLink = document.querySelectorAll(".inmenu--link");
let nav = document.querySelector("nav");

let menuIsOpen = false;

function visSkjulMeny() {
    if (menuIsOpen) {
        nav.style.top = "-150vh";
        menuButton.innerHTML = "index"
        menuButton.style.color = "black"

    } else {
        nav.style.top = "0";
        menuButton.innerHTML = "x"
        menuButton.style.color = "black"

    }
    menuIsOpen = !menuIsOpen;
}

menuButton.addEventListener("click", visSkjulMeny);
inMenuLink.forEach(link => link.addEventListener('click', visSkjulMeny));

// -------- FOOTNOTES

let fnBtn = document.querySelectorAll(".footnote--inline");
let fnDiv = document.querySelector("#footnote--list");
let footnotes = document.querySelectorAll(".footnote");

let fnIsOpen = false;

function visSkjulFootnote(e) {

    if (fnIsOpen) {
        fnDiv.style.bottom = "-100vh";
    } else {
        fnDiv.style.bottom = "2rem";
    }

    fnIsOpen = !fnIsOpen;

    footnotes.forEach(footnote => {
        if (footnote.id == e.target.innerHTML) {
            footnote.style.display = "contents";
        } else {
            footnote.style.display = "none";
        }
    });
}

fnDiv.addEventListener('click', visSkjulFootnote);
fnBtn.forEach(link => link.addEventListener('click', visSkjulFootnote));

// -------- INFOBOKS1

let ibBtn1 = document.querySelector("#infobox--1");
let ibDiv1 = document.querySelector("#infobox--1--info");

let ib1IsOpen = false;

function visSkjulInfoBox1(e) {
    if (ib1IsOpen) {
        ibDiv1.style.display = "contents";
    } else {
        ibDiv1.style.display = "none";
    }
    ib1IsOpen = !ib1IsOpen;
}

ibBtn1.addEventListener('click', visSkjulInfoBox1);


// -------- INFOBOKS2

let ibBtn2 = document.querySelector("#infobox--2");
let ibDiv2 = document.querySelector("#infobox--2--info");

let ib2IsOpen = false;

function visSkjulInfoBox2(e) {
    if (ib2IsOpen) {
        ibDiv2.style.display = "contents";
    } else {
        ibDiv2.style.display = "none";
    }
    ib2IsOpen = !ib2IsOpen;
}

ibBtn2.addEventListener('click', visSkjulInfoBox2);

// -------- INFOBOKS3

let ibBtn3 = document.querySelector("#infobox--3");
let ibDiv3 = document.querySelector("#infobox--3--info");

let ib3IsOpen = false;

function visSkjulInfoBox3(e) {
    if (ib3IsOpen) {
        ibDiv3.style.display = "contents";
    } else {
        ibDiv3.style.display = "none";
    }
    ib3IsOpen = !ib3IsOpen;
}

ibBtn3.addEventListener('click', visSkjulInfoBox3);