"use strict";
// how to overcome the function hoisting problem
// it can be done using let keyword
// greeting(); // you cannot use the variable before it is declared
// function greeting():void {
// console.log("Good Morning");
// }
// let us create an annonymous function and assign it to a variable
// declared with "let" keyword
// greeting is not a function it is a variable holding the
// address location which is pointing to the memory where the function
// body is kept
// how to declare a variable which is of function type
var greeting = function () {
    console.log("Good Morning");
};
greeting(); // to call the function add () immediately after the variable
var si = function (principle, period, rate) {
    var interest = (principle * period * rate) / 100;
    return interest;
};
console.log("Simple Interest:", si(1000, 1, 6));
// other than solving the function hoisting problem what are the 
// benefits of creating annonymous functions in js or ts
// now function can be passed as an argument to another function
// library function to calculate area of circle
// function areaofcircle(radius:number) {
//    return 3.14 * radius * radius;
// }
// library function to calculate area of square
// function areaofsquare(side:number) {
//     return side * side;
// }
// main function through with users call areaofcircle or areaofsquare
// function area(keyword:string, value:number) {
// the function is rigid if i want to add areaofsomething then 
// i have to add one more if condition here
// if (keyword === "c") return areaofcircle(value);
// if (keyword === "s") return areaofsquare(value);
// }
// console.log(area("c", 10));
// console.log(area("s", 10));
// library function to calculate area of circle
var areaofcircle = function (radius) {
    return 3.14 * radius * radius;
};
// library function to calculate area of square
var areaofsquare = function (side) {
    return side * side;
};
// main function through with users call areaofcircle or areaofsquare
var area = function (func, value) {
    return func(value);
};
console.log(area(areaofcircle, 10));
console.log(area(areaofsquare, 10));
var calcuatecube = function (x) {
    return x * x * x;
};
console.log(area(calcuatecube, 10));
var celciusvalues = [0, 1, 2, 3, 4, 5];
var farenheitvalues = [];
for (var index_1 = 0; index_1 < celciusvalues.length; index_1++) {
    farenheitvalues.push((celciusvalues[index_1] * 9 / 5) + 32);
}
console.log(farenheitvalues);
farenheitvalues = celciusvalues.map(function (value) {
    return (value * 9 / 5) + 32;
});
console.log(farenheitvalues);
var givenNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = givenNumbers.filter(function (value) {
    return value % 2 === 0;
});
console.log(evenNumbers);
// In functional programming you will pass function as argument
// In functional programming you will return inner function as value
// In functional programming there is a concept called closures
function auth(username, password) {
    // inner function
    var message = "welcome";
    var greeting = function (name) {
        // when an inner function is return from the outer function
        // if the inner function is referring to variables that 
        // belongs to outer function those variabels are replace with
        // values before it gets returned, this is called closures
        console.log("Message:", message);
        console.log("Username:", username);
        console.log("Password:", password);
        return "Good Morning " + name;
    };
    if (username === "admin" && password === "pwd123")
        return greeting;
}
// you can call auth function but cannot call the greeting function
// which is inside the auth function
// unless the innerfunction is return by the outer function then we can call him
var innerfunction = auth("admin", "pwd123");
if (innerfunction !== undefined)
    console.log(innerfunction("Peter Parker"));
// block scope feature was not there in JS before 2016
// instead of block scope we create function scope
var u = 10;
// IIFE (Immediately Invoked Function Expression)
(function () {
    var u = 15;
    console.log(u);
})();
console.log(u);
