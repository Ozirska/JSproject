import { getItem } from "../common/storage.js";
import { generateWeekRange } from "../common/time.utils.js";
import { renderEvents } from "../events/events.js";
import { createNumbersArray } from "../common/createNumbersArray.js";

const generateDay = () => {
  const hoursInDay = createNumbersArray(0, 24);
  const minInHour = createNumbersArray(1, 6);

  const blockMinInHour = minInHour
    .map((min) => `<span class='calendar__time-slot-min'></span>`)
    .join("");

  return hoursInDay
    .map(
      (hour) =>
        `<div class='calendar__time-slot'  data-min=${hour}>${blockMinInHour}</div>`
    )
    .join("");

  // функция должна сгенерировать и вернуть разметку дня в виде строки
  // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
};

export const renderWeek = () => {
  const weekSchedule = document.querySelector(".calendar__week");
  const generetedDay = generateDay();

  const generetedWeek = generateWeekRange(getItem("displayedWeekStart"))
    .map(
      (day) =>
        `<div class='calendar__day' data-day=${new Date(
          day
        ).getDate()}>${generetedDay}</div>`
    )
    .join("");
  weekSchedule.innerHTML = "";
  weekSchedule.innerHTML = generetedWeek;

  renderEvents();
  // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
  // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
  // массив дней, которые нужно отобразить, считаем ф-цией generateWeekRange на основе displayedWeekStart из storage
  // каждый день должен содержать в дата атрибуте порядковый номер дня в месяце
  // после того, как отрисовали всю сетку для отображаемой недели, нужно отобразить события этой недели с помощью renderEvents
};
