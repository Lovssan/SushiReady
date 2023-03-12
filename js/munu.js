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
//
const numbers = document.querySelectorAll(".numberss");

if (numbers[0]) {
  function numbersProductInCart(array) {
    numbers[0].innerText = array.length;
    numbers[1].innerText = array.length;
  }
  function loadCartFromToLocalStorage() {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      return data;
    }
  }
  numbersProductInCart(loadCartFromToLocalStorage());
}
