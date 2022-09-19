// odev1
// const fiyatlar =[100, 250, 50, 89];

// fiyatlar.forEach((p, i, dizi)=>{
// dizi[i]=p*1.1;
// })
// console.log(fiyatlar);

// odev2

// const fiyatlar = [100, 250, 50, 89];
// fiyatlar
// .filter((a) => a > 90)
// .forEach((b) => console.log(b));

// odev3

// const fiyatlar = [100, 250, 50, 89];

// fiyatlar
//   .filter((a) => a < 110)
//   .map((b) => b * 1.1)
//   .forEach((c) => console.log(c));

// odev4

// const maaslar = [3000, 5000, 4000, 6000, 6500];
// const zamlimaas = maaslar.filter((a) => a < 4000).map((b) => b * 1.5);
// console.log(zamlimaas);

// odev5

// const maaslar = [3000, 5000, 4000, 6000, 6500];
// maaslar
//   .filter((a) => a > 4000)
//   .map((b) => b * 1.25)
//   .forEach((c) => console.log(c));

// const arabalar =['mercedes', 'bmw', 'reno']
// console.log(arabalar.pop());

const adlar = ["ahmet", "can", "Mustafa", "ayse"];
const soyadlar = ["öztürk", "yilmaz", "ari", "cali"];
const birlestir = (x, y) => {
  let adveSoyadlar = [];
  for (let i in x) {
    adveSoyadlar[i] = `${x[i]} ${y[i]}  `;
  }

  return adveSoyadlar;
};

console.log(birlestir(adlar, soyadlar));
