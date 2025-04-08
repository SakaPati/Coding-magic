const ball = document.querySelector('.football-ball');
const cursor = document.querySelector('.football-cursor');
const field = document.querySelector('.field');
field.addEventListener('mousedown', event => {
  const fieldRect = field.getBoundingClientRect();
  const ballY = event.clientY - fieldRect.top - ball.offsetHeight / 2;
  const ballX = event.clientX - fieldRect.left - ball.offsetWidth / 2;
  ball.style.position = 'absolute';
  field.style.position = 'relative';
  ball.style.top = `${ballY}px`;
  ball.style.left = `${ballX}px`;
});
