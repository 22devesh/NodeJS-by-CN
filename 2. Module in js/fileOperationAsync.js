const fs = require('fs');
const path = require('path');

// Reading data
const filePath = path.join("src","home","data.txt");
const filePathResolved = path.resolve("src","home","data.txt")
console.log(filePath)
console.log(filePathResolved)

fs.readFile(filePathResolved,(err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString())
    }
});

//write data
// fs.writeFile("employee.txt"," New Employee", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file is written");
//     }
// });

// //append data
// fs.appendFile("employee.txt","\n Another Employee",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file is updated");
//     }
// });

//Delete file
// fs.unlink("employee.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file is deleted");
//     }
// })

// console.log("This is another operation");