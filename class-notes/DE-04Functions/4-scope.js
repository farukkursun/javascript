// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//!global scope

let birinci = 5;

let ikinci = 12;

let ucuncu = 345;

console.log(birinci, ikinci, ucuncu);

const fonksiyon = function () {
  birinci = 9;

  let ikinci = 45;

  let dorduncu = 5678;

  console.log(birinci, ikinci, ucuncu, dorduncu);
};

fonksiyon();

console.log(birinci, ikinci, ucuncu); //9 12 345
