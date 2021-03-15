//  1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). 
//  При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. 
//  Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 

let span = document.getElementById("spanMode");
let input = document.getElementById("inputMode");
input.style.display = "none";

document.addEventListener("keydown", (e) => {
    if(e.altKey && e.code == "KeyA") { 
      e.preventDefault();
      span.style.display = "none";
      input.style.display = "inline-block";
      input.focus();
    }
    if(e.shiftKey && e.code == "KeyS") {
      e.preventDefault();
      span.style.display = "inline-block";
      input.style.display = "none";
      span.innerText = input.value;
      if (span.innerHTML.length === 0) {
        span.innerHTML = "Очікую на ввід даних! Натисність Alt + A."
      }
    }
});

//  2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px, виводити лог ми векористовуємо мобільну версію, 
//  при більшому розмірі сторінки - що ми використовуємо десктоп версію.

let onResize = window.addEventListener("resize", e => {
    if(e.target.innerWidth <= 600){
        console.log("Ми векористовуємо мобільну версію.");
    }else if(e.target.innerWidth > 600){
        console.log("Ми використовуємо десктоп версію.");
    }
});

//  3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.

let inputT3 = document.querySelector(".inputTask3");
let spanT3 = document.querySelector(".spanTask3");

inputT3.addEventListener("input", (e) => {
    spanT3.innerHTML = inputT3.value;
  });

//  4. При натисканні на кнопку альт + о виводити модальне вікно на екран, альт + с - закривати.
let modal = document.querySelector(".modalWindow");
let tip = document.querySelector(".tip");
 
document.addEventListener("keydown", (e) => {
    if (e.altKey && e.code == "KeyO") {
      modal.classList.add("active");
      tip.classList.add("hideTip");
    }
    if (e.altKey && e.code == "KeyC") {
      modal.classList.remove("active");
      tip.classList.remove("hideTip");
    }
});

//  5. Створити модальне відкно аналог Алерта але з гарним дизайном. 
//  По кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити.

let openModal = document.querySelector(".openBtn");
let closeModal = document.querySelector(".closeBtn");

openModal.addEventListener("click", () => {
  document.body.classList.add("showModalCentered");
  document.body.classList.add("showCloseBtn");
});

closeModal.addEventListener("click", () => {
  document.body.classList.remove("showModalCentered");
});
