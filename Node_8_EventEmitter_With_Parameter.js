var event=require('events');
 var myemitter=new event.EventEmitter();

 myemitter.on("ClickEvent",function(val){
    console.log("ClickEvent Emitter Parameter is"+ val);
 })
 myemitter.emit("ClickEvent","Ha Ha");