// const rastgele = Math.ceil(Math.random() * 20);
// console.log(rastgele);

// let hak = 5;

// while (hak > 0) {
//   const tahmin = +prompt("0-20 arasında bir sayı giriniz");

//   hak--;

//   if (tahmin == rastgele) {
//     console.log("Tebrikler Bildiniz🥳");
//     const soru = prompt("tektat oynamak istermisiniz E/H");
//     if (soru == "E") {
//       continue;
//     } else {
//       console.log("yine baekleriz");
//       break;
//     }
//   } else if (tahmin < rastgele) {
//     console.log(`Dikkat ${hak} hakkınız kaldı`);

//     console.log("ARTTIR 📈");
//   } else {
//     console.log(`Dikkat ${hak} hakkınız kaldı`);

//     console.log("AZALT📉");
//   }
// }
// if (hak == 0) {
//   console.log("oyunu kaybettiniz");
// }

// let not;
// // let toplam=0
// // let sayac= 0
// do {
//   not = prompt("PLEASE NOT GİRİNİZ");
// //   toplam=not+toplam
// //   sayac=+1
// } while (not!="q" || not!='Q')

// console.log(not);q

// let not;
// let toplam = 0;
// let sayac = -1;
// do {
//   not = prompt("PLEASE SAYI GİRİNİZ");
//    not+=not 
//   sayac += 1;
// } while (not !== "q");

// console.log(toplam);


// for(let i=2 ; i<=10 ; i++ ){
//     console.log('ali');
// }

// --------- SORU 2:TEKRAR OYNAMA VE CIKMA SECENEKLI TAHMIN OYUNU SINAN-------
// calistir = true;
// while (calistir) {
//   const rastgele = Math.ceil(Math.random() * 20);

//   let hak = 5;

//   while (hak > 0) {
//     const tahmin = +prompt("0-20 arasinda bir sayi giriniz.");
//     hak--;

//     if (tahmin == rastgele) {
//       console.log("tebrikler bildiniz");
//       break;
//     } else if (tahmin < rastgele) {
//       console.log(`dikkat ${hak} hakkiniz kaldi!`);
//       console.log("ARTTIR 📈");
//     } else if (tahmin > rastgele) {
//       console.log(`dikkat ${hak} hakkiniz kaldi!`);
//       console.log("AZALT 📉");
//     }

//     if (hak == 0) {
//       console.log("oyunu kaybettiniz");
//     }
//   }
//   console.log("tekrar oynamak istiyorsaniz e'ye cikmak icin h'ya basiniz");
//   tekrarOyna = prompt(
//     "tekrar oynamak istiyorsaniz e'ye cikmak icin h'ya basiniz"
//   );
//   if (tekrarOyna == "h") {
//     console.log("kendine iyi bak!!");
//     break;
//   } else if (tekrarOyna == "e") {
//     console.log("Oyun tekrardan basliyor!");
//   } else {
//     alert(
//       "yanlis bir giris yaptiniz. oyun otomatik olarak sonlandiriklaciktir."
//     );
//     break;
//   }
// }
// dogukan
// function oyun() {
//   const randomSayi = Math.ceil(Math.random() * 20);
//   console.log(randomSayi);

//   function tahmin() {
//     let cevap;
//     let tahmin;
//     let hak = 5;
//     while (hak > 0) {
//       tahmin = +prompt("Tahmininizi giriniz.");
//       if (tahmin < randomSayi) {
//         hak--;
//         if (hak == 0) {
//           alert("HAKKINIZ BITTI MAALESEF");
//           break;
//         } else {
//           alert(`${hak} hakkiniz kaldi. SAYIYI ARTIR⬆️`);
//         }
//       } else if (tahmin > randomSayi) {
//         hak--;
//         if (hak == 0) {
//           alert("HAKKINIZ BITTI MAALESEF");
//           break;
//         } else {
//           alert(`${hak} hakkiniz kaldi. SAYIYI AZALT⏬`);
//         }
//       } else {
//         alert("TEBRIKLER SAYIYI BILDINIZ 🥳");
//         break;
//       }
//     }
//     cevap = prompt("Oyunu tekrar oynamak ister misiniz ?(E/H)");
//     if (cevap == "E" || cevap == "e") {
//       oyun();
//     } else {
//       alert("OYUNU SONLANDIRDINIZ. OYUNUMUZU OYNADIGINIZ ICIN TESEKKÜR EDERIM");
//     }
//   }
//   tahmin();
// }

// oyun();


// ---------SORU 2 sinan------------

// let sayac = 0;
// let toplamSayi = 0;
// let tut = 0;

// while (true) {
//   sayilar = prompt("lutfen bir sayi giriniz").toLowerCase();

//   if (sayilar != "q") {
//     toplamSayi = Number(sayilar) + Number(tut);
//     tut = toplamSayi;
//     sayac = sayac + 1;
//     console.log(
//       `suan icin sayilarin toplami ${toplamSayi} ve toplam girilmis sayi ${sayac}`
//     );
//   } else if (sayilar == "q") {
//     ortalama = toplamSayi / sayac;
//     console.log(`girdiginiz sayilarin ortalamasi ${ortalama}`);
//     alert(`girdiginiz sayilarin ortalamasi ${ortalama}`);

//     break;
//   }
// }

// let input;
// let i = 0;
// let notToplam = 0;

// while (true) {
//   input = prompt(
//     `Lütfen Not${i} giriniz.Cikmak istediginizde 'q/Q' ya basiniz `
//   );

//   if (input != "q" && input != "Q") {
//     try {
//       input = +input;
//       notToplam += input;
//       i++;
//     } catch (e) {
//       alert("Hatali bir giris yaptiniz. Tekrar Deneyiniz!");
//       continue;
//     }
//   } else {
//     break;
//   }
// }

// console.log(`Notlarin Toplami = ${notToplam}
// Girilen Toplam Not Sayisi = ${i}
// Notlarin Ortalamasi = ${notToplam / i}`);