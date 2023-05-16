let http=require('http');
const { text } = require('stream/consumers');
let  port=3000;

let server=http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'text/html'})
    res.end("<h1>Hello Server</h1>");
});

server.listen(port,()=>{
   console.log("Server is running at port 3000");
})