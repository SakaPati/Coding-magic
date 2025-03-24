const refs = {
  backBtn: document.querySelector('.back-student'),
  nextBtn: document.querySelector('.next-student'),
  lineStudent: document.querySelector('.next-btn'),
  teams: document.querySelectorAll('.team-item'),
};

refs.nextBtn.addEventListener('click', () => {
  const nextAction = document.querySelector('.active');
  if (nextAction === null) {
    return;
  }

  if (nextAction.nextElementSibling) {
    nextAction.nextElementSibling.classList.add('active');
    refs.lineStudent.classList.remove('active');
  } else {
    const firstButton = document.querySelector('.next-item').firstElementChild;
    firstButton.classList.add('active');
  }
  nextAction.classList.remove('active');
});

refs.backBtn.addEventListener('click', () => {
  const nextAction = document.querySelector('.active');
  if (nextAction === null) {
    return;
  }

  if (nextAction.previousElementSibling) {
    nextAction.previousElementSibling.classList.add('active');
  } else {
    const firstButton = document.querySelector('.next-item').lastElementChild;
    firstButton.classList.add('active');
  }
  nextAction.classList.remove('active');
});