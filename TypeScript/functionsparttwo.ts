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
let greeting:() => void = function ():void {
    console.log("Good Morning");
}

greeting(); // to call the function add () immediately after the variable

let si:(x:number, y:number, z:number) => number = 
    function (principle:number, period:number, rate:number):number {
        let interest = (principle * period * rate) / 100
        return interest;
    }

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
let areaofcircle:(x:number) => number = function (radius:number):number {
    return 3.14 * radius * radius;
}

// library function to calculate area of square
let areaofsquare:(x:number) => number = function (side:number):number {
    return side * side;
}

// main function through with users call areaofcircle or areaofsquare
let area = function (func:(x:number)=>number, value:number):number {
    return func(value);
}

console.log(area(areaofcircle, 10));
console.log(area(areaofsquare, 10));

let calcuatecube:(x:number) => number = function (x:number):number {
    return x * x * x;
}

console.log(area(calcuatecube, 10));

let celciusvalues:number[] = [0, 1, 2, 3, 4, 5];
let farenheitvalues:number[] = [];
for(let index = 0; index < celciusvalues.length; index++) {
    farenheitvalues.push((celciusvalues[index] * 9/5) + 32);
}
console.log(farenheitvalues);

farenheitvalues = celciusvalues.map(function(value:number) {
    return (value * 9/5) + 32
})
console.log(farenheitvalues);

let givenNumbers:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers:number[] = givenNumbers.filter(function(value) {
    return value % 2 === 0;
})
console.log(evenNumbers);

// In functional programming you will pass function as argument
// In functional programming you will return inner function as value
// In functional programming there is a concept called closures
function auth(username:string, password:string):(((x:string) => string) | undefined) {
    // inner function
    let message:string = "welcome";
    let greeting:(x:string) => string = function(name:string) {
        // when an inner function is return from the outer function
        // if the inner function is referring to variables that 
        // belongs to outer function those variabels are replace with
        // values before it gets returned, this is called closures
        console.log("Message:", message);
        console.log("Username:", username);
        console.log("Password:", password);
        return "Good Morning " + name;
    }
    if (username === "admin" && password === "pwd123")
        return greeting;
}

// you can call auth function but cannot call the greeting function
// which is inside the auth function
// unless the innerfunction is return by the outer function then we can call him
let innerfunction:((x:string) => string) | undefined = auth("admin", "pwd123");
if (innerfunction !== undefined) console.log(innerfunction("Peter Parker"));

// block scope feature was not there in JS before 2016
// instead of block scope we create function scope
var u = 10;

// IIFE (Immediately Invoked Function Expression)
(function () {
    var u = 15;
    console.log(u);
})()

console.log(u);