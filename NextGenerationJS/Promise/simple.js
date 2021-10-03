/*
    promise are used for async operation
    here the operation is sync but it is easier to understand
    you can easily make it async by calling resolve and reject from setTimeout
*/

const promise_success = new Promise((resolve, reject) => {
  resolve("this is resolve");
});

promise_success.then(success => console.log("inside then : ", success));

const promise_error = new Promise((resolve, reject) => {
    reject("this is reject");
  });
  
promise_error.catch(error => console.log("inside catch : ", error));
  