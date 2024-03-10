import React from "react";

import '../../styles/modal.css';

function Modal({isModalOpen, cardAdd, cardDelete, modalClose}) {
  return (
    isModalOpen && (
      <div className="modal">
        <h2 className="modal__headline">Список карточек</h2>
        <button onClick={cardAdd}>Добавить карточку</button>
        <button onClick={cardDelete}>Удалить карточку</button>
        <button onClick={modalClose}>Закрыть окно</button>
      </div>
    )
  );
}

export default Modal;