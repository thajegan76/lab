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
let lambdaSayHello:() => void = () => {
    console.log("Hello");
}

lambdaSayHello();

let lambdaSI:(x:number, y:number, z:number) => number = 
    (principle:number, period:number, rate:number) => {
        let interest = (principle * period * rate) / 100;
        return interest;
    }

console.log("Interest Amount:", lambdaSI(1000, 1, 6));