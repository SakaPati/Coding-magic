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
  third: document.querySelector('#third-btn'),
  four: document.querySelector('#four-btn'),
  fifth: document.querySelector('#fifth-btn'),
  sixth: document.querySelector('#sixth-btn'),
  seventh: document.querySelector('#seventh-btn'),
  eigthth: document.querySelector('#eigthth-btn'),
  ninth: document.querySelector('#ninth-btn'),
  list: document.querySelector('.scientists-list'),
  item: document.querySelector('.scientists-cards'),
};
refs.first.addEventListener('click', sortArray);
refs.two.addEventListener('click', sortName);
refs.third.addEventListener('click', amountOfYears);
refs.four.addEventListener('click', sortYears);
refs.fifth.addEventListener('click', findAlbertEinshtein);
refs.sixth.addEventListener('click', surnames);
refs.seventh.addEventListener('click', names);
refs.eigthth.addEventListener('click', LongestAndShortesLife);
refs.ninth.addEventListener('click', firstLetters);
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

function amountOfYears() {
  clearCards();
  let number = 1;
  const scientistsWithAge = scientists
    .map(scientist => ({ ...scientist, age: scientist.dead - scientist.born }))
    .sort((a, b) => b.age - a.age)
    .map(i => {
      const text = document.createElement('p');
      const date = document.createElement('span');
      text.textContent = i.name + ' ' + i.surname;
      date.textContent = i.born + '-' + i.dead;
      refs.list.childNodes[number].append(text);
      refs.list.childNodes[number].append(date);
      number += 2;
    });
}

function findAlbertEinshtein() {
  clearCards();
  let number = 1;
  scientists.map(a => {
    if (a.id == 1) {
      const text = document.createElement('p');
      const date = document.createElement('span');
      text.textContent = a.name + ' ' + a.surname;
      date.textContent = a.born + '-' + a.dead;
      refs.list.childNodes[number].append(text);
      refs.list.childNodes[number].append(date);
    } else {
      return false;
    }
  });
}

function surnames() {
  clearCards();
  let number = 1;
  scientists.find(a => {
    if (a.surname.includes('C')) {
      const text = document.createElement('p');
      const date = document.createElement('span');
      text.textContent = a.name + ' ' + a.surname;
      date.textContent = a.born + '-' + a.dead;
      refs.list.childNodes[number].append(text);
      refs.list.childNodes[number].append(date);
      number += 2;
    } else {
      return false;
    }
    console.log();
  });
}

function names() {
  clearCards();
  let number = 1;
  scientists.sort(i => {
    if (!i.name.includes('A')) {
      const text = document.createElement('p');
      const date = document.createElement('span');
      text.textContent = i.name + ' ' + i.surname;
      date.textContent = i.born + '-' + i.dead;
      refs.list.childNodes[number].append(text);
      refs.list.childNodes[number].append(date);
      number += 2;
    }
  });
}

function LongestAndShortesLife() {
  clearCards();
  const scientistsWithAge = scientists.map(scientist => ({
    ...scientist,
    age: scientist.dead - scientist.born,
  }));

  const longestLived = scientistsWithAge.reduce((a, b) =>
    a.age > b.age ? a : b
  );
  const shortestLived = scientistsWithAge.reduce((a, b) =>
    a.age < b.age ? a : b
  );

  const longestText = document.createElement('p');
  const longestDate = document.createElement('span');
  longestText.textContent = longestLived.name + ' ' + longestLived.surname;
  longestDate.textContent =
    longestLived.born +
    '-' +
    longestLived.dead +
    ' (' +
    longestLived.age +
    ' years)';
  refs.list.childNodes[1].append(longestText);
  refs.list.childNodes[1].append(longestDate);

  const shortestText = document.createElement('p');
  const shortestDate = document.createElement('span');
  shortestText.textContent = shortestLived.name + ' ' + shortestLived.surname;
  shortestDate.textContent =
    shortestLived.born +
    '-' +
    shortestLived.dead +
    ' (' +
    shortestLived.age +
    ' years)';
  refs.list.childNodes[3].append(shortestText);
  refs.list.childNodes[3].append(shortestDate);
}

function firstLetters() {
  clearCards()
  let number = 1;
  // scientists.map(i => console.log(i.name[0]));
  scientists.map(a => {
    if (a.name[0] == a.surname[0]) {
      const text = document.createElement('p');
      const date = document.createElement('span');
      text.textContent = a.name + ' ' + a.surname;
      date.textContent = a.born + '-' + a.dead;
      refs.list.childNodes[number].append(text);
      refs.list.childNodes[number].append(date);
      number += 2;
    }
  });
}

function clearCards() {
  let num = 1;
  for (let i = 0; i < scientists.length; i++) {
    refs.list.childNodes[num].innerHTML = ' ';
    num += 2;
  }
}
