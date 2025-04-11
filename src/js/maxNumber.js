const refs = {
  input: document.querySelectorAll('.biggest-number-input'),
  result: document.querySelector('.result-num'),
};

let number = [];

function updateNumberArray() {
  refs.input.forEach(input => {
    let value = input.value;
    const numer = parseInt(value);
    if (isNaN(numer)) {
      refs.result.textContent = `Введіть число`;
      return;
    } else {
      number = [];

      for (let i = 0; i < refs.input.length; i++) {
        number.push(refs.input[i].value);
      }

      number = number.filter(num => num !== '');

      const maxNumber = Math.max(...number);
      refs.result.textContent = `Найбільше число, яке ви ввели: ${maxNumber}`;
    }
  });
}

refs.input.forEach(input => {
  input.addEventListener('input', updateNumberArray);
});
