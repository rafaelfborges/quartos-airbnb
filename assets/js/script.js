const api = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

async function findAll() {
  return await fetch(api)
    .then(async response => await response.json())
    .catch(error => console.log(error));
}

function listBedroom() {
  let divElement = document.querySelector('listBedroom');

}