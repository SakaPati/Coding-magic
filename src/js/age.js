const refs = {
  age: document.querySelector('#age'),
  result: document.querySelector('#age-res'),
  successText: document.querySelector('.age-success-text'),
};
refs.result.addEventListener('click', showEl);
export function showEl() {
  if (refs.age.value % 100 === 0 && refs.age.value % 400 !== 0) {
    refs.successText.style.color = '#900';
    refs.successText.textContent = `Ви народилися не у високосний рік!`;
    // console.log(refs.age.value);
  } else if (refs.age.value % 100 === 0 && refs.age.value % 400 === 0) {
    refs.successText.style.color = '#039900';
    refs.successText.textContent = `Ви народилися у високосний рік!`;
    // console.log(refs.age.value);
  } else {
    refs.successText.style.color = '#900';
    refs.successText.textContent = `Будь-ласка, введіть рік народження з нулем`;
  }
}
showEl();
