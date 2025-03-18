const refs = {
  randomInput: document.querySelector('.number-input'),
  randomBtnSubmite: document.querySelector('.btn-number'),
  successText: document.querySelector('.success-text'),
};

let computerNumber = 0;
let userNumber = 0;

refs.randomBtnSubmite.addEventListener('click', onBtnSubmite);
export function onBtnSubmite() {
  onComputerNumber();
  if (userNumber === computerNumber) {
    refs.successText.style.color = '#039900';
    refs.successText.textContent = `Вітаю, ви вгадали число! (${computerNumber})`;
  } else {
    refs.successText.style.color = 'red';
    refs.successText.textContent = `Ви не вгадали число! (${computerNumber})`;
  }
}

refs.randomInput.addEventListener('input', onUserNumber);
function onUserNumber(event) {
  const value = Number(event.currentTarget.value);
  userNumber = value;
}

function onComputerNumber() {
  let randomNumber = Math.floor(Math.random() * 10);
  computerNumber = randomNumber;
  console.log(randomNumber);
}

onComputerNumber();
