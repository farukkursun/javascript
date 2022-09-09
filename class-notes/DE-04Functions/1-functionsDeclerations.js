// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:****************************************************************/
//Fonksiyonun tanımlanması

function yazdir() {
  console.log("e daha daha nasılsınız");
}

yazdir(); //call veya invoke
yazdir();

//*Örnek2:(parametreli fonksiyon)*********************************************************/

function adYazdir(ad, ikinciAd, soyad) {
  console.log(soyad, ad, ikinciAd);
}

adYazdir("Doğu", "Mevlüt", "KUZU");
adYazdir("Hilal", "Güler", "KURSUN");

//*Örnek3:(parametreli, dönüş değerli (return lü) fonksiyon)*********************************************************/

function yasHesapla(ad, dogumTarihi) {
  const yas = 2022 - dogumTarihi;

  console.log(`Benim adım ${ad} ve ben ${yas} yasındayım`);
  return yas;
}

const Muhammed = yasHesapla("Muhammed", 1990);
const ipek = yasHesapla("İpek", 1979);
const haluk = yasHesapla("Haluk", 1976);

console.log(Muhammed, ipek, haluk);

console.log("3 arkadaşın yas ortalaması=", (Muhammed + ipek + haluk) / 3);

//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.

//tek sayı çift sayı kontrolü

console.log(tekCiftSayi(5));
console.log(tekCiftSayi(12));

function tekCiftSayi(x) {
  return x % 2 == 1 ? "tektir" : "cifttir";
}
