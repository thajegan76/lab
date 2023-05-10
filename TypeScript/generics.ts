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

function ArrayList<T>(...numbers:T[]):T[] {
    return new Array().concat(numbers);
}

let mynumberlist:number[] = ArrayList<number>(10, 20, 30, 40, 50);
console.log(mynumberlist);
let myfruitlist:string[] = ArrayList<string>("apple", "orange", "mango", "banana");
console.log(myfruitlist);

class Customer<U, V> {
    public code:U;
    public idcard:V;
    public constructor(code:U, idcard:V) {
        this.code = code;
        this.idcard = idcard;
    }
}

let customer01:Customer<number, number> = new Customer<number, number>(1, 97409);
let customer02:Customer<string, number> = new Customer<string, number>("1", 97409);

