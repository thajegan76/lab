"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
sayHello();
// function not returning any value 
function sayHello() {
    console.log("Hello");
}
sayHello();
function sayHi(name) {
    return "Hello " + name;
}
console.log(sayHi("David"));
function simpleInterest(principle, period, rate) {
    var interest = (principle * period * rate) / 100;
    return interest;
}
console.log("Interest:", simpleInterest(1000, 1, 6));
// how to make parameters optional
function calculateSimpleInterest(principle, period, rate) {
    if (period === void 0) { period = 1; }
    if (rate == undefined)
        rate = 6;
    var interest = (principle * period * rate) / 100;
    return interest;
}
console.log("Interest:", calculateSimpleInterest(1000, 2, 7));
console.log("Interest:", calculateSimpleInterest(1000, 2));
console.log("Interest:", calculateSimpleInterest(1000));
// let us create a calulateSum function
function calculateSum(mynumbers) {
    var total = 0;
    for (var counter = 0; counter < mynumbers.length; counter++) {
        total = total + mynumbers[counter];
    }
    return total;
}
// caller is suppose to put all the items inside an array and pass the array as argument
console.log(calculateSum([10, 20, 30, 40, 50]));
console.log(calculateSum([10, 20, 30]));
console.log(calculateSum([10, 20, 30, 40, 50, 60, 70, 80]));
// however there are use cases where the caller is not able 
// to put all the items inside an array and pass the array as argument
// Variable length argument (all you need to do is just add ... infront of the argument)
// 3dot attached with parameter is also called rest parameters
function calculateTotal() {
    var mynumbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mynumbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var counter = 0; counter < mynumbers.length; counter++) {
        total = total + mynumbers[counter];
    }
    return total;
}
// the javascript runtime environment takes all the arguments put them inside an array
// and pass the array as argument
console.log(calculateTotal(10, 20, 30, 40, 50));
console.log(calculateTotal(10, 20, 30));
console.log(calculateTotal(10, 20, 30, 40, 50, 60, 70, 80));
// there is also another 3dot is called spread operator
var mynumbers = [10, 20, 30, 40, 50];
// console.log(calculateTotal(mynumbers)); // array of arrays
console.log(calculateTotal.apply(void 0, mynumbers)); // spread operator to explode items inside array
var firstArray = [10, 20, 30, 40, 50];
var secondArray = [60, 70, 80, 90, 100];
var thirdArray = [firstArray, secondArray];
console.log(thirdArray);
var fourthArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
console.log(fourthArray);
