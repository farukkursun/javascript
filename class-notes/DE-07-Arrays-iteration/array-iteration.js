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

const yeniDizi = prices.filter((p) => p < 100);
console.log(yeniDizi);

//* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.
const tlFiyatlar = [100, 150, 100, 50, 80];

const degerler = tlFiyatlar.map((d) => {
  if (d > 100) {
    d = d * 1.1;
  } else {
    d = (d * 115) / 100;
  }
  return d;
});
console.log(degerler);

//  altarnatif filter foreach ile
const ilk = tlFiyatlar.filter((a) => a > 100).map((c) => c * 1.1);
const son = tlFiyatlar.filter((a) => a <= 100).map((z) => z * 115 / 100);

console.log(ilk.concat(son));

//*-------------- ÖRNEK -------------------
//*people dizisinde ismin ilk harfine göre arama yaparak ilgili isimlerin
// ilk 3 harfini yazdıran bir fonksiyon yazınız.
const people = [
  "Baser",
  "Berivan",
  "Mehmet",
  "Mustafa",
  "Mali",
  "Halil",
  "Fatih",
  "Hasret",
  "Fatma",
];

const bulHarf = (harf) => {
  people
    .filter((a) => a.startsWith(harf.toUpperCase()))
    .map((b) => b.slice(0, 3))
    .forEach((x) => console.log(x));
};
bulHarf("b");
bulHarf("M");


//* ======================================================
//*                     REDUCE
//* ======================================================



// SALARIS DIZISINDEKI MAASLARI TOPLAYINIZ (reduce metodunu kullanarak)

const salaries =[3000, 5000, 4000, 6000, 7500]
// forEch metodu dizilerde gecerlidir tek eleman döndüren reduce de kullanilamaz



console.log(salaries.reduce((toplam, diziElaman)=>toplam+diziElaman,0));
console.log(salaries.reduce((carpim, diziElaman)=>carpim*diziElaman,1));

// ilk parametre toplam, ikinci parametre dizi elemani biz istedigimiz adi verebiliriz,
// aradaki islem göre yapacagini algiliyot
// istersek toplami istedigimiz rakamdan baslatabiliriz 0 yerine istedigimiz rakmai yazariz
// o ile 1 i yazmaya gerek yok


