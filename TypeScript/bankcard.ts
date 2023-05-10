interface CreditCard {
    balanceAmount:number;
    borrowMoney():number;
}

interface MasterCard extends CreditCard {
}

interface DebitCard {
    balanceAmount:number;
    transferMoney(accontnumber:string, amount:number):number;
}

interface AtmCard {
    balanceAmount:number;
    withdraw(amount:number):number;
}

export class BankCard implements CreditCard, DebitCard, AtmCard {
    
    balanceAmount: number;
    
    public constructor() { 
        this.balanceAmount = 2000;
    }
    
    borrowMoney(): number {
        throw new Error("Method not implemented.");
    }
    
    transferMoney(accontnumber: string, amount: number): number {
        throw new Error("Method not implemented.");
    }
    
    withdraw(amount: number): number {
        throw new Error("Method not implemented.");
    }

    cashOut():void {
        // console.log(this instanceof CreditCard)
    }

}

// When we make a call to WEB API
// we will receive JSON Objects (Model)
// We must have a variable to keep those JSON objects
// We going to discuss the data type for those variables.
// We have 3 ways to declared the custom data types
type typeaddress = {
    state:string,
    country:string
}

interface interfaceaddress {
    state:string;
    country:string;
}

class classaddress {
    state:string;
    country:string;
    public constructor(state:string, country:string) {
        this.state = state;
        this.country = country;
    }
}

let myaddress:typeaddress = {
    state:"Selangor",
    country:"Malaysia"
}

let youraddress:interfaceaddress = {
    state:"Selangor",
    country:"Malaysia"
}

let ouraddress:classaddress = {
    state:"Selangor",
    country:"Malaysia"
}

function getCard() {
    let creditCard:BankCard = new BankCard();
    return creditCard;
}

let cCard:CreditCard = getCard();
if (cCard) {
    cCard.borrowMoney();
}
