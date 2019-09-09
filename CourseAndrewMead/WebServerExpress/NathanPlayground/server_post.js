/* 

This is not part of andrew mead course
In his course he pure express is handled with get so how do you access body for post ?
It is done here using 

*/

console.log("app is loading");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();


// --- used to get isolated body under
// used for json inside body 
app.use(express.json());

app.post("/xyz", (req, res) => {
  console.log("recived post body", req.body);
  res.sendStatus(200);
});

console.log(`port is : ${port}`);
console.log("expect json post to /xyz");

// --- listen for requests on this port
app.listen(port);
