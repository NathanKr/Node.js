const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/todos/1";

const promise = fetch(url);
promise
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

  // --- need to put here async \ await