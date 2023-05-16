var help=require('./helper');
var test=require('./tester');
test();
help.fonfy();
help.gonfy();

/*tester.js
var test=function(){
    console.log("Hello");
}
module.exports=test;
 */

/*helper.js
var fonfy=function(){
    console.log("I am fonfy Method");
}
var gonfy=function(){
    console.log("I am gonfy Method");
}

module.exports={
    fonfy:fonfy,
    gonfy:gonfy
}
*/ 