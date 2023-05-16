setTimeout(function(){
    console.log("I have already waied for 3 seconds");
},3000);

setInterval(function(){
    console.log("I am start working");
},1000);

let i=0;
var myinterval=setInterval(() => {
    i++;
    if(i==5){
        clearInterval(myinterval);
    }
    else{
        console.log(`Set interval is working ${i} times`  )
    }
}, 1000);