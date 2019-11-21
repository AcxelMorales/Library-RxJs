import { asyncScheduler, Subscription } from "rxjs";

const saludar  = () => console.log('RxJs');
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Acxel');

const sub: Subscription = asyncScheduler.schedule(function(state) {
  console.log('state', state);
  this.schedule(++state, 1000);
}, 2000, 0);

asyncScheduler.schedule(() => sub.unsubscribe(), 6000);