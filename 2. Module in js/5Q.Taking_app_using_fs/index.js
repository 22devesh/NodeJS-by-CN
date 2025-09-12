// Please don't change the pre-written code
// Import the necessary modules here
const { Console } = require('console');
const fs = require('fs');

const Solution = () => {
  // Write your code here
  fs.writeFileSync("notes.txt","The world has enough coders");
  const buffer = fs.readFileSync("notes.txt",{encoding: 'utf-8'});
  console.log(buffer);

  //append data
  fs.appendFileSync("notes.txt", " BE A CODING NINJA!");
  const updatedContent = fs.readFileSync("notes.txt",{encoding: 'utf-8'});
  console.log(updatedContent);
};
Solution();
module.exports = Solution;
