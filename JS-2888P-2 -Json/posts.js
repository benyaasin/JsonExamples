import { fetchData } from "./utils.js";

function getUserId() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = Number(urlParams.get("userId"));

  if (isNaN(userId) === false) {
    if (userId > 0) {
      return userId;
    } else {
      const newId = Number(prompt("Kullanıcı ID'si giriniz"));
      if (isNaN(newId) === false && newId > 0) {
        return newId;
      } else {
        alert("Girilen değer geçerli değildir");
        throw Error("Invalid User Id");
      }
    }
  } else {
    alert("Girilen değer numerik değildir");
    throw Error("Invalid User Id");
  }
}

function createCardFunction(data) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  data.forEach((post) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `
        <div>
        <h1>Başlık:${post.title}</h1>
        <p>Gövde:${post.body}</p>
        </div>
        `;
    container.appendChild(newCard);
  });
}

async function loadCard(userId) {
  const requestUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const data = await fetchData(requestUrl);
  createCardFunction(data);
}

const userId = getUserId();
loadCard(userId);
