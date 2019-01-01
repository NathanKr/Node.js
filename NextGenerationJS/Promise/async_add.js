const async_add = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log('inside promise')
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("type error");
      }
    }, 3000);
  });
};

promise1 = async_add(2, 3);
promise2 = async_add("a", 3);
promise1.then(result => console.log(result)).catch(err => console.log(err));
promise2.then(result => console.log(result)).catch(err => console.log(err));
