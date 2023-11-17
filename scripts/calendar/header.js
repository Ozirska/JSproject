import { getItem } from "../common/storage.js";
import { generateWeekRange } from "../common/time.utils.js";
import openModal from "../common/modal.js";

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const headerWeekDay = () => {
  const dateOfWeek = [];
  generateWeekRange(getItem("displayedWeekStart")).map((weekDate) =>
    dateOfWeek.push([
      daysOfWeek[weekDate.getDay()],
      weekDate.getDate(),
      new Date(weekDate),
    ])
  );
  return dateOfWeek;
};

const headeLine = document.querySelector(".calendar__header");

export const renderHeader = () => {
  const weekLine = headerWeekDay()
    .map((day) => {
      let isToday =
        new Date(day[2]).getDate() === new Date().getDate() &&
        new Date(day[2]).getMonth() === new Date().getMonth() &&
        new Date(day[2]).getFullYear() === new Date().getFullYear();

      return `<div class="calendar__day-label day-label">
        ${`<span class="day-label__day-name ${isToday ? "today" : ""}">${
          day[0]
        }</span>`}
        ${`<span class="day-label__day-number ${isToday ? "today" : ""}">${
          day[1]
        }</span>`}</div>`;
    })

    .join("");

  headeLine.innerHTML = "";
  headeLine.innerHTML = weekLine;

  // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
  // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
  // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
};

const btnCreate = document.querySelector(".create-event-btn");
btnCreate.addEventListener("click", openModal);

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик
