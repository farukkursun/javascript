// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

// ornek 1 3 un kati mi diye kontrol etme

const katMi = (sayi) => (sayi % 3 == 0 ? "3ün kati" : "3 ün kati degil");

console.log(katMi(5));

const menu = (x) => {
  console.log("===========================");
  console.log("     JAVASCRİPT DERSİ      ");
  console.log("===========================");
};

menu(3);

// ornek 3#######################
// new Date()= bize şu anın tüm tarihini verir. .getFullYear() bu şekilde .
//  ile istediğimiz tarihi çağırabiliriz (dakika saat gün ay vs)
const yasHasapla = (tarih) => new Date().getFullYear() - tarih;

//alternatif yol
 // const yasHesapla2=(tarih)=> 
 // {const yas=new Date().getFullYear()-tarih;
 // return yas}

console.log(yasHasapla(1977));


//* Örnek4:silindirin hacmini hesaplayan fonksiyon
//********************************************************


const hacimHesapla=(r,h)=> Math.PI*r*r*h;

// toFixed() virgüllü bir sayida virgülden 
// sonra istedigimiz adette rakam görmemizi saglar
console.log(hacimHesapla(3,5).toFixed(3)); 


//* ORNEK5: Girilen n. terimdeki kadar Fibonacci sayisını  
// yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
const fibo=(n)=>{
let fib1=1;
let fib2=1;
let toplam=0;
for(let i=2; i<n; i++){
toplam=fib1+fib2;
fib1=fib2;
fib2=toplam;

}
return fib2;



}

 console.log(fibo(7)); 



 