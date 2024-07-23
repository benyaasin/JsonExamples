import { fetchData } from "./utils.js";

function createCardFunction(dataList) {
  //html tarafındaki cardları oluşturmak için
  const container = document.getElementById("container");
  container.innerHTML = "";
  dataList.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <div>
    <h2>Temel Bilgiler</h2>
    <p>ID:${user.id}</p>
    <p>Name:${user.name}</p>
    <p>Username:${user.username}</p>
    </div>
    <div>
    <h2>Adres Bilgileri</h2>
    <p>City:${user.address.city}</p>
    <p>Street:${user.name}</p>
    <p>Username:${user.address.street}</p>
    </div>
    <div>
    <h2>Şirket Bilgileri</h2>
    <p>Name:${user.company.name}</p>
    </div>
    <div>
    <h2>İletişim Bilgileri</h2>
    <p>Name:${user.email}</p>
    </div>
     <div>
    <h2>Postlar</h2>
    <p><a href="/post.html?userId=${user.id}">Görüntüle</a></p>
    </div>
    `;
    container.appendChild(card);
  });
}
async function loadCard() {
  const requestUrl = `https://jsonplaceholder.typicode.com/users`;
  const data = await fetchData(requestUrl);
  if (data){
    createCardFunction(data);
  }

}

loadCard();
