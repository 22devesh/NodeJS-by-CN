//create a server using NodeJS.
//1. Import http librarry/module
const http =  require('http');

//2. create server
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write("welcome to my application");
    if(req.url == "/product"){
        // response ends
        return res.end("This is Product Page");
    }else if(req.url == '/user'){
        res.end('This is User page');
    }
    //  modifying the response
    res.end("Welcome to NodeJS Ninja Server");
});

//3. Specify to port to listen  to client's response
server.listen(3100, ()=> {
    console.log("Server is listening on port 3100.");
});

// console.log("Server is listening on port 3100");