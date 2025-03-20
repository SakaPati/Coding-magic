const refs = {
  firstNumber: document.querySelector('#first-number'),
  secondNumber: document.querySelector('#second-num'),
  resultInput: document.querySelector('#result-input'),
  plus: document.querySelector('#plus'),
  multiplication: document.querySelector('#multiplication'),
  minus: document.querySelector('#minus'),
  division: document.querySelector('#division'),
  equally: document.querySelector('#equally'),
};
const value = refs.firstNumber.value;
const secondValue = refs.secondNumber.value;
let operation = null;

// Сложение
refs.plus.addEventListener('click', () => {
  operation = (a, b) => a + b;
});

// Умножение
refs.multiplication.addEventListener('click', () => {
  operation = (a, b) => a * b;
});

// Отнимание
refs.minus.addEventListener('click', () => {
  operation = (a, b) => a - b;
});

// Деление
refs.division.addEventListener('click', () => {
  operation = (a, b) => {
    if (b === 0) {
      alert("You can't divide by 0!!!");
      return null;
    }
    return a / b;
  };
});

refs.equally.addEventListener('click', () => {
  const value = parseInt(refs.firstNumber.value);
  const secondValue = parseInt(refs.secondNumber.value);

  if (operation) {
    const result = operation(value, secondValue);
    refs.resultInput.value = result !== null ? result : '';
  } else {
    alert('Please select an operation first!');
  }
});
