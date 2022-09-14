// odev1
const s = "Clarusway Rocks!";
console.log(s.split('').reverse().join(''));

odev1 = 'Clarusway Rocks!';
const cevir=(s)=>{
    b=s.split('').reverse().join('');
    return b;
}
console.log(cevir(odev1));

// odev2

const kelimeler=['nihan', 'sultan', 'tarik', 'vefa']

const tersCevir=(i)=>{
    const tersListe = i.reverse()
    return tersListe
}

console.log(tersCevir(kelimeler));

// odev3

const diziBir = [5, 8, 10, 22, 33];
const diziiki = [18, 9, 44, 52];

const birlestir = () => {
  const yeniDizi = diziBir
    .sort((a, b) => a - b)
    .concat(diziiki.sort((a, b) => a - b));

  return yeniDizi;
};
console.log(birlestir());
