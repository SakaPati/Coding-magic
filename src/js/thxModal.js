const refs = {
  emailInput: document.querySelector('.subscribe input'),
  subscribeBtn: document.querySelector('.subscribe-btn'),
  closeModal: document.querySelector('[data-action="closeThxModal"]'),
};

let inputValue = 0;

refs.subscribeBtn.addEventListener('click', onOpenThxModal);
export function onOpenThxModal() {
  if (inputValue < 9) {
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

refs.emailInput.addEventListener('input', onSubmiteEmail);
function onSubmiteEmail(e) {
  inputValue = e.currentTarget.value.length;
}
