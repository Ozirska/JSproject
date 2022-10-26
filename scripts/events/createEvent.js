import { getItem, setItem } from "../common/storage.js";
import { renderEvents } from "./events.js";
import { getDateTime } from "../common/time.utils.js";
import closeModal from "../common/modal.js";

const eventFormElem = document.querySelector(".event-form");
const closeEventFormBtn = document.querySelector(".create-event__close-btn");

function clearEventForm() {
  const formField = document.querySelectorAll(".event-form__field");
  [...formField].map((fild) => (fild.value = ""));
  // ф-ция должна очистить поля формы от значений
}

function onCloseEventForm() {
  clearEventForm();
  const modalElem = document.querySelector(".modal");
  modalElem.classList.add("hidden");
  // здесь нужно закрыть модальное окно и очистить форму
}

closeEventFormBtn.addEventListener("click", onCloseEventForm);

function onCreateEvent(event) {
  event.preventDefault();
  const formEvent = [...new FormData(eventFormElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  let result = getItem("events");
  const eventObject = {
    id: Math.random().toString(36).substr(2, 9),
    title: formEvent.title,
    description: formEvent.description,
    start: getDateTime(formEvent.date, formEvent.startTime),
    end: getDateTime(formEvent.date, formEvent.endTime),
  };
  result.push(eventObject);
  setItem("events", result);
  clearEventForm();
  closeModal();
  renderEvents();
  // задача этой ф-ции только добавить новое событие в массив событий, что хранится в storage
  // создавать или менять DOM элементы здесь не нужно. Этим займутся другие ф-ции
  // при подтверждении формы нужно считать данные с формы
  // с формы вы получите поля date, startTime, endTime, title, description
  // на основе полей date, startTime, endTime нужно посчитать дату начала и окончания события
  // date, startTime, endTime - строки. Вам нужно с помощью getDateTime из утилит посчитать start и end объекта события
  // полученное событие добавляем в массив событий, что хранится в storage
  // закрываем форму
  // и запускаем перерисовку событий с помощью renderEvents
}

eventFormElem.addEventListener("submit", onCreateEvent);

export function initEventForm() {
  // подпишитесь на сабмит формы и на закрытие формы
}
