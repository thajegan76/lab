sayHello();

// function not returning any value 
function sayHello():void {
    console.log("Hello");
}

sayHello();

function sayHi(name:string):string {
    return "Hello " + name;
}

console.log(sayHi("David"));

function simpleInterest(principle:number, period:number, rate:number):number {
    let interest:number = (principle * period * rate) / 100;
    return interest;
}

console.log("Interest:", simpleInterest(1000, 1, 6));

// how to make parameters optional
function calculateSimpleInterest(principle:number, period:number=1, rate?:number):number {
    if (rate == undefined) rate = 6;
    let interest:number = (principle * period * rate) / 100;
    return interest;
}

console.log("Interest:", calculateSimpleInterest(1000, 2, 7));
console.log("Interest:", calculateSimpleInterest(1000, 2));
console.log("Interest:", calculateSimpleInterest(1000));

// let us create a calulateSum function
function calculateSum(mynumbers:number[]):number {
    let total:number = 0;
    for (let counter:number=0; counter < mynumbers.length; counter++) {
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
function calculateTotal(...mynumbers:number[]):number {
    let total:number = 0;
    for (let counter:number=0; counter < mynumbers.length; counter++) {
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
let mynumbers:number[] = [10, 20, 30, 40, 50];
// console.log(calculateTotal(mynumbers)); // array of arrays
console.log(calculateTotal(...mynumbers)); // spread operator to explode items inside array

let firstArray:number[] = [10, 20, 30, 40, 50];
let secondArray:number[] = [60, 70, 80, 90, 100];
let thirdArray:number[][] = [firstArray, secondArray];
console.log(thirdArray);
let fourthArray:number[] = [...firstArray, ...secondArray];
console.log(fourthArray);