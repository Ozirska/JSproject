export const createNumbersArray = (from, to) => {
  // ф-ция должна генерировать массив чисел от from до to
  let result = [];
  for (let numbe = from; numbe <= to; numbe++) {
    result.push(numbe);
  }
  return result;
};
