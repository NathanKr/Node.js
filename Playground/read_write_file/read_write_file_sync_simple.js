const os = require("os");
const fs = require("fs");

const data = "Some content!";
const path = "test.txt";
const optionsWrite = { flag: "a" }; // append , by default create file if does not exist
const optionsRead = { encoding: "utf8" };

try {
  fs.writeFileSync(path, data + os.EOL, optionsWrite);
  //file written successfully , path with ? will throw exception
  const text = fs.readFileSync(path, optionsRead);
  console.log(text);
} catch (err) {
  console.error(err);
}
