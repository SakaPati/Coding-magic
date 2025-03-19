const refs = {
  stone: document.querySelector('#stone'),
  scissors: document.querySelector('#scissors'),
  paper: document.querySelector('#paper'),
  compVariant: document.querySelector('#variant-comp'),
  robot: document.querySelector('#robot'),
  human: document.querySelector('#human'),
  correctness: document.querySelector('.correctness'),
};
let currentChoose;
let scoreHuman = 0;
let scoreRobot = 0;
refs.compVariant.addEventListener('click', randomVariant);
export function randomVariant() {
  const random = Math.random();
  const refsArray = [refs.stone, refs.scissors, refs.paper];
  const randomRef = refsArray[Math.floor(random * refsArray.length)];
  refs.compVariant = randomRef;
  console.log(randomRef);
}
refs.scissors.addEventListener('click', () => {
  currentChoose = refs.scissors;

  if (currentChoose == refs.compVariant) {
    console.log('Draw');
  } else if (refs.compVariant == refs.paper) {
    // scoreHuman += 1;
    refs.human.textContent = ++scoreHuman;
    console.log(scoreHuman);
    refs.correctness.style.color = '#039900';
    refs.correctness.textContent = 'Ви виграли раунд!';

    console.log('You win, robot chose paper');
  } else if (refs.compVariant == refs.stone) {
    // scoreRobot += 1;
    refs.robot.textContent = ++scoreRobot;
    console.log(scoreRobot);
    refs.correctness.style.color = '#900';
    refs.correctness.textContent = 'Комп’ютер виграв раунд!!';

    console.log('You lose, robot chose stone');
  }
});

refs.paper.addEventListener('click', () => {
  currentChoose = refs.paper;

  if (currentChoose == refs.compVariant) {
    console.log('Draw');
  } else if (refs.compVariant == refs.scissors) {
    // scoreRobot += 1;
    refs.robot.textContent = ++scoreRobot;
    console.log(scoreRobot);
    refs.correctness.style.color = '#900';
    refs.correctness.textContent = 'Комп’ютер виграв раунд!!';

    console.log('You lose, robot chose scissors');
  } else if (refs.compVariant == refs.stone) {
    // scoreHuman += 1;
    refs.human.textContent = ++scoreHuman;
    console.log(scoreHuman);
    refs.correctness.style.color = '#039900';
    refs.correctness.textContent = 'Ви вийграли раунд';

    console.log('You win, robot chose stone');
  }
});

refs.stone.addEventListener('click', () => {
  currentChoose = refs.stone;

  if (currentChoose == refs.compVariant) {
    console.log('Draw');
  } else if (refs.compVariant == refs.scissors) {
    // scoreRobot += 1;
    refs.robot.textContent = ++scoreRobot;
    console.log(scoreRobot);

    refs.correctness.style.color = '#900';
    refs.correctness.textContent = 'Комп’ютер виграв раунд!!';

    console.log('You win, robot chose scissors');
  } else if (refs.compVariant == refs.paper) {
    scoreRobot += 1;
    refs.human.textContent = scoreHuman++;
    console.log(scoreHuman);

    refs.correctness.style.color = '#039900';
    refs.correctness.textContent = 'Ви вийграли раунд';
  }
});
randomVariant();
