import { createNumbersArray } from "../common/createNumbersArray.js";

const sideTimeScale = document.querySelector(".calendar__time-scale");

export const renderTimescale = () => {
  let arrOfTime = createNumbersArray(1, 12);

  let firstPart = arrOfTime.map(
    (time) => `<div class='time-slot'>
  <span class='time-slot_time'>${`${time} AM`}</span></div>`
  );

  let secondPart = arrOfTime.map(
    (time) => `<div class='time-slot'>
  <span class='time-slot_time'>${`${time} PM`}</span></div>`
  );

  let fullPart = firstPart.concat(secondPart).join("");
  console.log(fullPart);

  sideTimeScale.innerHTML = fullPart;

  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
};
