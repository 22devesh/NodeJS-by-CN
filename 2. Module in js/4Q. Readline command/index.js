// Import required module
const readline = require('readline');

const Solution = () => {
  // Write your code here
  const qinterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
qinterface.question("Enter the first number: ",(num1)=>{
  qinterface.question("Enter the second number: ",(num2)=>{
    const first = Number(num1);
    const second = Number(num2);
    const result = Math.max(first,second);
    console.log("The maximum of two number is: ", result);

  })
});

};

Solution();
module.exports = Solution;
