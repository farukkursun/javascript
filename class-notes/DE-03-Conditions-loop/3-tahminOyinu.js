//? : Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktır.

// const rastgele = Math.ceil(Math.random() * 20);
// console.log(rastgele);

// let hak = 5;

// while (hak > 0) {
//   const tahmin = +prompt("0-20 arasında bir sayı giriniz");

//   hak--;

//   if (tahmin == rastgele) {
//     console.log("Tebrikler Bildiniz🥳");
//     break; //tahminimiz doğru olursa hakkımız varsa bile döngüden çıkalım
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
// oyunu daha hakkımız varken bilip döngüden break le çıkarsak, oyunu kaybettiniz yazısını görmemek için üstteki if i kullandık
