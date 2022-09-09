// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.
//ilk n terim toplamı
// let sayi =6;
//  let toplam = 0;

//         for(let i = 1; i <= sayi; ++i)
//         {
//             toplam += i;
//         }

//         console.log("Sayıların Toplamı = " + toplam);

//   mesal 6 icin ilk 6 terim toplamini recursive ile bulalim

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else return toplamlar(n - 1) + n;
};
console.log(toplamlar(6));

//* ORNEK: Girilen n. terime kadar Fibonacci sayılarının
// toplamını hesaplayarak yazdıran fonksiyonu recursive olarak kodlayınız.
console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//!fibonacci dizisindeki sayiyi bulma fonksiyonu



const fibo = (n) => {
  if (n < 2) return n;
  else return fibo(n - 1) + fibo(n - 2);
};
console.log(fibo(6));
