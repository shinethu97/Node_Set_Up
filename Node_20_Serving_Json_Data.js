let http=require("http");
let fs=require('fs');

let myReadStream=fs.createReadStream("index.html",'utf-8');


let server=http.createServer((req,res)=>{
     res.writeHead(200,{"Content-type":"application/json"});
     let obj={
      name:"Mg Mg",
      age:"20",
      family:{
         father:"U BA",
         mother:"Daw Mya"
      }
     }
     res.end(JSON.stringify(obj));
     
    
});

server.listen(3000,()=>{
   console.log("Server is running at port 3000");
});