let fs=require('fs');
var myReadStream=fs.createReadStream("newtest.txt",'utf-8');
var myWriteStream=fs.createWriteStream("newtest2.txt");

 myReadStream.on('data',function(chunk){
    { myWriteStream.write(chunk);}
 })