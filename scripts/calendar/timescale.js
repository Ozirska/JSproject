import { createNumbersArray } from "../common/createNumbersArray.js";

const sideTimeScale = document.querySelector(".calendar__time-scale");

export const renderTimescale = () => {
  let arrOfTime = createNumbersArray(1, 24);

  let timeScale = arrOfTime
    .map(
      (time) => `<div class='time-slot'>
  <span class='time-slot_time'>${time} </span></div>`
    )
    .join(" ");

  sideTimeScale.innerHTML = timeScale;

  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
};
