// Decorator allow us to inject code inside the constructor, method, getter/setter methods
// 4 types of decorartor class decorator, method decorator, property decorator, parameter decorator
type capture = {
    starttime:boolean,
    endtime:boolean,
    ipaddress:boolean
}
function log(data:capture) {
    return function (target:any, key:string, typedPropertyDescriptor:TypedPropertyDescriptor<any>) {
        let originalMethod = typedPropertyDescriptor.value;
        typedPropertyDescriptor.value = function(...args:any[]) {
            if (data.starttime) console.log("Capture start time");
            if (data.ipaddress) console.log("Capture IP Address");
            let result = originalMethod.apply(this, args);
            if (data.endtime) console.log("Capture end time");
            return result;
        }
        return typedPropertyDescriptor;
    }
}

class Banking {

    public currentBalance:number;

    constructor(currentBalance:number) {
        this.currentBalance = currentBalance;
    }

    @log({
        starttime:true,
        endtime:true,
        ipaddress:true
    })
    public getCurrentBalance():void {
        console.log("Current Balance:", this.currentBalance);
    }

    @log({
        starttime:false,
        endtime:false,
        ipaddress:true
    })
    public withdraw(amount:number):number {
        this.currentBalance = this.currentBalance - amount;
        return this.currentBalance;
    }

    @log({
        starttime:true,
        endtime:true,
        ipaddress:false
    })
    public transfer(accountNumber:string, amount:number):number {
        console.log("Account Number:", accountNumber);
        this.currentBalance = this.currentBalance - amount;
        return this.currentBalance;
    }

}

let banking = new Banking(2000);
// when we call the getCurrentBalance method instead of executing it
// it calls the log function by passing the getCurrentBalance method
banking.getCurrentBalance();
console.log("Current Balance:", banking.withdraw(200));
console.log("Current Balance:", banking.transfer("1234-5678-9012", 200));