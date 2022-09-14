// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------
// 1.yöntem (array leteral)

const yaslar = [30, 54, 22, 18, 5];
console.log(yaslar);
console.log(yaslar.length);

// // hata const keyword ile tanimlanmis bir diziyi tamamiyla degistiremezsiniz
// ancak tek tek degisrirebilirsiniz
// yaslar =[]

// 2. yöntem (Array Construcktor)
const cars = new Array("bmv", "mercedes", "volvo");
console.log(cars);

// 10 elemenli bir array tanimlama

const sayilar = new Array(10);
console.log(sayilar);

sayilar[4] = 256;
sayilar[9] = "ayse";
console.log(sayilar);

console.log("#########################");
const dogum = 1979;
const isimler = [
  "Faruk",
  "Güler",
  "Mevlüt",
  2022 - dogum,
  "Sinan",
  true,
  yaslar,
];

console.log(isimler);

//*dizinin elemanlarına veri yazma (indisleme)

isimler[5] = false;
isimler[7] = 16;
console.log(isimler);
console.log(isimler[3]);
console.log(isimler[6][2]);
console.log(isimler[isimler.length - 2][yaslar.length - 3]);
console.log(--isimler[6][2]); //elamandan 1 eksiltildi
console.log(isimler[6][2]);

// ?=========================================================
// ?                DİZİYI DEGISTIREN METODLAR(MUTATOR)
// ?=========================================================

// pop() dizinin son elamanini siler, yazdirirsak sildigi elemani döndürüyor

const meyveler = ["elmA", "erik", "armut", "muz", "kivi"];
console.log(meyveler);

console.log(meyveler, "sildigim meyve:", meyveler.pop());

// shift() dizinin ilk elamanini siler yazdirilinca sil,digi elamani döndürür

console.log(meyveler, meyveler.shift());

// push() dizini sonuna eleman ekler, yazdirilinca güncel elemen sayisini gösteriri

const sayi = meyveler.push("cilek", "Kavun", "karpuz");
console.log(meyveler, sayi);

// unshift() dizinin basina eleman ekler, yazdirilinca güncel elemen sayisini gösteriri

meyveler.unshift("Ayva");
console.log(meyveler);

// reverse() dizinin tamamini ters cevirir.

meyveler.reverse();
console.log(meyveler);

console.log(meyveler[4].split("").reverse());
// meyveler dizisinin 4. elemanini once diziye cevirdik
//sonra tersini aldik cünkü reverse dizilere ait bir metod

console.log(meyveler);

// sort() string ifadelerde ascii degerlerine göre siralar
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu
//(a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular.
//Bu sayade küçük sayılar ile büyük sayıları yer değişirerek
//sıralama işlemini gerçleştirir.

const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];
number.sort();
console.log(number);

number.sort((a, b) => a - b); // dogru siralam icin bunu yazmamiz lazim
console.log(number);

meyveler.sort();
console.log(meyveler);

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

//["Ayva", "Kavun", "armut", "cilek", "erik", "karpuz", "muz"];
meyveler.splice(2, 0, "Uzum");
console.log(meyveler);
//["Ayva", "Kavun", "Uzum", "armut", "cilek", "erik", "karpuz", "muz"];
meyveler.splice(1, 1, "Ananas");
console.log(meyveler);
//["Ayva", "Ananas", "Uzum", "armut", "cilek", "erik", "karpuz", "muz"];

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5];

//* includes()
//*-----------------------------------------------------------

console.log(sayilar1.includes("5")); //false
console.log(sayilar1.includes(5)); //true

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

console.log(sayilar1.indexOf("2")); //3
console.log(sayilar1.indexOf(2, 4)); //5 4. indexten sonra 2 yi ara

console.log(sayilar1.lastIndexOf(5));
console.log(sayilar1.lastIndexOf(2));

//*örnek

//* kullanıcıdan sayı isteyin. girilen sayının
//hem string hem number hali sayılar dizisinde var mı araştır,
// varsa index ini döndür
// const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5];
// const sayiString = prompt("lütfen bir sayi gir");
// const sayiNumber = Number(sayiString);
// let varMi=false;
// if (sayilar1.includes(sayiString)) {
//   console.log("aradiginiz stringin index i:", sayilar1.indexOf(sayiString));
//   varMi=true
// }
// if (sayilar1.includes(sayiNumber)) {
//   console.log("aradiginiz number i index i:", sayilar1.indexOf(sayiNumber));
//   varMi=true
// }
//altarnatif cözüm
// if (
//   sayilar1.includes(sayiString) == false &&
//   sayilar1.includes(sayiNumber) == false
// ) {
//   console.log("aradiginiz eleman yok");
// }
// if(varMi==false){
//     console.log('aradiginiz eleman yok');
// }

console.log("***********");

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join(" ")=>virgül+boşluk sil boşluklarla (join parantezinde 2 varsa her eleman arasına 2 koy) ayır
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

console.log( sayilar1.join('A'));




//*dizinin 2 indexli elemanını tersten string olarak yazdır

//["Ayva", "Ananas", "Uzum", "armut", "cilek", "erik", "karpuz", "muz"];
console.log(meyveler[2].split('').reverse().join(''));


//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());






//* slice()
//*-----------------------------------------------------------
const arabalar= ['bmw', 'merco', 'audi', 'ferrari', 'anadol']

console.log(arabalar.slice(3));
console.log(arabalar.slice(1,3));


//diziyi kopyalamak icin kullanilabilir

const arabalarCopy= arabalar.slice()
console.log(arabalarCopy);


//* concat()
//*-----------------------------------------------------------

const yazilar =['ali', 'dogu', 'hilal', 'ipek']
const rakamlar=[3, 5, 7, 1, 4]
const birlesik= yazilar.concat(rakamlar,true,['a','b','c'], [['x','y','z']])
console.log(birlesik);




//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas =[18, 23, 35, 44, 57, 89]
console.log(yas.every((a) => a >= 18) ? 'dizideki herkezi yasi 18 ve daha büyük' 
:'dizide 18 yas alti eleman var');





//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna (bizim yazdigimiz fonksiyona göre) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

console.log(yas.some((a) => a>70 ));//true
console.log(yas.some((a) => a>90 ));//false



//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.







//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin

console.log(yas.find((item) => item>30));
console.log(yas.findLast((item) => item>30));

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin


console.log(yas.findIndex((i) => i>30 ));