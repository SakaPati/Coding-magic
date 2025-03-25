const refs = {
  backBtn: document.querySelector('.back-student'),
  nextBtn: document.querySelector('.next-student'),
  lineStudent: document.querySelector('.next-btn'),
  team: document.querySelector('.team-item'),
  teams: document.querySelectorAll('.team-item'),
  teamList: document.querySelector('.team-list'),
  nextVisible: document.querySelector('.visible'),
};

let transformX = 200;
let total = 0;

refs.nextBtn.addEventListener('click', () => {
  transformX -= 100;
  total -= 100;
  const nextAction = document.querySelector('.active');
  const nextVisible = document.querySelector('.visible');

  // Для нижних палочек
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

  // Для фото
  if (nextVisible) {
    nextVisible.classList.remove('visible');

    if (nextVisible.nextElementSibling) {
      nextVisible.nextElementSibling.style.transform = `translateX(${transformX}%)`;
      nextVisible.nextElementSibling.classList.add('visible');
      nextVisible.classList.add('hidden');
      nextVisible.style.transform = `translateX(${total}%)`;
    } else {
      transformX = 200;
      total = 100;
      refs.team.classList.add('visible');
      refs.teams.forEach(item => {
        item.classList.remove('hidden');
        item.style.transform = `translateX(${transformX}%)`;
      });
    }
  }
});

refs.backBtn.addEventListener('click', () => {
  transformX += 100;
  total += 100;

  const nextAction = document.querySelector('.active');
  const nextVisible = document.querySelector('.visible');

  // Для нижних палочек
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

  // Для фото
  if (nextVisible) {
    nextVisible.classList.remove('visible');

    if (nextVisible.previousElementSibling) {
      nextVisible.previousElementSibling.style.transform = `translateX(${transformX}%)`;
      nextVisible.previousElementSibling.classList.add('visible');
      nextVisible.classList.add('hidden');
      nextVisible.style.transform = `translateX(${total}%)`;
    } else {
      transformX = -200;
      total = 0;
      refs.teamList.lastElementChild.classList.add('visible');
      refs.teams.forEach(item => {
        item.classList.remove('hidden');
        item.style.transform = `translateX(${transformX}%)`;
      });
    }
  }
});
