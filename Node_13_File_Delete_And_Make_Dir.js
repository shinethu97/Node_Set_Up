let file=require("fs");
file.unlink("test.txt",function(err){
    if(err)
    {
        console.log(err)
    }
    else
       console.log("Delete Ok");
});

file.mkdir("Test Folder",function(err){
    if(err){
         console.log(err);
    }
    else{
        console.log("Make Folder is Ok")
    }
});