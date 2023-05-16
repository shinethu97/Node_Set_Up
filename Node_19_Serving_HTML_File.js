let http=require("http");
let fs=require('fs');

let myReadStream=fs.createReadStream("index.html",'utf-8');


let server=http.createServer((req,res)=>{
     res.writeHead(200,{"Content-type":"text/html"});
     myReadStream.pipe(res);
    
});

server.listen(3000,()=>{
   console.log("Server is running at port 3000");
});