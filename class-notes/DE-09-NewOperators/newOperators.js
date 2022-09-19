//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================
const car = {
  title: "BMW",
  model: "1990",
  engine: 1.6,
};

// 1.klasikyol
console.log(car.model);
console.log(car["engine"]);

// 2.yol destructuring

const { title, engine } = car;
console.log(title, engine);
console.log(engine);
console.log(car.model);

// nested object example

const arabalar = {
  car1: { title1: "BMW", model: "1990", engine1: 1.6 },
  car2: { title1: "mercedes", model: "1980", engine1: 2.0 },
};
const { car1, car2 } = arabalar;
console.log(car1);
console.log(car1.model);

const { title1, engine1, model } = car1;
console.log(title1);

// car1 için title1 i modeli kullandığımızdan car2 de kullanamayız,
//bu yüzden yeni isim verdik
const { title1: baslik, engine1: motor, model: model1 } = car2;
console.log(baslik);

//!!!!JavaScript'te, iterable protokolü uygulamadıkça
//!Objects iterable değildir. Bu nedenle, bir object
//!in özellikleri üzerinde iterate yapmak
//!için for…of (forEach, map, filter de) kullanamazsınız.
//!sadece for ve for in kullanailabilir
// object object gezinme

for (let i in arabalar) {
  // console.log(i);
  console.log(arabalar[i].title1);
}

//* Array-Object gezinme
const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

people.forEach((item) => {
  // console.log(item.surname);
  // console.log(item.name);
  // console.log((item.age));
  // console.log(item.job);

  const { name, surname, age, job } = item;

  console.log(name);
  console.log(surname);
  console.log(job);
  console.log(age);
});

//? Fonksiyonlar object parametleri dest yapabilir
const yazdir = ({ id, name }) => {
  //parametre olarak b ismiyle karşılasaydık,
  // alttaki yorumdaki işlemleri yapardık
  // console.log(b);
  // const { id, name } = b;

  console.log(id, name);
};

const a = {
  id: 1,
  name: "osman",
};
yazdir(a);

//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden alınmayan, geri kalanları yeni
//?bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT

const personel = {
  pName: "Johny",
  surname: "Deep",
  job: "actor",
  age: 55,
};

const { pName, ...gerisi } = personel;

console.log(pName);
console.log(gerisi);
console.log(gerisi.surname, personel.surname);

//*OBJECT kopya
//orjinal diziyle ayni sartlarda kopya
const ikizPersonel = personel;

console.log(ikizPersonel);

//orjinal dizinden farkli bir kopya dizisi olusturduk
const { ...personelGerisi } = personel;

console.log(personelGerisi);

console.log("************************");
//* orjinal diziden farklı bir kopya dizi oluşturduk,
//bu kopyaya yapılan değişiklik orjinal diziyi bozmaz
personelGerisi.age = 40;
console.log(personel);
console.log(ikizPersonel);
console.log(personelGerisi);

console.log("************************");
//*orjinal diziyle aynı şartlarda bir kopya oluşturduk,
//bu kopyaya yaptığımız ekleme çıkarma değişiklik, orjinal diziyi de bozar
ikizPersonel.age = 100;
console.log(personel);
console.log(ikizPersonel);
console.log(personelGerisi);

// REST ARRAYS

const autos = ["anadol", "renault", "bmw", "mercedes", "ferrari"];

const [birinci, ikinci, ...autoGerisi] = autos;
console.log(birinci, ikinci);
console.log(autoGerisi);

// ARRAY kopya

const esasNumber=[10, 20, 30, 40]

const ikizNumber= esasNumber


const[...arkadasNumber]=esasNumber

arkadasNumber.push(999)
console.log(esasNumber);
console.log(arkadasNumber);
console.log(ikizNumber);
console.log('###############');

ikizNumber.unshift(222)
console.log(esasNumber);
console.log(arkadasNumber);
console.log(ikizNumber);




//!2- Bie fonksiyonun argument larini diziye cevirmek icin kullanilabilir
// 1.yol
const sum=(x,y)=> x+y;

// fonksiyonda belirtilen argument kadar argumentin degerini hesaplar

console.log(sum(1,2,3,4,5));

// 2.yol

const sum2=(...x)=>{
// console.log(x);
console.log(x.reduce((toplam,eleman)=> toplam+eleman,0)); 
}
sum2(1,2,3,4,5)


//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,
//?  içinde gezin vs
//? ------------------------------------------------------

const zeugs =['aircraft', 'Helicopter', 'Bicyle']

const otomobiles= ['Trucks', 'Bus', 'car', 'suv']

console.log([zeugs,otomobiles]);
console.log(zeugs.concat(otomobiles));
const birlesik =[...zeugs,'otobüs',...otomobiles,'tir']
console.log(birlesik);

// stringi Array e cevirme
let kelime= 'Hello Almanya'
console.log([...kelime]);
console.log(Array.from(kelime));

