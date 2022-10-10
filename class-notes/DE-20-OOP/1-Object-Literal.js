//* ======================================================
//*                    (OOPS)
//* object oriented programming
//* ======================================================

const book1 = {
  title: "Karamazov kardesler",
  author: "Dostyevski",
  year: 1980,
  özetFunction: function () {
    return `${this.title} i ${this.year} yilinda ${this.author} yazmistir`;
  },
};

console.log(book1);
console.log(book1.özetFunction()); //


const book2 = {
  title: "Nutuk",
  author: "Atatürk",
  year: 1925,
  özetFunction: function () {
    return `${this.title} i ${this.year} yilinda ${this.author} yazmistir`;
  },
};

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
  // DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)