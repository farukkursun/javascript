//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

// ORNEK dizi1 arrayindeki poz ve neg sayilari iki ayri array de toplayiniz

const diziler1 = [-5, 15, 22, -4, 45, 78];

const negatifler1 = [];
const pozitifler1 = [];

const dizilereAyir1 = (dizi) => {
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] < 0) negatifler1.push(dizi[i]);
    else pozitifler1.push(dizi[i]);
  }
  console.log(pozitifler1);
  console.log(negatifler1);
};
dizilereAyir1(diziler1);
// console.log(pozitifler1);
// console.log(negatifler1);

// ****FOR IN

const diziler2 = [-5, 15, 22, -4, 45, 78];

const negatifler2 = [];
const pozitifler2 = [];

const dizilereAyir2 = (osman) => {
  for (let i in osman) {
    if (osman[i] < 0) negatifler2.push(osman[i]);
    else pozitifler2.push(osman[i]);
  }
  console.log(pozitifler2);
  console.log(negatifler2);
};
dizilereAyir2(diziler2);

// *****FOR OF

const diziler3 = [-5, 15, 22, -4, 45, 78];

const negatifler3 = [];
const pozitifler3 = [];

const dizilereAyir3 = (osman) => {
  for (let i of osman) {
    if (i < 0) negatifler3.push(i);
    else pozitifler3.push(i);
  }
  console.log(pozitifler3);
  console.log(negatifler3);
};
dizilereAyir3(diziler3);

//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız. Eğer o
//* türden bir hayvan yok ise bulunamadığını yazdırsın.
//*--------------------------------------------------------

// const animal=['fil', 'aslan', 'deve', 'fil', 'kaplan',
// 'fil','deve', 'aslan','aslan','aslan']
// const userAnimal= prompt('lutfen bir hayvan ismi girniz')

// const findAnimal =(animal, userAnimal)=>{
// let sayac =0;

// for(let i in animal){
// if (animal[i]==userAnimal)
// sayac++
// }
// return `${userAnimal} hayvanindan ${sayac} adet vardir`

// }
// console.log(findAnimal(animal, userAnimal));
//* global de tanımlanan değişkenleri fonksiyon içinde kullanacaksam,
//  fonksiyona parametreyle göndermem zorunlu değildir,
//   zaten süslü içinden globaldekilere erişebilirim,
//   parametre ile göndereceksem de,
//   fonksiyon içinde onlara farklı isim
//   takabilirim yani animal dizisini gönderip
//   a diye karşılayıp, fonksiyon içinde a ismiyle kullanabilirim

//* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//*ORNEK dizinin elemanlarını yanyana STRING OLATAKyazdır

const arabalar = ["bmw", "mercedes", "audi", "volvo"];

let arabalarString = "";

for (let i of arabalar) {
  arabalarString = arabalarString + i + " ";
}

console.log(arabalarString);


// 2.yol
// console.log(arabalar.join(' '));


//! for loop=> Bir dizi üzerinde yineleme yapmanın orijinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde yineleme yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.