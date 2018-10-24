/*
    unhandled expecption will stop the server !!!
*/
const bCatchException = true; 
const obj = { text: "hello world" };
const objJSON = JSON.stringify(obj);

const handleParse = () => {
  const objParsed = JSON.parse({ text: "hello" }); //throw
  console.log(objParsed);
};

if (bCatchException) {
  try {
    handleParse();
  } catch (error) {
    console.log("exception caught !!!! : \n", error);
  }
} else {
  handleParse();
}
console.log("code continue !!!!!");
