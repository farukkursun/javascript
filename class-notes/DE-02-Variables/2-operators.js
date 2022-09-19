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


// carpma ve üst alma


const pi=3.14;
const r=5;
const alan= pi*r**2;
const cevre= Math.ceil (2*pi*r);

console.log(alan, cevre);

//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

// mod alma
// bur sayinin birler onlar yüler basamaklarini alma

const number=456;
const birler=number%10;
console.log(birler);
const onlar=Math.floor(number/10)%10;
console.log(birler,onlar);
const yüzler=Math.trunc(number/100);
console.log(yüzler);


// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi1=4;
console.log(sayi1==4);
console.log(sayi1=='4');
console.log(sayi1==='4');


console.log(sayi1!=4);
console.log(sayi1!='4');


console.log(sayi1>4);
console.log(sayi1>=4);

// * =======================================================
// *                 MANTIKSAL OPERATÖRLER
// * =======================================================

//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false



const v1=false || 0 ||12.6||true||false||null
console.log(v1);
const v2= false||0||null||undefined||NaN;
console.log(v2);

const v3= 5 && true && true && 0 && '';
console.log(v3);
const v4= 6 && true && 12.5 && 7;
console.log(v4);


        //    degil!


 console.log(!v4); 
//  normalde v4 7 v4 nin degili false

console.log(!v2);
// normalde v4 NaN v2 nin degili true


// * =======================================================
// *                TİP DÖNÜŞÜMLERİ
// * =======================================================

const para= Number("1000") +Number("900")


console.log(para);


// number yerine alternatif parseInt te kullanılabilir
// console.log(parseInt(para));
console.log(Number("")); //0
console.log(Number(null)); //0

console.log(Number(true));



console.log(Number("0x11")); // 17 x=hexa=16



console.log(Number("0b101")); // 5 b=binary 2lik taban



console.log(Number("0o11")); // 9 o=opal=8



console.log(Number("sayi")); //NAN




//* -------- NULLISH COALESCING OPERATOR----------- */
//?  Bir ifadenin null veya undefined olması durumuna 
//göre seçim yapmamıza olanak sağlayan bir operatördür.
//eğer kullanıcı input a null girer yada hiçbişey (undefined) girmezse,
// belirteceğim ifadeyi (noname) kabul et
const isim1 = null; // ?null
const defaultIsim = "noname";
const islem1 = isim1 ?? defaultIsim;
// isim1 true ise onu döndür yoksa 2. ifadeyi
console.log(islem1); //noname 