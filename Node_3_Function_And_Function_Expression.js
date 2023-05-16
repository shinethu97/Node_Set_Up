//function
function func(val){
    console.log("I am function");
}

//function Expression
var myfun=function(){
    console.log("I am a Function Expression");
}

function func2(val){
    val();
}

func();
myfun();
func2(myfun);