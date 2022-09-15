console.log(typeof 42);

console.log([] == []);

//soru 4
// const isString = (x) => (typeof x);
function isString(x) {
  return typeof x;
}

console.log(isString("Clarusway")); //string
console.log(isString(2019)); //number

//soru 5

sum(10, 20);
// diff(10, 20);
function sum(x, y) {
  console.log(x + y);
}

let diff = function (x, y) {
  console.log(x - y);
};

// soru 6
// let avengers = [
//   "Iron Man",
//   "Captain America",
//   "Black Widow",
//   "Hulk",
//   "Hawkeye",
// ];
// const newArray = avengers.slice(2)
// console.log(newArray);

//soru 7

// let daltones = ["joe", "Jack", "Willam", "Averell"];
// daltones.shift();
// daltones.pop();
// console.log(daltones);

//soru 8

let daltones = ["joe", "Jack", "Willam", "Averell"];
for (let i = 0; i < daltones.length; i++) {
  if (i == 0) {
    continue;
  }
  console.log(daltones[i]);
}

//soru 9
let avengers = ["Iron Man", "Captain America", "Black Widow", "Hulk"];
console.log(avengers.splice(2, 1, "Thor", "Hawkeye"));
console.log(avengers);

//soru 10
const inputString = "Lorem ipsum dolor sit amet, consecteturadipiscing elit.";
const capitalizeFirstLetter = (inputString) => {
let yeni= inputString.split(' ')  
  for (let i in yeni){
    yeni[i]=yeni[i].charAt(0).toUpperCase()+yeni[i].slice(1)

  }
  return yeni.join(' ')
};
console.log(capitalizeFirstLetter(inputString));



