const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
