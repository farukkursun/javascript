let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;

let enYuksekSkor = 0;
//her check butonuna basilduginda olacakalr

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  //tahmin grilmeden cek butonuna basilmasin
  if (!tahmin) {
    mesaj.textContent = "lütfen bir tahmin giriniz";
  }
  //tahmin dogru ise
  else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "tebrikler bildiniz..💕";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;

    if (skor > enYuksekSkor) {
      enYuksekSkor = skor;
      document.querySelector(".top-score").textContent = enYuksekSkor;
    }
  }
  // tahmin yanlis girildiyse
  else {
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;
      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttir...📈")
        : (mesaj.textContent = "Azalt...📉");
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// again butonuna basildiginda ayarlar baslangis
//degerine dönsün ve arka ekran sihay olsun

document.querySelector(".again").onclick = () => {
  skor = 10;
  document.querySelector(".score").textContent = 10;
  rastgeleSayi = Math.ceil(Math.random() * 20);
  console.log(rastgeleSayi);
  mesaj.textContent = "Oyun Yeni Oyuncu icin basliyor";
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
};
