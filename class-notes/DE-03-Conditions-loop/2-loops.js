//   dögüler

//  for

// ekrana 10 kere merhaba yzdir

for (let i = 1; i <= 10; i++) {
  console.log("merhaba", i);
}

// 1 den n e kadar tam sayilari topla

// const n = +prompt("n icin kullanilacak sayiyi gir");
// let toplam = 0;

// for (let i = 1; i <= n; i++) {
//   toplam = toplam + i;
// }
// console.log(toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit
//ederek sonucu yazdıran programı yazınız.

// const sayi = +prompt("asal sayi kontrolu icin bir sayi gir");
// let asal = true;

// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     asal = false;
//   }
// }

// console.log(asal == true ? "asaldir" : "asal degildir");


    // while


    // örnek while icin 0-100 arasinda sayi 
    //giriniz hatali girildiginde error mesaji ver


    // let number = +prompt('while icin 0-100 arasi sayi gir')


    // while(number<0 || number>100)
    // {console.error('number 0-100 arasinda olmali')
    // number = +prompt('while icin 0-100 arasi sayi gir')


    // }
    // console.log('girdiginiz sayi 0-100 arasinda');

    // while daki sart true oldugu sürece altaki süslü isler
    // false oldugu sürece süslünün disina cikilir

//************************ DO-WHİLE ************************
// let number1;

// do{
// number1=+prompt("enter  number for DO-WHİLE")
//  alert(number1)
// }while(number1<0 || number1>100)


// şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir
// console.log(number1);

// ? ORNEK2: klavyeden q karakteri girilene kadar sayı girişi yapan bir programı döngü kullanarak yazınız.
// let sayi1;
// do{
//  sayi1=prompt("PLEASE SAYI GİRİNİZ")

// }while(sayi1!="q")

// console.log(sayi1);

//? : Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktır.


