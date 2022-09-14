//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur.
//! (Yani herhangi bir değer döndürmez.log(forEach..)=undefined)
//!terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.

//*======================================================

// ornek

const prices = [100, 250, 50, 90];
prices.forEach((fiyat) => console.log(fiyat));

// console.log(prices);

let toplam = 0;
let gitti = prices.forEach((p) => console.log((toplam += p)));

console.log(gitti); //undefined

//###########################################

// ornek2
//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir.

let toplam1 = 0;
prices.forEach((p, i, prices) => {
  toplam1 += p;
  console.log(`${i}. toplam: ${toplam1}`);

  prices[i] = p + 10;
});
console.log(prices);

//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp ve bunu döndürebilir,
//! tüketmez foreach gibi.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names = [
  "hilal",
  "muhammet",
  "güler",
  "faruk",
  "dogukan",
  "mevlüt",
  "sinan",
];
const yeniIsim = names.map((isim) => isim.toUpperCase()); //.forEach((a)=>console.log(a))
console.log(yeniIsim);
console.log(names);

//*örnek
//* fiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 110 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

const fiyatlar = [100, 250, 50, 90];

fiyatlar.map((p, i, array) => {
  if (p < 250) {
    array[i] = p * 1.5;
  } else array[i] = p * 1.2;
});

console.log(fiyatlar);


//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array'inde fiyatı 100 TL den az olanlari ayri
//* bir diziye saklayalim.


const yeniDizi=  prices.filter((p)=> p<100)
console.log(yeniDizi);

