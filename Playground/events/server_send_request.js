const https = require("https");
const NUM_REQUEST = 2;
const url = "https://nebri.us/static/me.jpg";
for (let index = 0; index < NUM_REQUEST; index++) {
  https
    .request(url, response => {
      response.on("data", chunk => {
        console.log('got response chunk');
      });
      response.on("end", () => {
        console.log("response finished\n");
      });
    })
    .end();
}
