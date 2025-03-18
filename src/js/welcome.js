// Загрузка модалки после загрузки страницы
// window.addEventListener('load', onOpenModal);

// переменные
const refs = {
  modalClose: document.querySelector('[data-action="modal-close"]'),
  modalInput: document.querySelector('.welcomeInput'),
  modal: document.querySelector('.modal'),
  userName: document.querySelector('span.result-user'),
  modalUserName: document.querySelector('#name'),
  saveBtn: document.querySelector('.welcomeBtn'),
  backdrop: document.querySelector('.js-backdrop'),
};

let userName = '';
let inputValue = 0;

// открытие модалки
function onOpenModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
}

// закрытие модалки
refs.modalClose.addEventListener('click', onModalClose);
export function onModalClose() {
  if (inputValue < 2) {
    onErorWindow();
    const closeBtn = document.querySelector('[data-action="erorClose"]');
    closeBtn.addEventListener('click', onCloseEror);
  } else {
    onSaveUserName();
    document.body.classList.remove('show-modal');
    window.removeEventListener('keydown', onEscCloseModal);
  }
}

window.addEventListener('keydown', onEscCloseModal);
function onEscCloseModal(event) {
  if (event.code === 'Escape') {
    onModalClose();
  }
}

refs.backdrop.addEventListener('click', onBackdropCloseModal);
function onBackdropCloseModal(e) {
  if (e.currentTarget === e.target) {
    onModalClose();
  }
}


// Вывод ошибки
function onErorWindow() {
  const erorContainer = document.createElement('div');
  erorContainer.classList.add('erorContainer');
  refs.modal.append(erorContainer);

  const erorDiv = document.createElement('div');
  erorDiv.classList.add('erorDiv');
  erorContainer.append(erorDiv);

  const closeBtn = document.createElement('div');
  closeBtn.classList.add('closeBtn');
  closeBtn.textContent = 'Напишите имя!';
  erorDiv.append(closeBtn);

  const erorImg = document.createElement('img');
  erorImg.src = '../img/close-btn.png';
  erorImg.style.marginLeft = '10px';
  erorImg.style.cursor = 'pointer';
  erorImg.setAttribute('data-action', 'erorClose');
  closeBtn.append(erorImg);

  console.log(refs.modal);
}

// закрытие ошибки (багнутое)
function onCloseEror() {
  const removeEror = document.querySelector('.erorContainer');
  removeEror.remove();
}

// Сохранение имени
refs.modalInput.addEventListener('input', onUserName);
function onUserName(event) {
  const value = event.currentTarget.value;
  userName = value;
  refs.modalUserName.textContent = ' ' + value;
  inputValue = value.length;
  if (inputValue > 2) {
    onCloseEror();
  }
}

refs.saveBtn.addEventListener('click', onSaveUserName);
function onSaveUserName() {
  if (inputValue < 2) {
    onErorWindow();
  } else {
    refs.userName.textContent = userName;
    alert("Данные сохранены")
    document.body.classList.remove('show-modal');
  }
}