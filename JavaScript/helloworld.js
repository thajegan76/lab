"use strict"

// We assume we have ES5 only
var product = "Television";
var quantity = 10;
var price = 1455.55;
var isAvailable = true;

console.log("Product:", product);
console.log("Quantity:", quantity);
console.log("Price:", price);
console.log("Is Available:", isAvailable);
// console.log is not JavaScript
// In ECMA specification you will never come across console object
// console.log is NODEJS API

// Even in browser environment also you can use the console.log
// The API is provided by browser vendor, how ever it is not 
// mention in the ECMA documentation https://262.ecma-international.org/13.0/
// In future there can be a browser which does not provide console object
// but comply with ECMA specification
// Similarly browser vendors provide various other objects such as 
// document (document.getElementById("id").value = "xyz"), window, history
// What is the standard for browser API https://developer.mozilla.org/en-US/

// One of the most important reason for us to use Angular / Reactjs
// is to avoid using such browser API
// These frameworks take the responsibility of converting our code to native API

// In ES5 the keyword to declare variabe is var
// In ES5, we have only 2 variable scope, global scope and function scope
// ES5 do not have block scope feature (modern language feature)
var x = 10;
{
    var x = 15;
    console.log(x); // 15
}
console.log(x); // 10 how ever it gets printed as 15 (over writed)
// In ES5 the code inside the block uses the variable which is declared outside the block

// Variables can be declared without var keyword
// To force the variable declartions you can add a macro at the beginning of the program
// However the declaration can be after the variable is used
// That means, variable can be used before it is even being declared 
// And this is called "variable hoisting" feature
y = 25;
console.log(y);
var y;

// JavaScript during comparison does not take data type into consideration
var a = 10;
var b = "10";
if (a == b) { // the double == convert the data type of the variable implicitly
    console.log("A equals B");
}
// If you want the data type to be taken into consideration then use ===
if (a === b) {
    console.log("A equals B");
} else {
    console.log("A not equals B");
}

// Arithmetic operators
console.log(10 + 10);
console.log(10 + "10");
console.log(10 * 10);
console.log(10 * "10");
console.log(10 * "a"); // NaN => Not a number

// Declaring the variable without assigning a value to it is a waste
var z; // when JS see this line it does not know what to do with this line
// it ignores this line 71 and jump to the next line 73
console.log(z);

// in other programming language when you do this
// int x;
// the language will know how much memory to allocate since we use the keyword int
// since we use int it will allocate 32 bit memory
// In javascript we use var keyword to declare every single variable regardless of 
// its data type. So the language does not know what to do when you say var x;

sayHello();
// JavaScript does not know what to do with this function declaration
function sayHello() { 
    console.log("Hello...");
}
// JavaScript ignore line 84 and jump to 88
sayHello();
// When JavaScript see the function call then JavaScript search for the function
// in that fine and load the function in memory and execute it 
// which means you can call the function even before it is declared
// this is actually called "function hoisting"