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
    {
      id: 0.7927501486457333, // id понадобится для работы с событиями
      title: "Title",
      description: "Some description",
      start: new Date("2022-10-27T01:10:00.000Z"),
      end: new Date("2022-10-27T04:30:00.000Z"),
    },
    {
      id: 0.7528302756357333, // id понадобится для работы с событиями
      title: "french",
      description: "Some description",
      start: new Date("2022-10-18T01:10:00.000Z"),
      end: new Date("2022-10-18T04:30:00.000Z"),
    },
    {
      id: 0.7592046556357339, // id понадобится для работы с событиями
      title: "clean",
      description: "Some description",
      start: new Date("2022-10-28T05:10:00.000Z"),
      end: new Date("2022-10-28T08:30:00.000Z"),
    },
  ],
  // это все данные, которые вам нужно хранить для работы приложения
};

export const setItem = (key, value) => {
  // ф-ция должна устанавливать значения в объект storage ++
  return (storage[key] = value);
};

export const getItem = (key) => {
  return storage[key];
  // ф-ция должна возвращать по ключу значения из объекта storage ++
};

// пример объекта события

const eventExample = {
  id: 0.7520027086457333, // id понадобится для работы с событиями
  title: "Title",
  description: "Some description",
  start: new Date("2020-03-17T01:10:00.000Z"),
  end: new Date("2020-03-17T04:30:00.000Z"),
};
console.log(storage);
