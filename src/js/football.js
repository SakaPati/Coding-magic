const ball = document.querySelector('.football-ball');
const cursor = document.querySelector('.football-cursor');
const field = document.querySelector('.field');
cursor.addEventListener('mouseover', () => {
  document.addEventListener('mousemove', event => {
    const fieldStyles = getComputedStyle(field);
    const fieldX = field.offsetLeft + parseFloat(fieldStyles.borderLeftWidth);
    const fieldY = field.offsetTop + parseFloat(fieldStyles.borderTopWidth);
    cursor.style.position = 'absolute';
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
  });
});

console.log(ball);
console.log(cursor);
