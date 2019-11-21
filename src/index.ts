import { from, of } from "rxjs";

const observer = {
  next: value => console.log('next', value),
  complete: () => console.log('complete')
};

const miGenerador = function*(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const miIterable = miGenerador();

// for (const id of miIterable) {
//   console.log(id);
// }

from(miIterable).subscribe(observer);

// const source$ = from<number[]>([1, 2, 3, 4, 5]);
// const source$ = of<number>(...[1, 2, 3, 4, 5]);
// const source$ = from('Acxel');
const source$ = from(fetch('https://api.github.com/users/AcxelMorales'));

// source$.subscribe(async resp => {
//   const data = await resp.json();
//   console.log(data);
// });

