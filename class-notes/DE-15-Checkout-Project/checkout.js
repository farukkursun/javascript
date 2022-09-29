//* ======================================================================
//*                 Checkout Page Solution
//* document tan değil mesela div den querySelector, map filter, dest,spread=================
//* ======================================================
let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];

//! ekrana yazdirma
sepettekiler.forEach((ürün) => {
  //!DESTRUCTURING
  const { name, price, adet, img } = ürün;

  document.querySelector(
    "#urun-rowlari"
  ).innerHTML += `<div class="card mb-3" style="max-width: 540px;">

  <div class="row g-0">

    <div class="col-md-5">
      <img src=${img} class="img-fluid rounded-start" alt="...">
    </div>

    <div class="col-md-7">

      <div class="card-body">
      
        <h5 class="card-title">${name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price"> ${(price * 0.7).toFixed(
                        2
                      )}  </span>
                      <span class="h5 text-dark text-decoration-line-through">${price}</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${adet}</p>
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-ürün">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="ürün-toplam"> ${(
                      price *
                      0.7 *
                      adet
                    ).toFixed(2)} </span>
                  </div>
      </div>
    </div>
  </div>
</div>`;
});

//! silme
document.querySelectorAll(".remove-ürün").forEach((btn) => {
  btn.onclick = () => {
    removeSil(btn);
  };
});

function removeSil(btn) {
  // btn.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  //! ekrandan sildik
  //? yol closest()= istediginiz class isimli parentElement e kadar gider
  btn.closest(".card").remove();
  //! diziden silmek

  sepettekiler = sepettekiler.filter(
    (ürün) => ürün.name != btn.closest(".card").querySelector("h5").textContent
  );
  console.log(sepettekiler);
}

//! adet degistirme

adetButon();

function adetButon() {
  //!burada - adet ve + elementlerle işim olduğu için, mesela - ye basınca adet (kardeşi)
  //! değişsin istediğim için, minus a ulaşıp ona tıklanınca closest ile parent ına oradan da
  //! kardeşine ulaş eksilt diyebiliriz. ya da gerekli elementlerin parent ına ulaşıp çocuklarına adlar verip,
  //!  artıko adlarla işlem yapabiliriz
  document.querySelectorAll(".adet-controller").forEach((kutu) => {
    const minus = kutu.firstElementChild;
    const adet1 = kutu.querySelector("#ürün-adet");

    minus.onclick = () => {
      //! minus adet degisimini ekrana bastiracagiz
      adet1.textContent = adet1.textContent - 1;

      //! sepettekilerde adet degisismi
      sepettekiler.map((ürün) => {
        if (
          ürün.name == adet1.closest(".card").querySelector("h5").textContent
        ) {
          ürün.adet = Number(adet1.textContent);
        }
      });
      //   console.log(sepettekiler);
      //! ürün toplamini ekrana bastirma
      adet1.closest(".row").querySelector(".ürün-toplam").textContent =
        adet1.closest(".row").querySelector(".indirim-price").textContent *
        adet1.textContent;


        //! adet 1 iken tekrar minus a basilirsa o ürünü sil
        //! (minus butonu removesil butonuna gitsin parentini silsin)
      if(adet1.textContent < 1){
        alert('sileyim mi')
        removeSil(minus)
      }

    };
  });
}
