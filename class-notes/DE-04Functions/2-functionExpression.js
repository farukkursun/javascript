// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

// Once fonksiyon olusturulur

// const tekCift = function (sayi) {
//   return sayi % 2 == 1 ? "tektir" : "cifttir";
// };

// console.log(tekCift(5));
// console.log(tekCift(6));

//* Örnek2:tek-en büyük sayiyi bul
//**********************************************************/
// let buyukBul = function (x, y, z) {
//   let enBuyuk;
//   if (x > y && x > z) {
//     enBuyuk = x;
//   } else if (y > x && y > z) enBuyuk = y;
//   else {
//     enBuyuk = z;
//   }
//   return enBuyuk;
// };
// alert(buyukBul(3,5,9));
// console.log(buyukBul(3, 5, 9));

// Örnek2:

const kareal=function(s1,s2){
    return s1**s2
}

const alan=function(s1,s2){
    return s1*s2
}

const cevre = function(s1,s2){
    return (s1+s2)*2
}


const hesapla = function(secim,s1,s2){
    let sonuc;
    if(secim=='square'){
        sonuc=kareal(s1,s2)
    }
    else if(secim=='field'){
      sonuc=  alan(s1,s2)
    }
    else if(secim=='perimeter'){
      sonuc= cevre(s1,s2)
    }
    return sonuc
}

console.log(hesapla('square',2,3));
console.log(hesapla('perimeter',3,4));
console.log(hesapla('field',2,3));
