const { Console } = require('console');
var event=require('events');

var myemitter= new event.EventEmitter();
myemitter.on("startW",function(){
    console.log("Event Emit");
})

let i=0;
setInterval(function(){
    i++;
    if(i%3==0){
        myemitter.emit("startW");
    }
    else{
        console.log("Emite Waiting");
    }
},1000);