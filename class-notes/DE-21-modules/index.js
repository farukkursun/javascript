console.log("index.js is running");

import karesi, {
  WHW as W,
  WORKING_HOURS_WEEK,
  dec,
  inc,
  sum,
  counter,
} from "./mymodule.js";
// import  { default as karesi, WHW as W, WORKING_HOURS_WEEK, dec, inc, sum, counter } from './mymodule.js';
import ugurla, { selam } from "./module2.js";

// console.log('W :>> ', W);
// console.log('WORKING_HOURS_WEEK :>> ', WORKING_HOURS_WEEK);

console.log("counter :>> ", counter);
inc(4);
inc(6);
dec();
console.log("dec() :>> ", dec());
inc();
console.log("counter :>> ", counter);
// counter = 29;
inc();
console.log("counter :>> ", counter);

selam();
ugurla();
