const themeBtn = document.querySelector('.themeBtn');
const arrow = document.querySelectorAll('[d="M1 1L51 51L1 101"]');

themeBtn.addEventListener('click', onActiveDarkThem);
export function onActiveDarkThem() {
  themeBtn.classList.toggle('Dark');
  document.body.classList.toggle('DarkTheme');
  arrow.forEach(item => {
    if (document.body.classList.contains('DarkTheme')) {
      item.setAttribute('stroke', 'white');
    } else {
      item.setAttribute('stroke', 'black');
    }
  });
}
