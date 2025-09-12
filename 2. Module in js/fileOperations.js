
const fs = require("fs");

//To read file content using blocking code.
// console.log('Starting to read')

// const buffer = fs.readFileSync("data.txt", {encoding: 'utf8'});
// console.log(buffer);

// Create and writing a file
try{
fs.writeFileSync("employee.txt","Name: Devesh Singhal, Age: 40, Position: Manager ")
}catch(err){
    console.log(err);
}

// Appened another employee data
fs.appendFileSync("employee.txt", "name: David Doe, Age: 55, Position: COD");

//Deleting a file
try{
fs.unlinkSync("employee.txt")
}catch(err){
    console.log("File dosen't exist")
}
console.log('This is another operation being performed');

