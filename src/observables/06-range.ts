import { range, asyncScheduler } from "rxjs";

/**
 * range()
 * El primero es el número de entrada de le emisión
 * El segundo es la cantidad de emisiones que hará
 * El tercero hace que la funcion sea asyncrona
 */
const src$ = range(1, 10, asyncScheduler);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');