function sayHello(){
    console.log("Hello");
}

function init(){
    console.log("Hello world!");
    sayHello();
    sayHi("Nick");
}
function sayHi(name){
    console.log("Hi " + name);
}

window.onload = init; //wait until HTML and CSS gets resolved to run JS

//Variable Scope

