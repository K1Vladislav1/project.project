const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slides[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function changeStyle() {
    var theme = document.getElementById("theme");
    if (theme.getAttribute("href") === "styles.css") {
        theme.href = "dark-styles.css";
        localStorage.setItem("theme", "dark");
    } else {
        theme.href = "styles.css";
        localStorage.setItem("theme", "light");
    }
}

// Функция для изменения стиля "index.css"
function changeIndexStyle() {
    var theme1 = document.getElementById("theme1");
    if (theme1.getAttribute("href") === "index.css") {
        theme1.href = "dark-index.css";
        localStorage.setItem("theme1", "dark");
    } else {
        theme1.href = "index.css";
        localStorage.setItem("theme1", "light");
    }
}

// Функция для изменения стиля "contacts.css"
function changeContactsStyle() {
    var theme2 = document.getElementById("theme2");
    if (theme2) {
        if (theme2.getAttribute("href") === "contacts.css") {
            theme2.href = "dark-contacts.css";
            localStorage.setItem("theme2", "dark");
        } else {
            theme2.href = "contacts.css";
            localStorage.setItem("theme2", "light");
        }
    }
}

// Функция, вызывающая все функции изменения стилей
function changeStyles() {
    changeStyle();
    changeIndexStyle();
    changeContactsStyle();
}

// Применяем функцию changeStyles при клике на кнопку с id "styleMod"
document.getElementById("styleMod").addEventListener("click", changeStyles);

// Применяем стили из localStorage при загрузке страницы
var storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    var theme = document.getElementById("theme");
    theme.href = storedTheme === "dark" ? "dark-styles.css" : "styles.css";
}

var storedTheme1 = localStorage.getItem("theme1");
if (storedTheme1) {
    var theme1 = document.getElementById("theme1");
    theme1.href = storedTheme1 === "dark" ? "dark-index.css" : "index.css";
}

var storedTheme2 = localStorage.getItem("theme2");
if (storedTheme2) {
    var theme2 = document.getElementById("theme2");
    theme2.href = storedTheme2 === "dark" ? "dark-contacts.css" : "contacts.css";
}


controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);