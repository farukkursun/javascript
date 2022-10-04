//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.


//* senkron programlama
//!blocking-code
// const bekle = (ms)=>{
// const start=new Date().getTime();
// while(new Date().getTime()<start +ms)
// {}

// }
// console.log('hello');
// console.time('timer1')
// bekle(3000)
// console.timeEnd('timer1')
// console.log('naber');



//? Asenkron(setTimeout) 1 severlik yapilar

// setTimeout(()=>{
//     //! non-blocking code
// console.log('merhabalar1');

// },2000)

// console.log('günaydin2');


// setTimeout(() => {
//     //! non-blocking code
//   console.log("sizede günaydin3");
// }, 3000);


//? Asenkron(setInterval, clearInterval) belli araliklarla durdurulana kadar devam eder.

//? setIntervel non-blocking

// console.log("counter started");
// let counter = 0;

// const interval1 = setInterval(() => {
//   console.log(++counter);

//   if (counter === 5) {
//     clearInterval(interval1); //counter 5 olduğunda setInterval ı durdur
//   }
// }, 1000);

// console.log("counter finished");



//? callback hell

setTimeout(() => {
  console.log("ayse:s.a. ahmet");
  setTimeout(() => {
    console.log("ahmet:a.s. ayse nasılsın");
    setTimeout(() => {
      console.log("ayse:iyiyim sağol");
    }, 1000);
  }, 1000);
}, 1000);
