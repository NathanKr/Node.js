const https = require("https");
console.log("this is using multithreading internally by node.js\n");

const NUM_REQUEST = 2;
let count_cunks = 0;
const url = "https://nebri.us/static/me.jpg";
for (let index = 0; index < NUM_REQUEST; index++) {
  https
    .request(url, response => {
      response.on("data", chunk => {
        count_cunks++;
      });
      response.on("end", () => {
        console.log(`response finished , chunks : ${count_cunks}\n`);
        count_cunks = 0;
      });
    })
    .end();
}
