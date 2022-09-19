//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------
//! alttaki kod index.html de, görmek için buraya da yazdık
//  <h1 class="header" onmouseover="style.color='black'"
// onmouseout="style.color='blue'">DOM Temelleri</h1>

//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
//*  <h1 class="H1" onmouseover=black() onmouseout=blue()>DOM Basics
//</h1>   HTML bu sayfaya script tag ini yazmamız lazım

//JAVASCRİPT
const header = document.querySelector(".H5");
const blue = () => (header.style.color = "blue");
const black = () => (header.style.color = "black");

// method 3 sadece javascripte yapilan metod

// example1
document.querySelector(".H2").onmouseover = () => {
  document.querySelector("#badi").style.backgroundColor = "pink";
};

const baslik = document.querySelector("H1");
baslik.onmouseover = () => {
  baslik.style.color = "red";
};
baslik.onmouseout = () => {
  baslik.style.color = "blue";
};

// examle2 onclick-ondblclick

const birinci = document.querySelector(".bir");
const ikinci = document.querySelector(".iki");

birinci.onclick = () => {
  birinci.src = "./img/logo2.png";
  ikinci.src = "./img/js_logo.png";
};

//

birinci.ondblclick = () => {
  birinci.src = "./img/winter1.jpg";
  ikinci.src = "./img/dom-olaylar.png";

  // ikinci.src="./img/logo2.png"
  // birinci.src="./img/js_logo.png"
};

ikinci.onclick = () => {
  ikinci.src = "./img/logo2.png";
  birinci.src = "./img/js_logo.png";
};

// example 3(button onclick)

const buton = document.querySelector("#btn");

buton.onclick = () => {
  document.querySelector("body").style.backgroundImage =
    "Linear-gradient(to right, purple,gray)";
    buton.textContent='SEARCH'
    buton.style.fontSize='30px'
    header.style.color='red'
};


//!aynı element e hem onclick hem onmouseover atandığında,
//!  önce onmouseover  sonra onclick i çalıştırırsanız sorun olmaz, 
//!  tersi durumda onclick baskın old için onmouseover çalışmaz

// ? METHOD-4 (sadece JAVASCRIPT yazilir - addEventListener())
// ?---------------------------------------------------------------


// ikinci yol

buton.addEventListener('click', () => {
  document.querySelector("body").style.backgroundImage =
    "Linear-gradient(to right, purple,gray)";
    buton.textContent='SEARCH'
    buton.style.fontSize='30px'
    header.style.color='red'
});











