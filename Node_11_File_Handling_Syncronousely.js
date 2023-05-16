let fs=require("fs");
let data="Hello I am Shine.How are you.I am graduacted student Hello I am Shine.How are you.I am graduacted student";

//write file synchronously
//writeFileSync(FileName,data to write)
fs.writeFileSync("test.txt",data);

//read file synchronously
//readFileSync(FileName,encoding system)
let readData=fs.readFileSync('test.txt','utf-8');
console.log(readData);

//read dat from a file and write another
let read=fs.readFileSync("test.txt",'utf-8');
fs.writeFileSync("newtest.txt",read);

//append data to a file
//appendFileSync(Filename,data)
fs.appendFileSync("newtest.txt","Append Data");