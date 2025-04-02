const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
const refs = {
  first: document.querySelector('#first-btn'),
  two: document.querySelector('#two-btn'),
  four: document.querySelector('#four-btn'),
  list: document.querySelector('.scientists-list'),
  item: document.querySelector('.scientists-cards'),
};
refs.first.addEventListener('click', sortArray);
refs.two.addEventListener('click', sortName);
refs.four.addEventListener('click', sortYears);

function sortArray() {
  clearCards();
  let number = 1;

  for (let i = 0; i < scientists.length; i++) {
    if (scientists[i].born >= 1800) {
      const text = document.createElement('p');
      const date = document.createElement('span');
      text.textContent = scientists[i].name + ' ' + scientists[i].surname;
      date.textContent = scientists[i].born + '-' + scientists[i].dead;
      refs.list.childNodes[number].append(text);
      refs.list.childNodes[number].append(date);
      number += 2;
    }
  }
}

function sortName() {
  clearCards();
  const sortedScientists = [...scientists].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  let number = 1;
  for (let i = 0; i < sortedScientists.length; i++) {
    const text = document.createElement('p');
    const date = document.createElement('span');
    text.textContent =
      sortedScientists[i].name + ' ' + sortedScientists[i].surname;
    date.textContent =
      sortedScientists[i].born + '-' + sortedScientists[i].dead;
    refs.list.childNodes[number].append(text);
    refs.list.childNodes[number].append(date);
    number += 2;
  }
}

// function sortYears() {
//   clearCards();
//   const sortedScientists = [...scientists].sort((b, a) => a.born - b.born);

//   let number = 1;
//   for (let i = 0; i < sortedScientists.length; i++) {
//     const text = document.createElement('p');
//     const date = document.createElement('span');
//     text.textContent =
//       sortedScientists[i].name + ' ' + sortedScientists[i].surname;
//     date.textContent =
//       sortedScientists[i].born + '-' + sortedScientists[i].dead;
//     refs.list.childNodes[number].append(text);
//     refs.list.childNodes[number].append(date);
//     number += 2;
//   }
// }
function sortYears() {
  clearCards();
  const sortedScientists = [...scientists].sort((b, a) => a.dead - b.dead);

  let number = 1;
  for (let i = 0; i < sortedScientists.length; i++) {
    const text = document.createElement('p');
    const date = document.createElement('span');
    text.textContent =
      sortedScientists[i].name + ' ' + sortedScientists[i].surname;
    date.textContent =
      sortedScientists[i].born + '-' + sortedScientists[i].dead;
    refs.list.childNodes[number].append(text);
    refs.list.childNodes[number].append(date);
    number += 2;
  }
}

function clearCards() {
  let num = 1;
  for (let i = 0; i < scientists.length; i++) {
    refs.list.childNodes[num].innerHTML = ' ';
    num += 2;
  }
}
