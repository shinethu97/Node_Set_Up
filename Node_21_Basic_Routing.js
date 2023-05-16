let http=require("http");
let fs=require("fs");

let server=http.createServer((req,res)=>{
   let url=req.url;
   if(url==="/" || url==="/home"){
      let myReadStream= fs.createReadStream("index.html","utf-8");
      res.writeHead(200,{'Content-type':"text/html"});
      myReadStream.pipe(res);
   }
   else if(url==="/about"){
      let myReadStream=fs.createReadStream("about.html","utf-8");
      res.writeHead(200,{"Content-type":"text/html"});
      myReadStream.pipe(res);
   }
   else if(url==="/fbresult"){
      let myReadStream=fs.createReadStream("fbresult.html","utf-8");
      res.writeHead(200,{"Content-type":"text/html"});
      myReadStream.pipe(res);
   }
   else if(url==="/api/fbresult"){
      let obj={
         name:"Shine",
         age:"20",
         family:{
            father:"U Aye Lwin",
            mother:"Daw Khin Nan"
         }
      }
      res.writeHead(200,"application/json");
      res.end(JSON.stringify(obj));
   }
   else{
      res.writeHead(404,"text/plain");
      res.end("Page Not Found");
   }


});

server.listen(3000,()=>{
console.log("Server is running at port 3000");
});