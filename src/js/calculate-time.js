const refs = {
 input : document.querySelector('.time-input'),
 resultElement : document.querySelector('.calcResult'),
  calculateBtn: document.querySelector('.calculate-time-btn'),
};

refs.calculateBtn.addEventListener('click', onButtonClick);

  function onButtonClick(){
  const minutes = parseFloat(refs.input.value);

  if (!isNaN(minutes) && minutes >= 0) {
    const days = Math.floor(minutes / 1440)
    const hours = Math.floor((minutes % 1440) / 60);
    const remainingMinutes = ((minutes % (1440 * 60)) % 60);

    refs.resultElement.textContent = `${days
      .toString()
      .padStart(2, '0')} дн. ${hours
        .toString()
        .padStart(2, '0')} год. : ${remainingMinutes
          .toString()
          .padStart(2, '0')} хв.`;
  } else {
    refs.resultElement.textContent = 'Будь ласка, введіть коректне число';
  }
}