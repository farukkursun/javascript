//* ======================================================================
//*                          2- Promises
//* =======================================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginde, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise le degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

// console.log("promise basliyor");
//  const promise1= new Promise((resolve, reject) => {
//   const person = {
//     name: "ali",
//     surname: "gel",
//   };

// resolve(person)
// reject(new Error('promise basarisiz'))
// });

// console.log(promise1);



// promise1.then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })



//* Example-2: TEA TIME
//* -----------------------------------------------------------------------
//* 1. su kaynayana kadar bekleyin -> kettle -> work or failed
//* 2. çay ekle --> çay var ya da yok
//* 3. demlenmesini bekle
// const bekle = (ms) => {
//   const start = new Date().getTime();
//   while (new Date().getTime() < start + ms);
// };
//!ilk then de sıkıntı varsa direk catch e düşer
const brewTea = () => {
  boil()
    .then((status1) => {
      console.log(status1);
      return addTea();
    })
    .then((status2) => {
      console.log(status2);
      
      return 'Tea is ready. Bon Appetite';
    })
    .then((status3) => {
      console.log(status3);
    })
    .catch((err) => console.log(err));
};
const boil = () => {
  return new Promise((resolve, reject) => {
    const boiled = Math.floor(Math.random() * 5);//!0 tutarsa false
    if (boiled) {

      resolve('Water Boiled');
    } else {
      reject(new Error('Kettle Failed'));
    }
  });
};

const addTea = () => {
  return new Promise((resolve, reject) => {
    const teaAvalaible = Math.floor(Math.random() * 3);
    if (teaAvalaible) {
     
      resolve('Tea was added');
    } else {
      reject(new Error('Tea unavailable'));
    }
  });
};

brewTea();

//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//*daha tercih edilenler
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
