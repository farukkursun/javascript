//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const acButtons = document.querySelector(".ac");
const pmButtons = document.querySelector(".pm");
const percentButtons = document.querySelector(".percent");
const ustEkran = document.querySelector(".previous-display");
const altEkran = document.querySelector(".current-display");

//?operator değişkenleri
let ustEkranYazi = "";
let altEkranYazi = "";
let islem = "";
let esittirVeyaPercentPressed=false;

//!target kullanmak calculator da bug a sebep oluyor. 
//!o da şu ki mesela 7 ye bastığımızda hep 7 ye basılabiliyor, 8 e geçilmiyor
// document.querySelector(".num").onclick=(number)=>{
//  altEkranYazi+=number.target.textContent
// altEkran.textContent=altEkranYazi

// }

numberButtons.forEach((number) => {
  number.onclick = () => {
   // ekrana hazirlik bütün bug lari kontrol fonksiyonu

   ekranaHazirlik(number.textContent);
    //!ekrana bastır
    updateEkran();
  };
});

const ekranaHazirlik = (num) => {
  //?ekranda = 0 varken, kullanıcı 0 veya . giremesin,
  //? bunların dışında bişey girerse o görünsün
  if (num != '0' && num != "." && altEkranYazi == '0') {
    altEkranYazi = num;
    return;
  }

  //?ekran boşken . girilmesin
  if (num === "." && altEkranYazi == "") return;

  //? bir defa nokta girildiyse tekrar girilmesin
  if(num==="." && altEkranYazi.includes(".")) return;

  //?  kullanici ilk basta 0 girer ardindan tekrar sifir girerse girilmesin

  if(altEkranYazi==='0' && num==='0') return;


  //*eşittire basılınca if içi true olur ve altEkranda sadece o an girilen sayı gözükür,
 //* sonrasında işleme normal devam etmek istediğim için, fabrika ayarlarına geri döndüm, 
  //*yani esittirVeyaPercentPressed değişkenini false yaptım ki bu if e giremesin
  if (esittirVeyaPercentPressed) {
    esittirVeyaPercentPressed = false;
    altEkranYazi = num;
  }

  //? bürün sartlari gectikten sonra ekrana ard ardina yaz
  altEkranYazi = altEkranYazi + num;
};

//? javascriptt te yapılanlar ekrana DOM a bastırılacak

const updateEkran = () => {
  altEkran.textContent = altEkranYazi;
  //?işlem null dışında ne girilirse (+,- ,"") alttaki çalışsın
  if (islem != null) {
    ustEkran.textContent = `${ustEkranYazi} ${islem}`; 
    //backtick ekrana kolay ve boşluklu basmamıza yaradı, şart değil
  }
};

operationButtons.forEach((op) => {
  op.onclick = () => {
    islem = op.textContent;
    ustEkranYazi = altEkranYazi;
    altEkranYazi = "";
    updateEkran();
  };
});

equalButtons.onclick = () => {

  hesapla();
  updateEkran();
  esittirVeyaPercentPressed = true;
};

const hesapla = () => {
  let sonuc;
  switch (islem) {
    case "+":
      sonuc = +ustEkranYazi + Number(altEkranYazi);
      break;

    case "-":
      sonuc = ustEkranYazi - altEkranYazi;
      break;

    case "x":
      sonuc = ustEkranYazi * altEkranYazi;
      break;

    case "÷":
      sonuc = ustEkranYazi / altEkranYazi;
      break;

    default:
      break;
  }
  altEkranYazi = sonuc;
  ustEkranYazi = "";
  islem = "";
};

//?AC butonuna basıldığında

acButtons.addEventListener("click", () => {
  islem = "";
  altEkranYazi = "";
  ustEkranYazi = "";
  updateEkran();
});

//? PM butonuna basıldığında

pmButtons.onclick = () => {
  // ekran bos iken pm butonu calismasin
if(!altEkranYazi)return

  altEkranYazi = altEkranYazi * -1;
  updateEkran();
};


percentButtons.onclick =()=>{
if (!altEkranYazi) return;

altEkranYazi = altEkranYazi / 100;
updateEkran();
esittirVeyaPercentPressed = true;

}
