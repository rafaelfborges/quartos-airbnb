const api = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

async function findAllBedroom() {
  return await fetch(api)
    .then(async response => await response.json())
    .catch(error => console.log(error));
}

function listBedroom() {
  const listContent = document.getElementById("listBedroom");

  findAllBedroom().then(data => {
    data.map(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${item.photo}" class="card-img-top" alt="${item.property_type}">
        <div class="card-body">
          <h5 class="card-title">${item.property_type}</h5>
          <p class="card-text">${item.name}</p>
          <p class="card-text">R$${item.price},00</p>
        </div>
      `
      listContent.appendChild(div);
    });
  });
}

listBedroom();