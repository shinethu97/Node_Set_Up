let express=require('express');
let fs=require('fs');
let app=express();


app.get('/',(req,res)=>{
   let myReadStream=fs.createReadStream('index.html','utf-8');
   res.writeHead(200,{"content-type":"text/html"});
   myReadStream.pipe(res);
   
});

app.listen(3000,()=>{
   console.log("Server is running at port 3000");
})