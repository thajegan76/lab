"use strict";
// json (javascript object)
// developers wanted to transfer data between functions, technologies
// javascript object is nothing but key value pairs
// in other language we also call this as associate array
// there are 2 difference between JSON and JS Objects
// 1. the key in JSON must be enclosed with "" (single quote is not allowed)
//    the string values in JSON must be enclosed with "" (single quote is not allowed)
// 2. JSON cannot have methods
var khairi = {
    firstname: "Khairi",
    lastname: "Abu Bakar",
    icnumber: 720102121234,
    products: ["Television", "Radio"],
    addresses: [
        {
            state: "Selangor",
            country: "Malaysia"
        },
        {
            state: "Perak",
            country: "Malaysia"
        }
    ],
    display: function () {
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.icnumber);
    },
    // cannot be a lamdba function
    /*
    print:() => {
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.icnumber);
    }
    */
    print: function () {
        var _this = this;
        var innerfunction = function () {
            console.log(_this.firstname);
            console.log(_this.lastname);
            console.log(_this.icnumber);
        };
        return innerfunction;
    }
};
console.log(khairi["firstname"]);
console.log(khairi["lastname"]);
console.log(khairi["icnumber"]);
khairi.products.map(function (product) {
    console.log(product);
});
khairi.addresses.map(function (address) {
    console.log(address["state"]);
    console.log(address["country"]);
});
khairi.display();
var newfunction = khairi.print();
newfunction();
// we are not executing the diplay method
// address location of the method and assign it to mynewfunction variable
var mynewfunction = khairi.display;
// mynewfunction();
mynewfunction.call(khairi); // you made "this" keyword, point to khiari object
mynewfunction.apply(khairi);
var bindfunction = mynewfunction.bind(khairi);
bindfunction();
