function add(n1, n2) {
  return n1 + n2;
}

const WORKING_HOURS_WEEK = 40; // 45, 30

let counter = 0;
let localCounter = 0;

function inc(amount = 1) {
  counter += amount;
  return counter;
}

function dec(amount = 1) {
  counter -= amount;
  return counter;
}

const moduleName = "Module 1";
// export default moduleName;
// export default "Module 1";

export default (sayi) => sayi * sayi;

export {
  WORKING_HOURS_WEEK,
  WORKING_HOURS_WEEK as WHW, // başka bir bir isimle tekrar export edebiliriz.
  add as sum,
  inc,
  dec,
  counter,
};

console.log("module.1 is loaded!");
