const modalElem = document.querySelector(".modal");
const modalContentElem = document.querySelector(".modal__content");
const closeModalElem = document.querySelector(".create-event__close-btn");

const openModal = () => {
  modalElem.classList.toggle("hidden");
};
const closeModal = () => {
  modalElem.classList.add("hidden");
};
closeModalElem.addEventListener("click", closeModal);
// опишите ф-ции openModal и closeModal
// модальное окно работает похожим на попап образом
// отличие в том, что попап отображается в месте клика, а модальное окно - по центру экрана
export default openModal;
