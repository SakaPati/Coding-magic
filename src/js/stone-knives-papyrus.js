const refs = {
  stone: document.querySelector('#stone'),
  scissors: document.querySelector('#scissors'),
  paper: document.querySelector('#paper'),
  compVariant: document.querySelector('#variant-comp'),
};
export function randomNumber() {
  console.log(refs.stone);
  console.log(refs.scissors);
  console.log(refs.paper);
}
randomNumber();
