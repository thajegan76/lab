"use strict";
/*
function sayHello():void {
    console.log("Hello");
}

let sayHello = function() {
    console.log("Hello");
}
*/
// left hand side of => is parameters
// right hand side of => is function body
var lambdaSayHello = function () {
    console.log("Hello");
};
lambdaSayHello();
var lambdaSI = function (principle, period, rate) {
    var interest = (principle * period * rate) / 100;
    return interest;
};
console.log("Interest Amount:", lambdaSI(1000, 1, 6));
