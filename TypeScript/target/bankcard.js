"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCard = void 0;
var BankCard = /** @class */ (function () {
    function BankCard() {
        this.balanceAmount = 2000;
    }
    BankCard.prototype.borrowMoney = function () {
        throw new Error("Method not implemented.");
    };
    BankCard.prototype.transferMoney = function (accontnumber, amount) {
        throw new Error("Method not implemented.");
    };
    BankCard.prototype.withdraw = function (amount) {
        throw new Error("Method not implemented.");
    };
    BankCard.prototype.cashOut = function () {
        // console.log(this instanceof CreditCard)
    };
    return BankCard;
}());
exports.BankCard = BankCard;
var classaddress = /** @class */ (function () {
    function classaddress(state, country) {
        this.state = state;
        this.country = country;
    }
    return classaddress;
}());
var myaddress = {
    state: "Selangor",
    country: "Malaysia"
};
var youraddress = {
    state: "Selangor",
    country: "Malaysia"
};
var ouraddress = {
    state: "Selangor",
    country: "Malaysia"
};
function getCard() {
    var creditCard = new BankCard();
    return creditCard;
}
var cCard = getCard();
if (cCard) {
    cCard.borrowMoney();
}
