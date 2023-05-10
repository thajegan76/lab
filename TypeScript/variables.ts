// typescript is super set of JavaScript
// which means whatever we have in JavaScript will definetly
// work in typescript 
// var keyword will also work but in typescript we will use
// let keyword (which is more advanced)
// typescript allow us to mention the data type of the varaible
let product:string = "Television";
let quantity:number = 15;
let price:number = 1455.55;
let isAvailable:boolean = true;

console.log("Product:", product);
console.log("Quantity:", quantity);
console.log("Price:", price);
console.log("Is Available:", isAvailable);

// block scope feature
let x:number = 10;
// let x:number = 15;
{
    // local variable
    let x:number = 15;
    console.log("Inside the block:", x);
}
console.log("Outside the block:", x);

let y:number = 15;
// y = "15"; // these features are only in typescript
// generated javascript do not have all these features

// variable hoisting is disabled
let z = 25; 
// During variable creation if the variable is assigned with value 
// and the variable is declared without data type
// the variable is implicitly assigned with data type of the value
// z = "25";
console.log(z);

// when a variable is created without data type and 
// the variable is not assigned with a value then 
// implicitly it is assigned with "any" data type
let a1;
a1 = 1234;
a1 = "1234";
a1 = true;

// however implicit is not a good practice in typescript world
let a2:any; // explicit declaration is good practise in ts

let fruits:string[] = ['apple', 'orange', 'mango'];
console.log(fruits);

// mixed data type
let icPassport:(number | string) = 720102121234;
icPassport = "A12312345";
// icPassport = true;

let customerdetail:[string, string, number, boolean] = 
    ["Khairi", "Abu Bakar", 720102121234, true];
customerdetail = ["John", "David", 720102121234, true];

let customerDetails:[string, string, number, boolean][]

let custom:(number | string)[] = [1, 2, "One", "Two", 3, 4, "Four"]

let customerdetail02:[(number | string), string, number, boolean]

enum gender {
    Male = "M",
    Female = "F"
}

let sex:gender = gender.Male;
console.log(sex);