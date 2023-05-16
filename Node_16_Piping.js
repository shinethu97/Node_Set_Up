let fs=require("fs");
 let myReadStream=fs.createReadStream("newtest.txt",'utf-8');
 let myWriteStream=fs.createWriteStream("newtest4.txt");

myReadStream.on("data",()=>{
   myReadStream.pipe(myWriteStream);
});
