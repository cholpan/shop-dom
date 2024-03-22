const inputUrl = document.querySelector(".inputUrl");
const inputName = document.querySelector(".inputName");
const inputInfo = document.querySelector(".inputInfo");
const inputPrice = document.querySelector(".inputPrice");
const btn = document.querySelector(".creatBtn");
const cards = document.querySelector(".cards");
const del = document.querySelector(".delete");

function addProduct() {
  let result = JSON.parse(localStorage.getItem("product")) || [];
  let newProduct = {
    url: inputUrl.value,
    name: inputName.value,
    info: inputInfo.value,
    price: inputPrice.value,
    id: Date.now(),
  }; 

  let res = [...result, newProduct];
  localStorage.setItem("product", JSON.stringify(res));
  readProduct();
}

function readProduct() {
  cards.innerHTML = "";
  let result = JSON.parse(localStorage.getItem("product")) || [];
  result.map((el) => {
    cards.innerHTML += `
   <div class="creatCard">
   <img class="img1" src ="${el.url}" alt=""/>
   <h1>${el.name}</h1>
   <p>${el.info}</p>
   <h3>${el.price}</h3>
   <ion-icon name="trash-outline" class="delete" onclick="deleteProduct(${el.id})"></ion-icon>
   </div>
    `;
  });
}

btn.addEventListener("click", () => addProduct());

inputPrice.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    readProduct();
  }
});

function deleteProduct(id) {
  let result = JSON.parse(localStorage.getItem("product")) || [];
  result = result.filter((el) => el.id !== id);
  localStorage.setItem("product", JSON.stringify(result));
  readProduct();
}