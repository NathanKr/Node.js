const readline = require("readline");

let num1, num2;

const GetNum =  async (instruction) => {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(instruction, ans => {
      resolve(ans);
      rl.close();
    });
  });
};

const compute = async () => {
  num1 = await GetNum("enter first number : ");
  num2 = await GetNum("enter second number : ");
  console.log("num1 + num2 = ", Number(num1) + Number(num2));
}

compute();

