// Please do not change the prewritten code

import http from "http";
import fs from "fs";
import { json } from "stream/consumers";

const server = http.createServer((req, res) => {
  //  Write your code here
  if(req.method=="POST"){
    let body ='';
    req.on("data",(chunk)=>{
      body += chunk;
    });

    req.on("end",()=>{
      try{
        // Parse the request body as JSON
        const parsedData = JSON.parse(body);
        const dataToAppend = JSON.stringify(parsedData) + "\n";

        // Append the stringified data to "data.txt"
        fs.appendFileSync("data.txt",dataToAppend,"utf-8");

        // Read and print the updated contents of "data.txt"
        const fileContent = fs.readFileSync("data.txt","utf-8");
        console.log("update data.txt content:\n",fileContent);

      
        // Send success response
        res.writeHead(200,{"Content-type": "application/json"});
        res.end(JSON.stringify({status: "success", message: "Data saved successfuklly. "}));

      }catch(err){
        console.log("Error parsing request: ", err);

        res.writeHead(400,{"content-type": "application/json"});
        res.end(JSON.stringify({status: "error",message: "Invalid json data"}));
      }
    });
  }else{
    // Handle non-POST requests
    res.writeHead(405,{"content-type": "text/plain"});
    res.end("only post request are allowed.");
  }
  // res.end("data received");
});

export default server;




