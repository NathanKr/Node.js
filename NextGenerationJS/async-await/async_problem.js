const readline = require("readline");

let num1, num2;

const GetNum = instruction => {
  let result;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(instruction, ans => {
    rl.close();
    result = ans;
  });

  return result;
};

num1 = GetNum("enter first number");
num2 = GetNum("enter second number");
console.log("num1 + num2 = ", num1 + num2);
