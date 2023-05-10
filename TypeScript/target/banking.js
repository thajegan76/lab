"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(data) {
    return function (target, key, typedPropertyDescriptor) {
        var originalMethod = typedPropertyDescriptor.value;
        typedPropertyDescriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (data.starttime)
                console.log("Capture start time");
            if (data.ipaddress)
                console.log("Capture IP Address");
            var result = originalMethod.apply(this, args);
            if (data.endtime)
                console.log("Capture end time");
            return result;
        };
        return typedPropertyDescriptor;
    };
}
var Banking = /** @class */ (function () {
    function Banking(currentBalance) {
        this.currentBalance = currentBalance;
    }
    Banking.prototype.getCurrentBalance = function () {
        console.log("Current Balance:", this.currentBalance);
    };
    Banking.prototype.withdraw = function (amount) {
        this.currentBalance = this.currentBalance - amount;
        return this.currentBalance;
    };
    Banking.prototype.transfer = function (accountNumber, amount) {
        console.log("Account Number:", accountNumber);
        this.currentBalance = this.currentBalance - amount;
        return this.currentBalance;
    };
    __decorate([
        log({
            starttime: true,
            endtime: true,
            ipaddress: true
        })
    ], Banking.prototype, "getCurrentBalance", null);
    __decorate([
        log({
            starttime: false,
            endtime: false,
            ipaddress: true
        })
    ], Banking.prototype, "withdraw", null);
    __decorate([
        log({
            starttime: true,
            endtime: true,
            ipaddress: false
        })
    ], Banking.prototype, "transfer", null);
    return Banking;
}());
var banking = new Banking(2000);
// when we call the getCurrentBalance method instead of executing it
// it calls the log function by passing the getCurrentBalance method
banking.getCurrentBalance();
console.log("Current Balance:", banking.withdraw(200));
console.log("Current Balance:", banking.transfer("1234-5678-9012", 200));
