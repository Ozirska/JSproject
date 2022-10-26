import { getItem, setItem } from "../common/storage.js";
import shmoment from "../common/shmoment.js";
import { openPopup, closePopup } from "../common/popup.js";

const weekElem = document.querySelector(".calendar__week");
const deleteEventBtn = document.querySelector(".delete-event-btn");

function handleEventClick(event) {
  const isEvent = event.target.classList.contains("event__content");
  const isEventContent = event.target.classList.contains("event__content-span");
  if (!isEvent && !isEventContent) {
    return;
  }
  // console.log(isEventContent);
  // when click on span don't work

  let eventId;
  eventId = event.target.dataset.eventId;
  console.log(eventId);
  setItem("eventIdToDelete", eventId);
  console.log(getItem("eventIdToDelete"));
  openPopup(event.pageX, event.pageY);
  // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
  // установите eventIdToDelete с id события в storage
}

function removeEventsFromCalendar() {
  let events = getItem("events");
  events.length = 0;

  setItem("events", events);
  // ф-ция для удаления всех событий с календаря
}

const createEventElement = (event) => {
  let options = new Intl.DateTimeFormat("default", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let minutsInStart = event.start.getHours() * 60 + event.start.getMinutes();
  let minutsInEnd = event.end.getHours() * 60 + event.end.getMinutes();
  let diferenceInMinuts = minutsInEnd - minutsInStart;

  let createEventElem = document.createElement("div");

  let startTime = options.format(event.start);
  let endTime = options.format(event.end);
  let time = `${startTime} - ${endTime}`;

  createEventElem.dataset.eventId = event.id;
  createEventElem.classList.add("event__content");
  createEventElem.style.height = `${diferenceInMinuts}px`;
  createEventElem.style.top = `${new Date(event.start).getMinutes()}px`;

  let spanTitle = document.createElement("span");
  spanTitle.textContent = event.title;
  spanTitle.classList.add("event__content-span");
  let spanTime = document.createElement("span");
  spanTime.textContent = time;
  spanTime.classList.add("event__content-span");

  createEventElem.append(spanTitle);
  createEventElem.append(spanTime);
  return createEventElem;

  // ф-ция создает DOM элемент события
  // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
  // нужно добавить id события в дата атрибут
  // здесь для создания DOM элемента события используйте document.createElement
};

export const renderEvents = () => {
  const startDay = getItem("displayedWeekStart");
  const eventsArr = getItem("events");
  let options = new Intl.DateTimeFormat("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let thisWeekEvents = eventsArr.filter((obj) => {
    for (let day = 0; day <= 6; day++) {
      if (
        options.format(obj.start) ===
        options.format(shmoment(startDay).add("days", day).result())
      ) {
        return obj;
      }
    }
  });

  let calendarTimeSlot = document.querySelectorAll(".calendar__day");

  thisWeekEvents.map((eventFromArr) => {
    [...calendarTimeSlot].map((el) => {
      if (Number(el.dataset.day) === eventFromArr.start.getDate()) {
        let min = String(eventFromArr.start.getHours());

        let g = el.querySelectorAll("div");

        [...g].map((elem) => {
          // elem.removeChild(elem);
          // elem.append(domElem);
          console.log(elem);

          if (elem.dataset.min === min) {
            let domElem = createEventElement(eventFromArr);
            elem.append(domElem);
          }
        });
        // let g = el.querySelector(`div[data-min= "'${min}'"]`);
      }
    });
  });

  // достаем из storage все события и дату понедельника отображаемой недели
  // фильтруем события, оставляем только те, что входят в текущую неделю
  // создаем для них DOM элементы с помощью createEventElement
  // для каждого события находим на странице временную ячейку (.calendar__time-slot)
  // и вставляем туда событие
  // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
  // не забудьте удалить с календаря старые события перед добавлением новых
};

function onDeleteEvent() {
  let ArrEvents = getItem("events");
  let eventIdToDelete = getItem("eventIdToDelete");

  let newArrEvents = ArrEvents.filter((el) => {
    return String(el.id) !== String(eventIdToDelete);
  });
  console.log(newArrEvents);

  setItem("events", newArrEvents);
  closePopup();
  console.log(getItem("events"));
  renderEvents();

  console.log("done");
  // do not check!!!!!

  // достаем из storage массив событий и eventIdToDelete
  // удаляем из массива нужное событие и записываем в storage новый массив
  // закрыть попап
  // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)
}

deleteEventBtn.addEventListener("click", onDeleteEvent);

weekElem.addEventListener("click", handleEventClick);
