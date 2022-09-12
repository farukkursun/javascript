// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

// klasik yöntemle tanimlanan String primitive dir

const str1 = "clarusway";

const str2 = "hello ";

const str3 = "all the words";

console.log(str2 + str3, typeof (str2 + str3));

// String consructor ile tanimlanan string non primitive dir

const str4 = new String("yeni bir String");
console.log(str4, typeof str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! objeckt dönüştürür. Bu sayede, String objecktlerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur.Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

let s1 = "hello ";
const s2 = "World ";

s3 = s1.concat(s2);
console.log(s3);
console.log(s3.concat("clarusway ", s1));
// orjinal degerler degismez, assigning ile degiskenin degeri degisebilir

//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable
//* ------------------------------------------------

const myName = "Ashley Miller";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

let yourName = "ismet";
console.log(yourName.toLocaleUpperCase("tr"));

// toLocaleUpperCase('tr') ile karekteri türkce olarak büyütür

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak
// sonucu donduren fonksiyonu yaziniz.

const esitMi = (str1, str2) =>
  str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? `${str1} ile ${str2} esittir`
    : "esit degildir";

console.log(esitMi("merhaba", "MERHABA"));
console.log(esitMi("hello", "hell"));

//* ----------------------------------------------------------
//* charAt()
//* ------------------------------------------------

const s4 = "primitive \n veri tiplerinin \n property ve\nya metodu olmaz.";

console.log(s4);
console.log(s4.charAt(5));
console.log(s4.charAt(9)); // bosluk

console.log(s4.charAt()); //sayi yoksa ilk harfi dödürür

console.log(s4.charAt(s4.length - 1)); // son karakter

//* ----------------------------------------------------------
//* includes()- case sensitive(büyük kücük harfe duyarli)
//* ------------------------------------------------

const kelime = "to be or nat to be, that is The questions.";
console.log(kelime.includes("TO BE"));
console.log(kelime.includes("to be"));
console.log(kelime.includes("quest"));
console.log(kelime.includes(" "));
console.log(kelime.includes("to be", 15)); // 15. karakterden sonra var mi
console.log(kelime.toUpperCase().includes("TO BE")); // yapararak büyük harfte arayabiliriz

//! NOT: incase insentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.

//* ----------------------------------------------------------
//* indexOf() - lastIndexOf() - case sensitive
//* ------------------------------------------------

const kelime1 = "to be or nat to be, that is The questions.";
console.log(kelime1.indexOf("be")); // ilk 'be
console.log(kelime1.lastIndexOf("be")); // sondan ariyor
console.log(kelime1.indexOf("this")); // olmayan kelime aranirsa -1 aliyor
console.log(kelime1.indexOf(" ")); // bos ilk karakter
console.log(kelime1.indexOf("be", 4)); // 4 den sonraki ilk 'be'

//* ----------------------------------------------------------
//* search()
//* ------------------------------------------------

const kelime2 = "to be or not to be, be that is The questions.9";
console.log(kelime2.search(/[A-Z]/)); //kelimede A-Z ye büyük harf var mi
console.log(kelime2.search(/[0-9]/)); //
console.log(kelime2.search(/[a-z]/)); // buldugu ilk kücük karakteri ceviriyor
console.log(kelime2.search(/[0-9A-Za-z]/)); // 0-9 rakam, A-Z harf a-z harf aramasini yapiyor ilk buldugunu ceviriyor
console.log(kelime2.search(/[0-9A-Za-z]/)); // ilk bulduğu küçük harfin index ini döndürdü
console.log(kelime2.search(/[^a-z]/)); // küçük harflerin dışında ilk bulduğunu döndürdü

//* ----------------------------------------------------------
//* startsWith(), endsWith()--case sensitive
//* ------------------------------------------------
const kelime3 = "Salına salına sinsice olurum sana!";

console.log(kelime3.startsWith("sa")); //false
console.log(kelime3.startsWith("Sa")); //true
console.log(kelime3.startsWith("salına", 7)); //true
// 7 den itibaren say başlangıcı 7 olsun 7 dahil
console.log(kelime3.endsWith("!")); //true
console.log(kelime3.endsWith("salına", 13)); //true
// 13. karakterde bitsin, 13 e kadar al ve 13 dahil değil

//* ----------------------------------------------------------
//* replace(searchFor, replaceWith) --immutable --case sensitive
//* ------------------------------------------------

let oku = "Oku Johny gibi, saf olma, saf olma, saf olma";
oku = oku.replace("saf olma", "basarili ol");
console.log(oku);

console.log(oku.replace(/SAF/i, "fakir")); // i harfi kucuk buyuk harfe duyarsiz ol

console.log(oku.replace(/Saf olma/gi, "zengin olma"));
//!gi ile yazılırsa tüm saf olma (büyük küçük harfe duyarsız) kelimelerini değiştirir, aksi takdirde ilk bulduğunu

//* ----------------------------------------------------------
//* replaceAll() --immutable
//* ------------------------------------------------

let degistir = "Oku Johny gibi, saf olma, saf olma, saf olma";

console.log(degistir.replaceAll("saf olma", "akilli ol"));
// burada kücük büyük hassaiyeti duyarsiz hale getirilmiyor

//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//*  substr (depreceated)
//* ----------------------------------------------------------

const veysel = "UZUN INCE BIR YOLDAYIM YÜRÜYORUM GÜNDÜZ GECE";
console.log(veysel.slice(33)); // 33 ve sonrasi
console.log(veysel.slice(17, 30)); // 17-30 arasi 30 dahil degil
console.log(veysel.substring(17, 30)); //
console.log(veysel.slice(-21, -17)); //
console.log(veysel.slice(14, -17)); //
console.log(veysel.slice(-11)); //

// substring - index calismiyor

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(sep , limit ) =>ikisi de optional
// //* split(" ")=>boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve
// yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan = "Gel gündüzle gece olalim";

console.log(tarkan.split("e")); // e harflerinden ayirarak dizi olustur
console.log(tarkan.split(" ")); // bosluklardan ayirarak dizi olustur
console.log(tarkan.split("")); // her bir karakteri alark dizi olusturur, boluklarida sayar
console.log(tarkan.split("e", 2)); // elerden alir iki mkelime alir
console.log(tarkan.split(" ", 3)); // bosluklardan ayir iki mkelime alir
console.log(tarkan.split()); // tek elemenli bir diziye cevirir

console.log(tarkan); // orjinal degiskeni degistirmez bir degiskene atanirsa degistirir



//* ----------------------------------------------------------
//* trim()
//* ------------------------------------------------

const ramazan ='    Hos gekdin ya Sehr i Ramazan     '
console.log(ramazan);
console.log(ramazan.length);
console.log(ramazan.trim());
console.log(ramazan.trim().length);
//string in basindaki ve sonundaki bosluklari siler


