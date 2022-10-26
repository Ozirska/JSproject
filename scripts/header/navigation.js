import { getItem, setItem } from "../common/storage.js";
import { renderWeek } from "../calendar/calendar.js";
import { renderHeader } from "../calendar/header.js";
import { getStartOfWeek, getDisplayedMonth } from "../common/time.utils.js";

const navElem = document.querySelector(".navigation");
const displayedMonthElem = document.querySelector(
  ".navigation__displayed-month"
);

function renderCurrentMonth() {
  const getWeekMounth = getDisplayedMonth(getItem("displayedWeekStart"));
  displayedMonthElem.textContent = getWeekMounth;
  // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
  // вставить в .navigation__displayed-month
}

const onChangeWeek = (event) => {
  if (event.target.dataset.direction === "today") {
    setItem("displayedWeekStart", getStartOfWeek(new Date()));
    renderCurrentMonth();
    renderHeader();
    renderWeek();
    return;
  }
  const dataAtribut = event.target.closest(".navigation__nav-icon").dataset
    .direction;

  if (dataAtribut === "prev") {
    const getNewDate = new Date(
      getItem("displayedWeekStart").setDate(
        getItem("displayedWeekStart").getDate() - 7
      )
    );
    setItem("displayedWeekStart", getNewDate);
  }
  if (dataAtribut === "next") {
    const getNewDate = new Date(
      getItem("displayedWeekStart").setDate(
        getItem("displayedWeekStart").getDate() + 7
      )
    );
    setItem("displayedWeekStart", getNewDate);
  }

  renderCurrentMonth();
  renderHeader();
  renderWeek();
  // при переключении недели обновите displayedWeekStart в storage
  // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek,   )
};

export const initNavigation = () => {
  renderCurrentMonth();
  navElem.addEventListener("click", onChangeWeek);
};
