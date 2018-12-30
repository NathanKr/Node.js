const async_add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("type error");
      }
    }, 2000);
  });
};

a1 = async_add(2,3);
a2 = async_add("a",3);
a1.then(result => console.log(result)).catch(err => console.log(err));
a2.then(result => console.log(result)).catch(err => console.log(err));

