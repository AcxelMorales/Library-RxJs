import { Observable, Observer, Subscription, Subject } from 'rxjs';

const observer: Observer<any> = {
  next    : value => console.log('Next: ', value),
  error   : error => console.warn('Error: ', error),
  complete: ()    => console.info('Completed')
};

const intervalo$ = new Observable<number>(subscriber => {
  const interval = setInterval(() => subscriber.next(Math.random()), 1000);

  return () => {
    clearInterval(interval);
    console.log('Interval delete');
  };
});

const subject$: Subject<number> = new Subject<number>();
const isubs: Subscription = intervalo$.subscribe(subject$);

const s1: Subscription = subject$.subscribe(observer);
const s2: Subscription = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(6);
  subject$.complete();
  isubs.unsubscribe();
}, 3500);