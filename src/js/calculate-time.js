document.getElementById('calculate-btn').addEventListener('click', function () {
  const input = document.getElementById('number').value;
  const resultElement = document.getElementById('result');
  const minutes = parseFloat(input);

  if (!isNaN(minutes) && minutes >= 0) {
    const hours = minutes / 60;
    resultElement.textContent = `${minutes} хвилин = ${hours.toFixed(2)} годин`;
  } else {
    resultElement.textContent = 'Будь ласка, введіть коректне число';
  }
});
