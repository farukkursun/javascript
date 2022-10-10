//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin,
//* yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir 
// (overriding=aynı ada sahip iki işlev tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış 
//     sürümü geçersiz kılar ve işleve her çağrı yapıldığında, son tanımlanan işlev yürütülür.)
//     (overloading=aşırı yükleme demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek 
//         denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )



class Book {
  constructor(a, b, c) {
    this.author = b;
    this.title = a;
    this.year = c;
  }

  özetFunction() {
    return ` ${this.title} i ${this.year} yılında ${this.author} yazmıştır`;
  }
}


//! OVERRIDING

class Dergi extends Book{
    constructor(author, title, year,d){
        super(author, title, year);
        this.mounth=d
    }
//! overriding yapacagimiz fonksiyonu yazalim
özetFunction(){
    return `${this.title} i ${this.author} yazmistir`;
}

}
const dergi1= new Dergi('Einstein', 'Stientific Essays',  1900, 'September');
console.log(dergi1.özetFunction());
console.log(dergi1);

//!OVERLOADİNG
// Diğer programlama dillerinden farklı olarak JavaScript , Function Overloading'i desteklemez . 
// İşte JavaScript'in Function overLoading desteklemediğini gösteren küçük bir kod. 

function foo(arg1) {
    console.log(arg1);
}
 

function foo(arg1, arg2) {
    console.log(arg1, arg2);
}
 
// Driver code
foo("Geeks")
//! Çıktı: 
//!Geeks tanımsız
// Çıktıdaki "tanımsız" ifadesinin nedeni şudur: JavaScript'te aynı adla iki işlev tanımlanırsa, son tanımlanan işlev önceki işlevin üzerine yazar. 
// Bu durumda, foo(arg1) öğesinin üzerine foo(arg1,arg2) tarafından yazılmıştır, ancak 
// işleve yalnızca bir Argüman ("Geeks") ilettik. Bu, ikinci argümanın tanımsız olduğu anlamına gelir, yani ikinci argümanı yazdırmaya çalıştığımızda, "tanımsız" olarak yazdırılır.
// Aşırı Yükleme işlevinin JavaScript'te desteklenmediğini gördük, ancak Aşırı Yükleme işlevini kendi başımıza uygulayabiliriz; bu, daha fazla sayıda ve daha fazla türde argüman söz konusu olduğunda oldukça karmaşıktır. Aşağıdaki kod, JavaScript'te Aşırı Yükleme işlevinin nasıl uygulanacağını anlamanıza yardımcı olacaktır.
//*https://www.geeksforgeeks.org/function-overloading-in-javascript/