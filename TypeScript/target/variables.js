"use strict";
// typescript is super set of JavaScript
// which means whatever we have in JavaScript will definetly
// work in typescript 
// var keyword will also work but in typescript we will use
// let keyword (which is more advanced)
// typescript allow us to mention the data type of the varaible
var product = "Television";
var quantity = 15;
var price = 1455.55;
var isAvailable = true;
console.log("Product:", product);
console.log("Quantity:", quantity);
console.log("Price:", price);
console.log("Is Available:", isAvailable);
// block scope feature
var x = 10;
// let x:number = 15;
{
    // local variable
    var x_1 = 15;
    console.log("Inside the block:", x_1);
}
console.log("Outside the block:", x);
var y = 15;
// y = "15"; // these features are only in typescript
// generated javascript do not have all these features
// variable hoisting is disabled
var z = 25;
// During variable creation if the variable is assigned with value 
// and the variable is declared without data type
// the variable is implicitly assigned with data type of the value
// z = "25";
console.log(z);
// when a variable is created without data type and 
// the variable is not assigned with a value then 
// implicitly it is assigned with "any" data type
var a1;
a1 = 1234;
a1 = "1234";
a1 = true;
// however implicit is not a good practice in typescript world
var a2; // explicit declaration is good practise in ts
var fruits = ['apple', 'orange', 'mango'];
console.log(fruits);
// mixed data type
var icPassport = 720102121234;
icPassport = "A12312345";
// icPassport = true;
var customerdetail = ["Khairi", "Abu Bakar", 720102121234, true];
customerdetail = ["John", "David", 720102121234, true];
var customerDetails;
var custom = [1, 2, "One", "Two", 3, 4, "Four"];
var customerdetail02;
var gender;
(function (gender) {
    gender["Male"] = "M";
    gender["Female"] = "F";
})(gender || (gender = {}));
var sex = gender.Male;
console.log(sex);
