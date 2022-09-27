let liste = JSON.parse(localStorage.getItem('liste')) ?? [];

let total = 0;

let completed = 0;

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

// add butonuna basildiginda

listeButon.onclick = () => {
  if (!listeInput.value) {
    alert("lütfen bir not giriniz");
  }

  // input a girilen veri (add basinca) daha önce listede varsa tekrar girilmesin
  else if (liste.includes(listeInput.value)) {
    return;
  } else {
    liste.push(listeInput.value);
    localStorage.setItem('liste', JSON.stringify(liste));


    total += 1;
    console.log(liste);
    // ekranda listeyi gör
    showListe();
    listeInput.value = "";
  }
};

const showListe = () => {
  listeUl.innerHTML += `<li>
<i class='fa fa-check fa-lg'></i>
<p> ${listeInput.value}</p>
<i class='fa fa-trash fa-lg'></i>
</li>`;
  toplam.textContent = total;
  // her grisde cursor inputun icinde olsun
  listeInput.focus();

  // silme

  createSilButon();
  // chechk
  createCheckButon();
};

const createSilButon = () => {
  // listedeki bütün cöp kovalarina ulas
  document.querySelectorAll(".fa-trash").forEach((deleteBtn) => {
    deleteBtn.onclick = () => {
      //!ekrandan eleman silerken bize gelen ilk fa-trash listesine göre index aldığı için,
      //!2. ve 3. silmelerde index aynı kaldığı için problem yaşayabiliriz.
      //!bunun çözümü alttaki gibi,ekranda tıklanan fa-trash ın üstündeki
      //! (listeden silinmesini istediğim eleman üstünde old için) elemanın içeriğinin
      //!index ini alıp, diziden o index le silme yapıyoruz

      const silinecekIndis = liste.indexOf(
        deleteBtn.previousElementSibling.textContent
      );
      console.log(silinecekIndis);
      liste.splice(silinecekIndis, 1);

      deleteBtn.parentElement.remove();

      // console.log(liste);
      total = total - 1;
      toplam.textContent = total;
      if (
        completed > 0 &&
        deleteBtn.parentElement.classList.contains("checked")
      ) {
        completed--;
        document.querySelector("#tamamlanan").textContent = completed;
      }
    };
  });
};

// !! classList ve className sonuç istendiğinde aynı sonucu verir tek farkla;
//  classList bir liste, className bir isim şeklinde verir. bunu tek dezavantajı,
//   zaten class ı olan bir elemana className="örnek" şeklinde eleman atamak istersek,
//   varolan elemanları silip sadece örnek class ı nı atar. classList ile toggle ve
//    contains kullanmalıyız, className ile toggle kullanamıyoruz contains yerine
//    includes kullanmalıyız, javascriptte includes tercih edilir

const createCheckButon = () => {
  //!1.yol
  document.querySelectorAll(".fa-check").forEach((a) => {
    a.onclick = () => {
      if (a.parentElement.classList.contains("checked")) {
        a.parentElement.classList.remove("checked");

        completed = completed - 1;
      } else {
        a.parentElement.classList.add("checked");
        completed = completed + 1;
      }
      document.querySelector("#tamamlanan").textContent = completed;
    };
  });
  //!2.yol
  //! Target özelliği, her zaman olay dinleyicisinin olayı tetiklediği öğeye başvuran currentTarget özelliğinin aksine, olayın orjinal olarak gerçekleştiği öğeyi alır .
  // document.querySelector(".fa-check").onclick = (a) => {
  //   if (a.target.parentElement.classList.contains("checked")) {
  //     a.target.parentElement.classList.remove("checked");

  //     completed = completed - 1;
  //   } else {
  //     a.target.parentElement.classList.add("checked");
  //     completed = completed + 1;
  //   }
  //   document.querySelector("#tamamlanan").textContent = completed;
  // };
};

