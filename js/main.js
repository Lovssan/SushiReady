//dropdown меню для узких экранов
const burgerMenu = document.getElementById("dropmenu");
const swipeMenu = document.querySelector(".swipe-menu");
const darkScreen = document.querySelector(".overlay");
const closerSwipeMenu = document.querySelector("#closer");

burgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  swipeMenu.classList.add("m");
  darkScreen.classList.add("activmenu");
});
closerSwipeMenu.addEventListener("click", () => {
  swipeMenu.classList.remove("m");
  darkScreen.classList.remove("activmenu");
});
darkScreen.addEventListener("click", () => {
  swipeMenu.classList.remove("m");
  darkScreen.classList.remove("activmenu");
});

//Slider
let sliderImages = document.querySelectorAll(".slider-img");
let sliderLine = document.querySelector(".swipe-images");
let btnPrev = document.querySelector(".prevarr");
let btnNext = document.querySelector(".nextarr");
let sliderCount = 0,
  sliderWidth = null;

// Кнопки листания слайдов вперед и назад
btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
let interval;
interval = setInterval(nextSlide, 5000);

// Перелистывает слайд вперед
function nextSlide() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;

  rollSlider();
}

// Перелистывает слайд назад
function prevSlide() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);

  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;

  rollSlider();
}

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderWidth = document.querySelector(".main").offsetWidth;
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

//скролл меню до карточек

const scrollMenu = document.querySelector("#menu");
const mobilScrollMenu = document.querySelector(".menu-m");
const Menu = document.querySelector("#nav-main");

scrollMenu.addEventListener("click", function () {
  Menu.scrollIntoView({ behavior: "smooth" });
});
mobilScrollMenu.addEventListener("click", function () {
  Menu.scrollIntoView({ behavior: "smooth" });
});

//переключение между едами

//

const menu = document.getElementsByClassName("nava");
let currentMenu = menu[0];
const activeConteinerMenu = document.querySelectorAll(".container-cards");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    currentMenu.classList.remove("nava-current");
    this.classList.add("nava-current");
    currentMenu = this;

    activeConteinerMenu.forEach((el) => {
      el.classList.remove("active-conteiner");
    });
    activeConteinerMenu[i].classList.add("active-conteiner");
  });
}

// выбор диаметра пиццы
