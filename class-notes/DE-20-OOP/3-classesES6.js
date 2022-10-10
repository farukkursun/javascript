//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
    //* ana yapiyi olusturduk
  constructor(a, b, c) {
    this.author = b;
    this.title = a;
    this.year = c;
    this.özetFunction = function () {
      return `${this.title} i ${this.year} yilinda ${this.author} yazmistir`;
    };
  }
  yilHesapla(){
    
    return new Date().getFullYear() - this.year;
  }

}
const book1= new Book('safahat', 'M.Akif Ersoy', 1910)
console.log(book1);
console.log(book1.yilHesapla());


//? INHERITANCE
//* Book objeckt inden Dergi objeckt ine kalip getir

class Dergi extends Book {
  //!Dergi object inde kullanacağım parametreler (hem atadan gelen hem kendisinden)
  constructor(author, title, year, d) {
    //!atadan gelenler(super), super yazdığımız an ES6 sayesinde atanın prototype i de direk gelmiş oldu(bu file ın son satırında çağırdık)
    super(author, title, year);
    //!kendisinden oluşanlar
    this.mounth = d;
  }
}

const dergi1 = new Dergi("ömer seyfettin", "kasagı", 1932, "aralik");
console.log(dergi1);
console.log(dergi1.yilHesapla());