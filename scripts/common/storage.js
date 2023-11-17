let storage = {
  // используется для удаления события
  eventIdToDelete: null,
  // хранит дату понедельника той отображаемой недели
  displayedWeekStart: null,
  // хранит массив всех событий
  events: [
    {
      id: 0.7520027086457333, // id понадобится для работы с событиями
      title: "You did it",
      description: "Some description",
      start: new Date("2022-10-26T01:10:00.000Z"),
      end: new Date("2022-10-26T04:30:00.000Z"),
    },
  ],
  // это все данные, которые нужно хранить для работы приложения
};

export const setItem = (key, value) => {
  // ф-ция должна устанавливать значения в объект storage ++
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  let newValue;
  try {
    newValue = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    newValue = localStorage.key;
  }
  return newValue;
  // ф-ция должна возвращать по ключу значения из объекта storage ++
};
console.log(getItem("events"));
// пример объекта события

const eventExample = {
  id: 0.7520027086457333, // id понадобится для работы с событиями
  title: "Title",
  description: "Some description",
  start: new Date("2020-03-17T01:10:00.000Z"),
  end: new Date("2020-03-17T04:30:00.000Z"),
};
