// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================
const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;
console.log(toplamFiyat);



toplamFiyat++;
console.log(toplamFiyat);
// bir fazlasi

toplamFiyat+=10;
console.log(toplamFiyat);


//? + operatörü String Concatination işlemi de yapar.
const ad = "ahmet";
const soyAd = "Can";
console.log(ad  + soyAd);


// bie sayi ve string toplaminin sonucu
const s1=5;
const s2='7';
console.log(s1+s2);


console.log(s1-s2);
// cikarma isleminde verilerden biri number ise digeri string ols abile cikarma islemi yapar


const s3='iki';
console.log(s1-s3); // nan


const dogumTarihi=1979;
 const isim='ashley';

 console.log(isim+ ' ' +(2022-dogumTarihi)+ ' '+ 'yasindadir');


//  altarnatif yazim backtickts
 console.log(`${isim} ${2022-dogumTarihi} yasindadir`);

 let a=5
 console.log(a++, a);
//  a nin ++ degeriyle artirimi bir sonraki islemde  calisit
console.log(a);

 let b=a++;
// deger veririken a 6 oldugu icin b alti oluyor
 console.log(b);
 console.log(a);


console.log('##################################');

let c=10;
console.log(++c, c);
// soldaki ++ artisi oldugu islemde degistiriyor
let d=++c;
console.log(d);
console.log(c);

let e=33;
console.log(--e);
console.log(e--, e);
// sagdaki + - bir sonraki islemde gecerli oluyor


// e yi 5 arttir
e+=5;
console.log(e);

// c nin 10 katini almak c=12

// c=c*10;
console.log(c);
// c*=10;
console.log(c);
console.log(c*=10);
