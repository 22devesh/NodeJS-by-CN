//Apply the correct asynchronous approach to ensure the read operation executes only after the write operation is completed.

const fs = require("fs");

const Solution = () => {
  fs.appendFile("note.txt", " new data", (err) => {
    if (err) {
      console.log(err);
    } 
  });

  console.log("file updated successfully ")
   
 fs.readFile("note.txt", "utf-8",(err,data)=>{
    if(err){
      console.log("Error reading file",err);
    }
    console.log(data);
  });

}
Solution();
module.exports = Solution;