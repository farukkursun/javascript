// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!------------------------------------------------------------
//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

// promta girilen degerler string olarak
//algilanir sayi olsu istiyorsak önüne ya number yada + koymaliyiz

// const sayi1 = +prompt("1. sayıyı giriniz");
// const islem = prompt("+,-,*,/ işlemlerinden birini giriniz");
// const sayi2 = +prompt("2. sayıyı giriniz");

// //!if şartlarında tek satırlık yapılacak varsa, süslü yazılmadan
// //da olur, ama yapılacak 2 ve daha fazla şey varsa süslü şart

// let sonuc = 0;

// if (islem == "+")
// sonuc = sayi1 + sayi2;
// else if (islem == "-")
// sonuc = sayi1 - sayi2;
// else if (islem == "*")
// sonuc = sayi1 * sayi2;
// else if (islem == "/") {
//   if (sayi2 != 0)
//   sonuc = sayi1 / sayi2;
//   else alert("yanlış sayı girdiniz");
// }
// else alert("yanlıs işlem girdiniz");

// console.log(sonuc);

// örnek

const yas = 20;
const cinsiyet = "erkek";
const saglik = true;

if (yas >= 18 && cinsiyet == "erkek" && saglik == true)
  console.log("askerlik yapabilir");
else console.log("askerlikten muaf");

//*******SWİTCH-CASE */

// console.log("-------------------------------------");
// console.log(" *****==SWİTCH-CASE== 4 Islem Hesap Makinesi ****** ");
// console.log("-------------------------------------");
// const n1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem1 = prompt("Islemi giriniz: +,-,*, /");
// const n2 = +prompt("2.Sayiyi Giriniz:");

// let sonuc1=0;

// switch (islem1) {
//   case "+":
//     sonuc1 = n1 + n2;
//     break;
//   case "-":
//     sonuc1 = n1 - n2;
//     break;
//   case "*":
//     sonuc1 = n1 * n2;
//     break;
//   case "/":
//     sonuc1 = n1 / n2;
//     // if (n2 != 0) sonuc1 = n1 / n2;
//     // else {
//     //   console.log("yanlış");

//     //   sonuc1 = NaN;
//     // }

//     break;

//   default:
//     alert("yanlis islem girdiniz");
//     break;
// }
// console.log(`${n1} ${islem1} ${n2}=${sonuc1}`);

//******TERNARY  ********/

//? ornek: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın,
// değilse maaşınıza %10 zam yapılsın.

// const asgariUcret = 5500;
// const maas= +prompt('maasinizi giriniz')

// const zamliMaas = maas <= asgariUcret ? maas * 1.25 : maas * 1.1;
// console.log( zamliMaas );

//?Ornek:10 aylık maasınız borcunuzdan 5000
// ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

const Schuld = +prompt("borcunuzu giriniz");
const Gehalt = +prompt("10 aylik maasinizi giriniz");

console.log(Gehalt - Schuld >= 5000 ? "kredi alabilir 🥳 " : "kredi alamaz 😞");



