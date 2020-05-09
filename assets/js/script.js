const api = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
let data = [];

fetch(api)
  .then((response) => response.json())
  .then((dados) => {
    console.log(dados);
  })
  .catch((error) => console.log(error))

console.log(data);