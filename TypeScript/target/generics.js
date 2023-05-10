"use strict";
/*
function ArrayList(...numbers:number[]):number[] {
    return new Array().concat(numbers);
}

function ArrayList(...numbers:string[]):string[] {
    return new Array().concat(numbers);
}

function ArrayList(...numbers:any[]):any[] {
    return new Array().concat(numbers);
}
*/
function ArrayList() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return new Array().concat(numbers);
}
var mynumberlist = ArrayList(10, 20, 30, 40, 50);
console.log(mynumberlist);
var myfruitlist = ArrayList("apple", "orange", "mango", "banana");
console.log(myfruitlist);
var Customer = /** @class */ (function () {
    function Customer(code, idcard) {
        this.code = code;
        this.idcard = idcard;
    }
    return Customer;
}());
var customer01 = new Customer(1, 97409);
var customer02 = new Customer("1", 97409);
