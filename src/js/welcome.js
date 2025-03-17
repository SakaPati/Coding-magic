const refs = {
  modalClose: document.querySelector('[data-action="modal-close"]'),
  modalInput: document.querySelector('.welcomeInput'),
  modal: document.querySelector('.modal'),
  userName: document.querySelector('.name'),
  modalUserName: document.querySelector('#name'),
};

let inputValue = 0;

refs.modalClose.addEventListener('click', onModalClose);
export function onModalClose() {
  if (inputValue < 2) {
    onErorWindow();
    const closeBtn = document.querySelector('[data-action="erorClose"]');
    closeBtn.addEventListener('click', onCloseEror);
  } else {
    document.body.classList.remove('show-modal');
  }
}

refs.modalInput.addEventListener('input', onUserName);
function onUserName(event) {
  const value = event.currentTarget.value;
  refs.modalUserName.textContent = ' ' + value;
  refs.userName.textContent = ' ' + value;
  inputValue = value.length;
  onCloseEror();
}

function onErorWindow() {
  const erorContainer = document.createElement('div');
  erorContainer.classList.add('erorContainer');
  erorContainer.style.position = 'relative';
  erorContainer.style.width = '90rem';
  erorContainer.style.margin = '0 auto';
  refs.modal.append(erorContainer);

  const erorDiv = document.createElement('div');
  erorDiv.style.position = 'absolute';
  erorDiv.style.top = '-450px';
  erorDiv.style.left = '9%';
  erorDiv.style.width = '200px';
  erorDiv.style.height = '50px';
  erorDiv.style.display = 'flex';
  erorDiv.style.justifyContent = 'center';
  erorDiv.style.alignItems = 'center';
  erorDiv.style.borderRadius = '50px';
  erorDiv.style.backgroundColor = 'red';
  erorContainer.append(erorDiv);

  const closeBtn = document.createElement('div');
  closeBtn.textContent = 'Напишите имя!';
  closeBtn.style.position = 'relative';
  closeBtn.style.display = 'flex';
  closeBtn.style.alignItems = 'center';
  closeBtn.style.backgroundColor = 'transparent';
  closeBtn.style.border = 'none';
  erorDiv.append(closeBtn);

  const erorImg = document.createElement('img');
  erorImg.src = '../img/close-btn.png';
  erorImg.style.marginLeft = '10px';
  erorImg.style.cursor = 'pointer';
  erorImg.setAttribute('data-action', 'erorClose');
  closeBtn.append(erorImg);

  console.log(refs.modal);
}

function onCloseEror() {
  const removeEror = document.querySelector('.erorContainer');
  removeEror.remove();
}
