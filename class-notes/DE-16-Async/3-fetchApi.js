//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//********************************************** */

const getButon = document.querySelector(".btn");

const getirUsers = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        // istege bagli olarak erroru throw ile gönderdim
        throw new Error("yeni bir hata");
      }
      return res.json();
    })
    .then((data) => ekranaBastir(data))
    ;
};

getButon.onclick = () => {
  getirUsers();
};

const ekranaBastir = (data) => {
  const userDiv = document.querySelector(".users");

  data.forEach((user) => {
    userDiv.innerHTML += `<h1 class='mt-4'>NAME: <span class='text-danger'>${user.login}</span></h1>
    <img src=${user.avatar_url}    width='50%' alt=""/>
    <h3>HTML_URL:${user.html_url}</h3>
    <h3>LOGIN:${user.login}</h3> `;
  });
};
