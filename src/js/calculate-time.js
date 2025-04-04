const refs = {
  calculateBtn: document.querySelector('.calculate-time-btn'),
};

refs.calculateBtn.addEventListener('click', () => {
  const input = document.querySelector('.time-input').value;
  const resultElement = document.querySelector('.calcResult');
  const minutes = parseFloat(input);

  if (!isNaN(minutes) && minutes >= 0) {
    const hours = minutes / 60;
    resultElement.textContent = `${minutes} хвилин = ${hours.toFixed(2)} годин`;
  } else {
    resultElement.textContent = 'Будь ласка, введіть коректне число';
  }
});

// document.getElementById('calculate-btn').addEventListener('click', function () {
//   const input = document.getElementById('number').value;
//   const resultElement = document.getElementById('result');
//   const minutes = parseFloat(input);

//   if (!isNaN(minutes) && minutes >= 0) {
//     const hours = minutes / 60;
//     resultElement.textContent = `${minutes} хвилин = ${hours.toFixed(2)} годин`;
//   } else {
//     resultElement.textContent = 'Будь ласка, введіть коректне число';
//   }
// });
