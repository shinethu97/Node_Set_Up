let fs=require('fs');

//readable stream
let myReadableStr=fs.createReadStream("newtest.txt",'utf-8');

myReadableStr.on("data",function(chunk){
    console.log(chunk);
})