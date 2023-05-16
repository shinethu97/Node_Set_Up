let fs=require("fs");


//File Write ASynchronously
//writeFile(filename,data to write,callback function(error))
fs.writeFile("test.txt","Shine Thu Lwin",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File Write Ok");
    }
})

//File Read ASynchronously
//readFile(filename,encoding system,callback Function (error,data))
let readData=fs.readFile("test.txt",'utf-8',function(err,data){
    if(err){
        console.log(err);
    }
    else
 console.log(data);
});

//File Append ASynchronously
//writeFile(filename,data to append,callback function(error))
fs.appendFile("test.txt","Thu Zar Lwin",function(err){
if(err){
    console.log(err);
}
else
console.log("File Append Ok");

});

