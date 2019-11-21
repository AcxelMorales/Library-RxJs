import { Observer, fromEvent } from "rxjs";

// El observer se ocupa para saber el tipado de los evts
const observer: Observer<any> = {
  next: value => console.log('Next: ', value),
  error: error => console.warn('Error: ', error),
  complete: () => console.info('Completed')
};

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(evt => {
  console.log(evt.x);
  console.log(evt.y);
});

src2$.subscribe(evt => {
  console.log(evt.key);
});