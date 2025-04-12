const refs = {
  emailInput: document.querySelector('.subscribe input'),
  subscribeBtn: document.querySelector('.subscribe-btn'),
  closeModal: document.querySelector('[data-action="closeThxModal"]'),
};

refs.subscribeBtn.addEventListener('click', onOpenThxModal);
export function onOpenThxModal(event) {
  console.log(inputValue);
  event.preventDefault();
  const inputValue = refs.emailInput.value;
  if (!inputValue.includes('@')) {
    alert('Напишите почту');
  } else {
    document.body.classList.add('thx-modal');
  }
}

refs.closeModal.addEventListener('click', onCloseThxModal);
function onCloseThxModal() {
    document.body.classList.remove('thx-modal');
    refs.emailInput.value = ""
}