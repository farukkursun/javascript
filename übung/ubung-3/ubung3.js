// 1-ücgen alana
const ucgenAlan=function(y,t){
    return (y*t)/2
}

// 2. odev
console.log(ucgenAlan(5,6));

const kareAl = (x) => x * x;

const küpAl = (x) => 6 * (x * x);

const üsAl = (x) => x * x;

const anaProgram = function (secim, x) {
  let sonuc;
  if (secim == "karealan") {
    sonuc = kareAl(x);
  } else if (secim == "küpalan") {
    sonuc = küpAl(x);
  } else if (secim == "üstünüalmak") {
    sonuc = üsAl(x);
  }
  return sonuc;
};

console.log(anaProgram("karealan", 3));
console.log(anaProgram("küpalan", 4));
console.log(anaProgram("üstünüalmak", 5));

// 3 artik yil

const artikYilBulma= function(yil){
if(yil%4==0 &&(yil%100!=0 ||yil%400==0)){
  sonuc=  'artik yil'
}
else
sonuc='artik yil degil'
return sonuc

}
console.log(artikYilBulma(2000)); 