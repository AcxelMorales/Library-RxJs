import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
  next    : value => console.log('Next: ', value),
  error   : error => console.warn('Error: ', error),
  complete: ()    => console.info('Completed')
};

const intervalo$ = new Observable<number>(subscriber => {
  let c: number = 0;

  const interval = setInterval(() => {
    subscriber.next(++c);
    console.log(c);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 3500);

  return () => {
    clearInterval(interval);
    console.log('Interval delete')
  };
});

const subscription1: Subscription = intervalo$.subscribe(observer);
const subscription2: Subscription = intervalo$.subscribe(observer);
const subscription3: Subscription = intervalo$.subscribe(observer);

subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
  subscription1.unsubscribe();
  console.log('completed');
}, 3000);