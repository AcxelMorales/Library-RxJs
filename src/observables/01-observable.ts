import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next: ', value),
  error: error => console.warn('Error: ', error),
  complete: () => console.info('Completed')
};

const obs$ = new Observable<string>(subscriber => {
  subscriber.next('JavaScript');
  subscriber.next('RxJs');

  // Forzar el error
  // const a = undefined;
  // a.name  = 'Acxel';

  subscriber.complete();

  subscriber.next('Anything');
});

obs$.subscribe(observer);

// obs$.subscribe(
//   value => console.log('Next: ', value),
//   error => console.warn('Error: ', error),
//   ()    => console.info('Completed')
// );
