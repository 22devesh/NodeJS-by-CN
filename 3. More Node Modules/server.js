const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("this is coming from NodeJs server.");
    console.log(req.url);

    if(req.url=='/first'){
        res.end("This is first response");
    }else{
        res.end("This is default response");
    }
});

server.listen(3200,(req,res)=>{
    console.log("server is listening at 3200");
})
