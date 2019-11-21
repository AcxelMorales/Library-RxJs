import { Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('Next: ', value),
  error: error => console.warn('Error: ', error),
  complete: () => console.info('Completed')
};

// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(...[1,2,3,4,5,6],7,8,9);
const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));
obs$.subscribe(observer);